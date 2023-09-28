const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let counter = 0;

// Root endpoint to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Increment the counter by 1
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Decrement the counter by 1
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

