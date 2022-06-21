const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home page</h1>');
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Danilo Teixeira',
                email: 'danilo@email.com'
            },
            {
                name: 'Mariana Teixeira',
                email: 'mariana@email.com'
            }
        ];

        res.writeHead(200, { 'Conten-Type': 'text/html' });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Listening at port: ${port}`));