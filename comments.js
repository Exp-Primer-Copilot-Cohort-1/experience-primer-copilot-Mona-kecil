// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for comments
// 4. Create a route for comments/new
// 5. Create a route for comments/:id
// 6. Create a route for comments/:id/edit
// 7. Create a route for comments/:id/delete
// 8. Create a route for comments/:id/update

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// 3. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page!');
});

// 4. Create a route for comments/new
app.get('/comments/new', (req, res) => {
  res.send('Welcome to the comments page!');
});

// 5. Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('Welcome to the comments page!');
});

// 6. Create a route for comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.send('Welcome to the comments page!');
});

// 7. Create a route for comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('Welcome to the comments page!');
});

// 8. Create a route for comments/:id/update
app.get('/comments/:id/update', (req, res) => {
  res.send('Welcome to the comments page!');
});

// 9. Start the web server
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});