const assert = require('assert');
const http = require('http');
const app = require('../server');

const server = app.listen(0, () => {
  const port = server.address().port;
  const options = { hostname: '127.0.0.1', port, path: '/', method: 'GET' };
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      try {
        const obj = JSON.parse(data);
        assert.strictEqual(obj.message, 'Hello from CI/CD demo');
        console.log('Test passed');
        server.close();
        process.exit(0);
      } catch (err) {
        console.error('Test failed:', err.message);
        server.close();
        process.exit(1);
      }
    });
  });
  req.on('error', (err) => {
    console.error('Request error:', err.message);
    server.close();
    process.exit(1);
  });
  req.end();
});
