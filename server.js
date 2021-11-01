const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  res.json({
    message: 'This is a test!'
  });
});

app.get('/env', (req, res) => {
  res.json({
    env: process.env.TEST
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});