const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/data' && req.method === 'GET') {
        const data = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});