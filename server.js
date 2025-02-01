const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let responseMessage;

    if (req.url === '/') {
        responseMessage = '<h1>Hello World</h1>';
    } else if (req.url === '/pizza') {
        responseMessage = '<h1>This is your pizza</h1>';
    } else if (req.url === '/home') {
        responseMessage = '<h1>Welcome home</h1>';
    } else if (req.url === '/about') {
        responseMessage = '<h1>Welcome to About Us</h1>';
    } else if (req.url === '/node') {
        responseMessage = '<h1>Welcome to my Node Js project</h1>';
    } else {
        res.writeHead(404); 
        responseMessage = '<h1>Page Not Found</h1>';
    }

    res.end(responseMessage);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
