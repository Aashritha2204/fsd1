const http = require('http');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');
  
  
  switch (req.url) {
    case '/home':
      res.statusCode = 200;
      res.end('Welcome to Home');
      break;
    
    case '/about':
      res.statusCode = 200;
      res.end('About Us');
      break;
    
    case '/contact':
      res.statusCode = 200;
      res.end('Contact Us');
      break;
    
    default:
      res.statusCode = 404;
      res.end('Page Not Found');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
