const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9879;
const imagePath = path.join(__dirname, '../frontend/public/images/hero-brand-film-3d.jpg');
const videoDir = path.join(__dirname, '../frontend/public/videos');
const imageBase64 = fs.readFileSync(imagePath).toString('base64');

if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

// 16:9 1080p canvas with smooth left-to-right constant speed tracking shot
const html = `<!DOCTYPE html>
<html>
<head>
  <style>body { margin: 0; background: #F7FBEF; overflow: hidden; }</style>
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

      function render(time) {
        const elapsed = time - startTime;
        // Constant speed left-to-right tracking motion
        const progress = (elapsed / duration) % 1;

        ctx.fillStyle = '#F7FBEF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Constant speed pan across the 16:9 panoramic scene
        // Camera moves smoothly along the lime path at eye level
        const zoom = 1.08;
        const panRange = 90;
        const offsetX = (progress - 0.5) * panRange;

        ctx.save();
        ctx.translate(-offsetX, 0);
        ctx.scale(zoom, zoom);
        // Center draw
        const drawW = canvas.width;
        const drawH = canvas.height;
        ctx.drawImage(img, (canvas.width - drawW * zoom) / 2, (canvas.height - drawH * zoom) / 2, drawW, drawH);
        ctx.restore();

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
        const webmPath = path.join(videoDir, 'hero-brand-film.webm');
        const mp4Path = path.join(videoDir, 'hero-brand-film.mp4');
        fs.writeFileSync(webmPath, buffer);
        fs.writeFileSync(mp4Path, buffer);
        console.log('[Recorder] Brand film video successfully saved to:', webmPath, 'Size:', buffer.length, 'bytes');
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
  console.log(`[Recorder] Running brand film recorder on http://localhost:${PORT}`);
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
