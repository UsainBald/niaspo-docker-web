const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    response.end('Hello from Node.js on Render!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Error:', err);
    }
    console.log(`Server is running on http://localhost:${port}`);
});
