const http = require('http');

const hostname = 'localhost';
const port = 555;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n nghiadz1');
});

// starts a simple http server locally on port 3000
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// run with `node server.mjs`
