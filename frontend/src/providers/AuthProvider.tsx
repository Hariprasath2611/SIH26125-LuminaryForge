import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { useDisconnect } from 'wagmi';
import { useQueryClient } from '@tanstack/react-query';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { apiClient } from '../lib/api';

export interface UserAccount {
  uid: string;
  email: string;
  displayName?: string | null;
  persona: 'HOLDER' | 'ISSUER' | 'VERIFIER';
  walletAddress?: string | null;
  onChainRoles: string[];
  didRegistered: boolean;
}

export interface DemoUserProfile {
  uid: string;
  email: string;
  displayName: string;
  persona: 'HOLDER' | 'ISSUER' | 'VERIFIER';
  walletAddress: string;
  isDemo: true;
}

export interface AuthContextType {
  user: User | DemoUserProfile | null;
  account: UserAccount | null;
  loading: boolean;
  isDemoUser: boolean;
  signIn: (email: string, pass: string) => Promise<void>;
  signUp: (email: string, pass: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithDemo: (role: 'student' | 'university' | 'employer') => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
  signOut: () => Promise<void>;
  getIdToken: () => Promise<string | null>;
  refreshAccount: () => Promise<UserAccount | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | DemoUserProfile | null>(null);
  const [account, setAccount] = useState<UserAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { disconnect } = useDisconnect();
  const queryClient = useQueryClient();

  const getIdToken = useCallback(async (): Promise<string | null> => {
    if (!user) return null;
    if ('isDemo' in user && user.isDemo) {
      return `demo-jwt-:${user.uid}:${user.email}:${user.displayName}`;
    }
    return (user as User).getIdToken();
  }, [user]);

  // Hook up apiClient with the active token provider
  useEffect(() => {
    apiClient.setTokenProvider(getIdToken);
  }, [getIdToken]);

  const refreshAccount = useCallback(async (): Promise<UserAccount | null> => {
    try {
      const token = await getIdToken();
      if (!token) {
        setAccount(null);
        return null;
      }
      const data = await apiClient.getMe();
      const userAcc: UserAccount = {
        uid: data.uid,
        email: data.email,
        displayName: data.displayName,
        persona: data.persona || 'HOLDER',
        walletAddress: data.walletAddress || null,
        onChainRoles: data.onChainRoles || ['HOLDER'],
        didRegistered: !!data.didRegistered,
      };
      setAccount(userAcc);
      return userAcc;
    } catch (err) {
      console.warn('[AuthProvider] Failed to refresh account profile:', err);
      return null;
    }
  }, [getIdToken]);

  // Listen to Firebase auth state
  useEffect(() => {
    // Check if demo user is stored in session
    const storedDemo = sessionStorage.getItem('bharosa_demo_user');
    if (storedDemo) {
      try {
        const parsed = JSON.parse(storedDemo);
        setUser(parsed);
        setAccount({
          uid: parsed.uid,
          email: parsed.email,
          displayName: parsed.displayName,
          persona: parsed.persona,
          walletAddress: parsed.walletAddress,
          onChainRoles: parsed.persona === 'ISSUER' ? ['HOLDER', 'ISSUER'] : parsed.persona === 'VERIFIER' ? ['HOLDER', 'VERIFIER'] : ['HOLDER'],
          didRegistered: true,
        });
        setLoading(false);
        return;
      } catch {
        sessionStorage.removeItem('bharosa_demo_user');
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const acc = await refreshAccount();
          if (!acc) {
            // First time login fallback before wallet link
            setAccount({
              uid: firebaseUser.uid,
              email: firebaseUser.email || '',
              displayName: firebaseUser.displayName,
              persona: 'HOLDER',
              walletAddress: null,
              onChainRoles: ['HOLDER'],
              didRegistered: false,
            });
          }
        } catch {
          // Ignore
        }
      } else {
        setAccount(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [refreshAccount]);

  const signIn = async (email: string, pass: string) => {
    sessionStorage.removeItem('bharosa_demo_user');
    const cred = await signInWithEmailAndPassword(auth, email, pass);
    setUser(cred.user);
    await refreshAccount();
  };

  const signUp = async (email: string, pass: string, name: string) => {
    sessionStorage.removeItem('bharosa_demo_user');
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }
    await sendEmailVerification(cred.user);
    setUser(cred.user);
    await refreshAccount();
  };

  const signInWithGoogle = async () => {
    sessionStorage.removeItem('bharosa_demo_user');
    const cred = await signInWithPopup(auth, googleProvider);
    setUser(cred.user);
    await refreshAccount();
  };

  const signInWithDemo = async (role: 'student' | 'university' | 'employer') => {
    const demoConfigs = {
      student: {
        uid: 'demo-student-alice',
        email: 'alice.student@bharosa.demo',
        displayName: 'Alice Sharma (Candidate)',
        persona: 'HOLDER' as const,
        walletAddress: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        onChainRoles: ['HOLDER'],
      },
      university: {
        uid: 'demo-univ-iitd',
        email: 'dean@iitd.bharosa.demo',
        displayName: 'IIT Delhi Academic Dean',
        persona: 'ISSUER' as const,
        walletAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        onChainRoles: ['HOLDER', 'ISSUER', 'ADMIN'],
      },
      employer: {
        uid: 'demo-verifier-infosys',
        email: 'talent@infosys.bharosa.demo',
        displayName: 'Infosys Verification Dept',
        persona: 'VERIFIER' as const,
        walletAddress: '0x90f79bf6eb2c4f870365e785982e1f101e93b906',
        onChainRoles: ['HOLDER', 'VERIFIER'],
      },
    };

    const cfg = demoConfigs[role];
    const demoProfile: DemoUserProfile = {
      ...cfg,
      isDemo: true,
    };

    sessionStorage.setItem('bharosa_demo_user', JSON.stringify(demoProfile));
    setUser(demoProfile);
    setAccount({
      uid: cfg.uid,
      email: cfg.email,
      displayName: cfg.displayName,
      persona: cfg.persona,
      walletAddress: cfg.walletAddress,
      onChainRoles: cfg.onChainRoles,
      didRegistered: true,
    });
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const resendVerificationEmail = async () => {
    if (user && 'email' in user && !('isDemo' in user)) {
      await sendEmailVerification(user as User);
    }
  };

  const signOut = async () => {
    try {
      sessionStorage.removeItem('bharosa_demo_user');
      sessionStorage.removeItem('bharosa_aes_session_key');
      sessionStorage.removeItem('bharosa_ecies_key');
      
      // Zeroize any in-memory crypto cache
      if (typeof window !== 'undefined') {
        sessionStorage.clear();
      }

      await firebaseSignOut(auth).catch(() => {});
      disconnect();
      queryClient.clear();
      setUser(null);
      setAccount(null);
      window.location.href = '/';
    } catch (err) {
      console.error('[AuthProvider] Error signing out:', err);
      window.location.href = '/';
    }
  };

  const isDemoUser = useMemo(() => {
    return !!(user && 'isDemo' in user && user.isDemo);
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      account,
      loading,
      isDemoUser,
      signIn,
      signUp,
      signInWithGoogle,
      signInWithDemo,
      resetPassword,
      resendVerificationEmail,
      signOut,
      getIdToken,
      refreshAccount,
    }),
    [user, account, loading, isDemoUser, refreshAccount, getIdToken]
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0C2518] border border-[#C6F432]/40 flex items-center justify-center text-[#C6F432] shadow-sm animate-pulse">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-[#1A2E05]">
          <Loader2 className="w-4 h-4 animate-spin text-[#84CC16]" /> Initializing Bharosa Security Environment...
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
