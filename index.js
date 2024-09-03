const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Node.js API",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.get('/home', (req, res) => {
  res.json({
    message: "Home API executed successfully.",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});