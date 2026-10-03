import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithCustomToken,
  signOut as firebaseSignOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { useDisconnect, useConnect } from 'wagmi';
import { useQueryClient } from '@tanstack/react-query';
import { apiClient, resolveApiUrl } from '../lib/api/client';
import { DEMO_USERS, DemoAccount } from '../lib/demoAccounts';
import { createDemoConnector } from '../lib/demoWallet';

export interface UserAccount {
  uid: string;
  email: string;
  displayName?: string | null;
  persona: 'HOLDER' | 'ISSUER' | 'VERIFIER' | 'ADMIN';
  walletAddress?: string | null;
  onChainRoles: string[];
  didRegistered: boolean;
  isDemo?: boolean;
}

export interface DemoUserProfile {
  uid: string;
  email: string;
  displayName: string;
  persona: 'HOLDER' | 'ISSUER' | 'VERIFIER' | 'ADMIN';
  walletAddress: string;
  role: string;
  isDemo: true;
}

export interface AuthContextType {
  user: User | DemoUserProfile | null;
  account: UserAccount | null;
  loading: boolean;
  isDemoUser: boolean;
  activeDemoAccount: DemoAccount | null;
  signIn: (email: string, pass: string) => Promise<void>;
  signUp: (email: string, pass: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithDemo: (demoUserId: string) => Promise<void>;
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
  const [activeDemoAccount, setActiveDemoAccount] = useState<DemoAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { disconnect } = useDisconnect();
  const { connectAsync } = useConnect();
  const queryClient = useQueryClient();

  const getIdToken = useCallback(async (): Promise<string | null> => {
    if (!user) return null;
    if ('isDemo' in user && user.isDemo) {
      return `demo-jwt-:${user.uid}:${user.email}:${user.displayName}`;
    }
    try {
      return await (user as User).getIdToken();
    } catch {
      return null;
    }
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
        isDemo: !!data.isDemo,
      };
      setAccount(userAcc);
      return userAcc;
    } catch (err) {
      console.warn('[AuthProvider] Failed to refresh account profile:', err);
      return null;
    }
  }, [getIdToken]);

  // Handle active demo connection
  const activateDemoSession = useCallback(async (demoAcc: DemoAccount) => {
    setActiveDemoAccount(demoAcc);
    sessionStorage.setItem('bharosa_active_demo', demoAcc.id);

    // Connect silent Wagmi demo connector
    try {
      disconnect();
      await connectAsync({ connector: createDemoConnector(demoAcc.privateKey) });
    } catch (err) {
      console.warn('[AuthProvider] Demo connector connection notice:', err);
    }

    const demoProfile: DemoUserProfile = {
      uid: demoAcc.uid,
      email: demoAcc.email,
      displayName: demoAcc.name,
      persona: demoAcc.persona,
      role: demoAcc.role,
      walletAddress: demoAcc.walletAddress,
      isDemo: true,
    };

    setUser(demoProfile);
    setAccount({
      uid: demoAcc.uid,
      email: demoAcc.email,
      displayName: demoAcc.name,
      persona: demoAcc.persona,
      walletAddress: demoAcc.walletAddress,
      onChainRoles: demoAcc.persona === 'ADMIN' ? ['ADMIN'] : demoAcc.persona === 'ISSUER' ? ['ISSUER'] : ['HOLDER'],
      didRegistered: true,
      isDemo: true,
    });
  }, [connectAsync, disconnect]);

  // Restore session on initial load
  useEffect(() => {
    const savedDemoId = sessionStorage.getItem('bharosa_active_demo');
    if (savedDemoId) {
      const found = DEMO_USERS.find((d) => d.id === savedDemoId);
      if (found) {
        activateDemoSession(found).finally(() => setLoading(false));
        return;
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      // If a demo user session is active, do not override with null firebase auth
      const activeDemo = sessionStorage.getItem('bharosa_active_demo');
      if (activeDemo) return;

      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const acc = await refreshAccount();
          if (!acc) {
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
  }, [activateDemoSession, refreshAccount]);

  const signIn = async (email: string, pass: string) => {
    sessionStorage.removeItem('bharosa_active_demo');
    setActiveDemoAccount(null);
    const cred = await signInWithEmailAndPassword(auth, email, pass);
    setUser(cred.user);
    await refreshAccount();
  };

  const signUp = async (email: string, pass: string, name: string) => {
    sessionStorage.removeItem('bharosa_active_demo');
    setActiveDemoAccount(null);
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }
    await sendEmailVerification(cred.user);
    setUser(cred.user);
    await refreshAccount();
  };

  const signInWithGoogle = async () => {
    sessionStorage.removeItem('bharosa_active_demo');
    setActiveDemoAccount(null);
    const cred = await signInWithPopup(auth, googleProvider);
    setUser(cred.user);
    await refreshAccount();
  };

  const signInWithDemo = async (demoUserId: string) => {
    const found = DEMO_USERS.find(
      (u) => u.id.toLowerCase() === demoUserId.toLowerCase() || u.uid.toLowerCase() === demoUserId.toLowerCase()
    );
    if (!found) {
      throw new Error(`Demo user not found: ${demoUserId}`);
    }

    // Call backend POST /v1/demo/login to retrieve custom token and ensure DB account sync
    try {
      const res = await fetch(resolveApiUrl('/demo/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ demoUserId: found.id }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.customToken && !json.customToken.startsWith('demo-custom-jwt')) {
          try {
            await signInWithCustomToken(auth, json.customToken);
          } catch {
            // Emulator or mock fallback
          }
        }
      }
    } catch {
      // Backend offline fallback in pure UI evaluation
    }

    // Clear React Query cache & in-memory keys
    queryClient.clear();

    await activateDemoSession(found);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const resendVerificationEmail = async () => {
    if (user && 'sendEmailVerification' in user) {
      await sendEmailVerification(user as User);
    }
  };

  const signOut = async () => {
    sessionStorage.removeItem('bharosa_active_demo');
    setActiveDemoAccount(null);
    try {
      await firebaseSignOut(auth);
    } catch {}
    try {
      disconnect();
    } catch {}
    queryClient.clear();
    setUser(null);
    setAccount(null);
  };

  const isDemoUser = !!activeDemoAccount || (!!user && 'isDemo' in user && user.isDemo === true);

  return (
    <AuthContext.Provider
      value={{
        user,
        account,
        loading,
        isDemoUser,
        activeDemoAccount,
        signIn,
        signUp,
        signInWithGoogle,
        signInWithDemo,
        resetPassword,
        resendVerificationEmail,
        signOut,
        getIdToken,
        refreshAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
