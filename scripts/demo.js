const { spawn } = require('child_process');
const path = require('path');

console.log('================================================================');
console.log('  BHAROSA (भरोसा) · Smart India Hackathon 2026 · PS SIH26125');
console.log('  Starting full demo stack: Blockchain + Backend API + Frontend');
console.log('================================================================\n');

const rootDir = path.join(__dirname, '..');

// 1. Start chain
const chain = spawn('node', ['scripts/chain.js'], { cwd: rootDir, shell: true, stdio: 'inherit' });

// 2. Start backend after 6 seconds
setTimeout(() => {
  console.log('[Demo] Launching Backend API on :3001...');
  spawn('npm', ['run', 'dev'], { cwd: path.join(rootDir, 'backend'), shell: true, stdio: 'inherit' });
}, 6000);

// 3. Start frontend after 8 seconds
setTimeout(() => {
  console.log('[Demo] Launching Next.js Frontend on :3000...');
  spawn('npm', ['run', 'dev'], { cwd: path.join(rootDir, 'frontend'), shell: true, stdio: 'inherit' });
}, 8000);

process.on('SIGINT', () => {
  chain.kill();
  process.exit(0);
});
