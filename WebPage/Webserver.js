// server.js
const http = require('http');
const PORT = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! This is a sample webpage created using Node.js on Docker!\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// this is test comment
