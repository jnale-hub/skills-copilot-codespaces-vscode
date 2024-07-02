// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for /comments
// 4. Send a response from the server
// 5. Listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});