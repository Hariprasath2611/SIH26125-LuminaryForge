const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9877;
const imagePath = path.join(__dirname, '../frontend/public/images/brand-film-bg.jpg');
const videoDir = path.join(__dirname, '../frontend/public/videos');
const imageBase64 = fs.readFileSync(imagePath).toString('base64');

if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; background: #F7FBEF; overflow: hidden; }
  </style>
</head>
<body>
  <canvas id="c" width="1920" height="1080"></canvas>
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
      const duration = 6000; // 6 seconds seamless tracking shot

      // Overscan render dimensions to allow continuous smooth horizontal tracking
      const srcW = img.width;
      const srcH = img.height;
      const zoom = 1.15; // 15% overscan for tracking
      const targetW = canvas.width * zoom;
      const targetH = canvas.height * zoom;

      function render(time) {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1);

        // Constant speed left-to-right tracking motion across the lime path
        // Moving from left (+50px) to right (-140px)
        const panX = 40 - (180 * t);
        const floatY = Math.sin(t * Math.PI * 2) * 4;

        ctx.fillStyle = '#F7FBEF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.drawImage(img, panX, (canvas.height - targetH) / 2 + floatY, targetW, targetH);
        ctx.restore();

        // Subtle soft studio light pulse along the lime path
        const pulse = 0.08 * Math.sin(t * Math.PI * 2);
        ctx.fillStyle = \`rgba(132, 204, 22, \${Math.max(0, pulse)})\`;
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
        fs.writeFileSync(mp4Path, buffer);
        console.log('[Recorder] Brand film video successfully saved! Size:', buffer.length, 'bytes');
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
    '--window-size=1920,1080'
  ]);

  chrome.on('exit', (code) => {
    console.log('[Recorder] Chrome process exited with code:', code);
  });
});
