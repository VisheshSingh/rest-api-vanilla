const http = require('http');
const products = require('./data/products.json');

const app = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
