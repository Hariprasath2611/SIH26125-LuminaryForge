import { prisma } from '../src/lib/prisma';
import { DEMO_ACCOUNTS } from '../src/controllers/demo.controller';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, getApps } from 'firebase-admin/app';
import { env } from '../src/config/env';

async function seedDemoAccounts() {
  console.log(`========================================================================`);
  console.log(`[Seed-Demo-Accounts] Seeding 5 Demo Accounts into Neon Database...`);
  console.log(`========================================================================\n`);

  if (!getApps().length) {
    try {
      initializeApp({ projectId: env.FIREBASE_PROJECT_ID });
    } catch {
      // Ignored
    }
  }

  const results: any[] = [];

  for (const acc of DEMO_ACCOUNTS) {
    // 1. Try to ensure user exists in Firebase
    try {
      const auth = getAuth();
      await auth.createUser({
        uid: acc.uid,
        email: acc.email,
        displayName: acc.displayName,
        emailVerified: true,
      }).catch(async (err) => {
        if (err.code === 'auth/uid-already-exists' || err.code === 'auth/email-already-exists') {
          await auth.updateUser(acc.uid, {
            displayName: acc.displayName,
            emailVerified: true,
          }).catch(() => {});
        }
      });
    } catch (fbErr: any) {
      // Offline/demo emulator fallback
    }

    // 2. Upsert in Postgres DB
    const dbAccount = await (prisma as any).account.upsert({
      where: { uid: acc.uid },
      update: {
        email: acc.email,
        displayName: acc.displayName,
        walletAddress: acc.walletAddress.toLowerCase(),
        persona: acc.persona,
        isDemo: true,
      },
      create: {
        uid: acc.uid,
        email: acc.email,
        displayName: acc.displayName,
        walletAddress: acc.walletAddress.toLowerCase(),
        persona: acc.persona,
        isDemo: true,
      },
    });

    results.push({
      Name: acc.displayName,
      Role: acc.role,
      Persona: acc.persona,
      UID: acc.uid,
      'Wallet Address': acc.walletAddress,
    });
  }

  console.table(results);
  console.log(`\n[Seed-Demo-Accounts] Successfully seeded 5 demo accounts (isDemo=true)!`);
}

seedDemoAccounts()
  .catch((err) => {
    console.error('[Seed-Demo-Accounts] Error:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
