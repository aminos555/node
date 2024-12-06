console.log("Hello World")

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!!</h1>\n');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});


const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File "welcome.txt" created successfully!');
});


