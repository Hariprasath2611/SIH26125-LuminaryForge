const { spawn, execSync } = require('child_process');
const path = require('path');
const http = require('http');

console.log('[Chain] Starting local Hardhat blockchain node on :8545...');

const blockchainDir = path.join(__dirname, '..', 'blockchain');

// Spawn hardhat node
const nodeProcess = spawn('npx', ['hardhat', 'node', '--hostname', '0.0.0.0'], {
  cwd: blockchainDir,
  shell: true,
  stdio: 'inherit',
});

// Function to poll until node responds to RPC
function waitForRpc(timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      const req = http.request(
        'http://127.0.0.1:8545',
        { method: 'POST', headers: { 'Content-Type': 'application/json' } },
        (res) => {
          if (res.statusCode === 200 || res.statusCode === 400) {
            resolve();
          } else {
            retry();
          }
        }
      );
      req.on('error', () => retry());
      req.write(JSON.stringify({ jsonrpc: '2.0', method: 'net_version', params: [], id: 1 }));
      req.end();
    };

    const retry = () => {
      if (Date.now() - start > timeoutMs) {
        reject(new Error('Timed out waiting for Hardhat node RPC at :8545'));
      } else {
        setTimeout(check, 1000);
      }
    };

    check();
  });
}

waitForRpc()
  .then(() => {
    console.log('[Chain] Node online! Deploying contracts and exporting ABIs...');
    execSync('npm run deploy', { cwd: blockchainDir, stdio: 'inherit' });

    console.log('[Chain] Seeding demo accounts, credentials, and encrypted assets...');
    execSync('npm run seed', { cwd: blockchainDir, stdio: 'inherit' });

    console.log('[Chain] Local blockchain is fully ready on http://127.0.0.1:8545!');
  })
  .catch((err) => {
    console.error('[Chain] Error during chain deployment/seeding:', err.message);
  });

process.on('SIGINT', () => {
  nodeProcess.kill();
  process.exit(0);
});
