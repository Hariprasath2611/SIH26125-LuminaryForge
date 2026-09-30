const { execSync } = require('child_process');
const path = require('path');

const rootDir = path.join(__dirname, '..');

console.log('================================================================');
console.log('  Running Platform Test Suites across All 3 Independent Projects');
console.log('================================================================\n');

try {
  console.log('\n--- 1. Testing Blockchain Smart Contracts (Hardhat) ---');
  execSync('npm test', { cwd: path.join(rootDir, 'blockchain'), stdio: 'inherit' });

  console.log('\n--- 2. Testing Backend API & Relayer (Node/Vitest) ---');
  execSync('npm test', { cwd: path.join(rootDir, 'backend'), stdio: 'inherit' });

  console.log('\n--- 3. Testing Frontend Cryptography, ZK & Hero Flow E2E ---');
  execSync('npm test', { cwd: path.join(rootDir, 'frontend'), stdio: 'inherit' });

  console.log('\n================================================================');
  console.log('  All Test Suites Across All 3 Projects Passed Successfully! ✓');
  console.log('================================================================');
} catch (err) {
  console.error('\nTest execution failed.');
  process.exit(1);
}
