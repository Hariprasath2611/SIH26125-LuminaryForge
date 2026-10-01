# Complete Step-by-Step Deployment Guide for Bharosa

This guide is designed for beginners. By following these steps, you will get a live public URL for your web app that anyone in the world (including hackathon judges, teachers, and users) can open and use.

---

## 🏗️ Architecture Overview

Your application consists of 4 parts:

| Component | Technology | Where It Deploys | Cost |
|---|---|---|---|
| **1. Database** | PostgreSQL | **Neon Cloud** | **Free** (Already set up & migrated!) |
| **2. Backend API** | Node.js + Express | **Render.com** | **Free** (Web Service) |
| **3. Frontend UI** | Next.js 14 (React) | **Vercel** | **Free** (Global Edge CDN) |
| **4. Blockchain** | Solidity Smart Contracts | **Polygon Amoy Testnet** | **Free** (Test MATIC from faucet) |

---

## Step 1: Save & Push Your Code to GitHub

Both Vercel and Render connect directly to your GitHub repository to build and deploy your app automatically whenever you update your code.

Open a PowerShell terminal in the root folder (`d:\College work\SIH26125-LuminaryForge`) and run:

```powershell
git add .
git commit -m "feat: complete deployment configurations for Vercel, Render, and Neon"
git push origin main
```

> **Note:** If prompted for GitHub credentials, sign in or use a GitHub Personal Access Token.

---

## Step 2: Deploy Backend to Render.com

Render will host your backend API server (`Express` + `Prisma` + `SIWE Auth` + `Gasless Relayer`).

