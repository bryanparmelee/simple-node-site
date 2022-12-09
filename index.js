const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {alert(err);}
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    } else if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {alert(err);}
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    } else if (req.url === '/contact-me') {
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {alert(err);}
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    } else {
        fs.readFile('./404.html', (err, data) => {
            if (err) {alert(err);}
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        })
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });