const http = require('http'); // ✅ use built-in http module

const server = http.createServer((req, res) => {
  res.end("Raj is the next billionaire 🚀");
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