### 2.1 Create Your Account
1. Open [https://render.com](https://render.com) and click **Get Started for Free**.
2. Sign in with your **GitHub** account.

### 2.2 Create a Web Service
1. On your Render dashboard, click the blue **New +** button in the top right.
2. Select **Web Service**.
3. Choose **Build and deploy from a Git repository** and click **Next**.
4. In the list of repositories, find `SIH26125-LuminaryForge` and click **Connect**.

### 2.3 Configure Settings
Fill in the form with these exact settings:

* **Name:** `bharosa-api` (or any name you prefer)
* **Region:** `Ohio (US East)` (closest to your Neon database)
* **Branch:** `main`
* **Root Directory:** `backend`  *(⚠️ Important! Don't leave this blank)*
* **Runtime:** `Node`
* **Build Command:** 
  ```bash
  npm install && npm run prisma:generate && npm run build
  ```
* **Start Command:**
  ```bash
  npm run start
  ```
* **Instance Type:** `Free`

### 2.4 Add Environment Variables
Scroll down to the **Environment Variables** section and click **Add Environment Variable** for each of these:

| Key | Value | Notes |
|---|---|---|
| `NODE_ENV` | `production` | Production mode |
| `PORT` | `10000` | Render default port |
| `DATABASE_URL` | `postgresql://neondb_owner:npg_ESwQ2HPYn7NO@ep-rough-feather-b49h9zgb.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require` | Your live Neon Database |
| `DEMO_MODE` | `true` | Allows gasless simulation & demo credentials |
| `JWT_SECRET` | `bharosa_super_secure_jwt_secret_key_minimum_32_characters_siwe_auth` | Auth secret |
| `REFRESH_TOKEN_SECRET` | `bharosa_super_secure_refresh_secret_key_rotation_token_32_chars` | Refresh secret |
| `CORS_ORIGINS` | `*` | Allows browser requests (we will lock this down to your Vercel URL in Step 4) |

### 2.5 Deploy!
1. Click **Create Web Service** at the bottom of the page.
2. Render will start building and running your backend.
3. Once the build finishes (usually ~2 minutes), you will see **"Your service is live"**.
4. At the top of the page under the name `bharosa-api`, copy your live backend URL:
   `https://bharosa-api-xxxx.onrender.com`

---

## Step 3: Deploy Frontend to Vercel

Vercel is the creator of Next.js and provides the fastest, simplest deployment for Next.js apps.

### 3.1 Create Your Account
1. Open [https://vercel.com](https://vercel.com) and click **Sign Up**.
2. Choose **Continue with GitHub**.

### 3.2 Import Project
1. On your Vercel dashboard, click **Add New...** &rarr; **Project**.
2. Find `SIH26125-LuminaryForge` in the list and click **Import**.

### 3.3 Configure Project Settings
In the configuration screen:

1. **Framework Preset:** Leave as `Next.js`.
2. **Root Directory:** Click **Edit** next to Root Directory, select the `frontend` folder, and click **Continue**.
3. **Build & Output Settings:** Leave default (`npm run build`).

### 3.4 Add Environment Variables
Expand the **Environment Variables** section and add the following:

| Key | Value | Notes |
|---|---|---|
| `VITE_API_URL` | `https://bharosa-api-xxxx.onrender.com/v1` | ⚠️ **Use your Render URL from Step 2 with `/v1` at the end!** |
| `VITE_APP_NAME` | `Bharosa` | Platform name |
| `VITE_DEMO_MODE` | `true` | Enables interactive simulated testing |
| `VITE_IPFS_GATEWAY` | `https://ipfs.io/ipfs/` | IPFS gateway for encrypted asset viewing |
| `VITE_CHAIN_ID` | `80002` | Polygon Amoy testnet ID |
| `VITE_RPC_URL` | `https://rpc-amoy.polygon.technology/` | Polygon Amoy public RPC |

### 3.5 Deploy!
1. Click **Deploy**.
2. Vercel will install dependencies, build the Vite SPA bundle, and deploy your site to their global CDN.
3. In about 45 seconds, you will see confetti and a screenshot of your live app!
4. Click the link to open your live application (e.g., `https://bharosa-xyz.vercel.app`).

---

## Step 4: Lock Down CORS (Connect Frontend to Backend)

Now that you have your live Vercel URL:

1. Go back to your [Render.com Dashboard](https://dashboard.render.com).
2. Click on your `bharosa-api` service.
3. In the left sidebar, click **Environment**.
4. Find the `CORS_ORIGINS` variable and edit its value:
   - Change `*` to `https://your-app-name.vercel.app` (your actual Vercel URL).
5. Click **Save Changes**. Render will automatically redeploy with the updated setting.

---

## Step 5: (Optional) Smart Contracts on Polygon Amoy Testnet

If you want your smart contracts permanently live on a public blockchain:

1. **Get Test Tokens:**
   - Go to [Polygon Faucet](https://faucet.polygon.technology/).
   - Select **Polygon Amoy**.
   - Paste your MetaMask wallet address to receive free test MATIC/POL.

2. **Add Private Key to Blockchain Config:**
   - Open `blockchain/.env`.
   - Set `DEPLOYER_PRIVATE_KEY="0x<your_metamask_private_key>"`.

3. **Deploy:**
   - Run from terminal in the root directory:
     ```powershell
     cd blockchain
     npx hardhat run scripts/deploy.ts --network amoy
     ```
   - This deploys all 5 smart contracts (`IdentityAnchor`, `CredentialRegistry`, `OwnershipRegistry`, `ConsentManager`, `GaslessRelayer`) to Polygon Amoy and automatically writes the deployed addresses to `frontend/src/contracts/deployedAddresses.json`.
   - Push to GitHub (`git add . && git commit -m "deploy: amoy contracts" && git push`), and Vercel will auto-update!

---

## Quick Reference Summary

| Task | Command / Action |
|---|---|
| **Run locally** | Run `npm run chain`, `npm run backend`, and `npm run frontend` from root |
| **Check Backend Health** | Open `https://your-render-url.onrender.com/v1/health` in browser |
| **Check Relayer Treasury** | Open `https://your-render-url.onrender.com/v1/relayer/treasury` in browser |
| **Access Web App** | Open `https://your-vercel-url.vercel.app` in browser |
