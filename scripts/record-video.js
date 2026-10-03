const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9876;
const imagePath = path.join(__dirname, '../frontend/public/images/dino-chase-realistic.jpg');
const videoDir = path.join(__dirname, '../frontend/public/videos');
const imageBase64 = fs.readFileSync(imagePath).toString('base64');

if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

const html = `<!DOCTYPE html>
<html>
<head>
  <style>body { margin: 0; background: black; overflow: hidden; }</style>
</head>
<body>
  <canvas id="c" width="1280" height="720"></canvas>
  <script>
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'data:image/jpeg;base64,${imageBase64}';

    img.onload = () => {
      const stream = canvas.captureStream(30);
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      const chunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64Data = reader.result.split(',')[1];
          await fetch('/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: base64Data })
          });
          window.close();
        };
        reader.readAsDataURL(blob);
      };

      recorder.start();

      let startTime = performance.now();
      const duration = 5000; // 5 seconds loop

      function render(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Cinematic camera zoom & tracking pan
        const scale = 1 + 0.12 * Math.sin(progress * Math.PI);
        const shakeX = (Math.random() - 0.5) * 5;
        const shakeY = (Math.random() - 0.5) * 4;

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(canvas.width / 2 + shakeX, canvas.height / 2 + shakeY);
        ctx.scale(scale, scale);
        ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        ctx.restore();

        // Realistic rain streaks
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 40; i++) {
          const rx = Math.random() * canvas.width;
          const ry = Math.random() * canvas.height;
          ctx.moveTo(rx, ry);
          ctx.lineTo(rx - 8, ry + 22);
        }
        ctx.stroke();

        // Headlight glow & asphalt reflection shimmer
        const glowAlpha = 0.15 + 0.08 * Math.sin(elapsed * 0.02);
        const grad = ctx.createRadialGradient(canvas.width * 0.8, canvas.height * 0.75, 20, canvas.width * 0.8, canvas.height * 0.75, 400);
        grad.addColorStop(0, \`rgba(239, 68, 68, \${glowAlpha})\`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (elapsed < duration) {
          requestAnimationFrame(render);
        } else {
          recorder.stop();
        }
      }

      requestAnimationFrame(render);
    };
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { data } = JSON.parse(body);
        const buffer = Buffer.from(data, 'base64');
        const webmPath = path.join(videoDir, 'dino-chase.webm');
        const mp4Path = path.join(videoDir, 'dino-chase.mp4');
        fs.writeFileSync(webmPath, buffer);
        fs.writeFileSync(mp4Path, buffer); // HTML5 <video> can read webm stream
        console.log('[Recorder] Video successfully saved to:', webmPath, 'Size:', buffer.length, 'bytes');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
        setTimeout(() => {
          server.close();
          process.exit(0);
        }, 500);
      } catch (err) {
        console.error('[Recorder] Error saving video:', err);
        res.writeHead(500);
        res.end();
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`[Recorder] Recording server running on http://localhost:${PORT}`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    `http://localhost:${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--use-fake-ui-for-media-stream',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,720'
  ]);

  chrome.on('exit', (code) => {
    console.log('[Recorder] Chrome process exited with code:', code);
  });
});
