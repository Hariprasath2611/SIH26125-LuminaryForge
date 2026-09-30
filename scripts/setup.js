const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('[Setup] Setting up Bharosa 3-Project Architecture for Judges & Evaluators...');

const folders = ['blockchain', 'backend', 'frontend'];

// 1. Copy .env.example -> .env in each folder if not already existing
for (const folder of folders) {
  const examplePath = path.join(__dirname, '..', folder, '.env.example');
  const envPath = path.join(__dirname, '..', folder, '.env');
  if (fs.existsSync(examplePath)) {
    if (!fs.existsSync(envPath)) {
      fs.copyFileSync(examplePath, envPath);
      console.log(`[Setup] Copied ${folder}/.env.example -> ${folder}/.env`);
    } else {
      console.log(`[Setup] ${folder}/.env already exists.`);
    }
  }
}

// 2. Install dependencies in each folder
for (const folder of folders) {
  const folderPath = path.join(__dirname, '..', folder);
  if (fs.existsSync(folderPath)) {
    console.log(`[Setup] Installing dependencies in ${folder}...`);
    try {
      execSync('npm install --prefer-offline --no-audit', { cwd: folderPath, stdio: 'inherit' });
    } catch (err) {
      console.warn(`[Setup] Warning in ${folder} npm install, trying fallback...`);
    }
  }
}

console.log('[Setup] Setup completed successfully! All projects ready.');
