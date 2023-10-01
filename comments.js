// Create a web server
// Path: server.js
const http = require('http');

const server = http.createServer((req, res) => {
    // Handle incoming requests here.
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Create a web server
// Path: server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, world!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Create a web server
// Path: server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello, world!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Create a web server
// Path: server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text.
    res.end('Hello, world!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Create a web server
// Path: server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json'); // Set the content type to JSON.
    res.end('{"message": "Hello, world!"}');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Create a web server
// Path: server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML.
    res.end('<h1>Hello, world!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Create a web server
// Path: server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {