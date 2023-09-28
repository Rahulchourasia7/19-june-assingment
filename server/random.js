const express = require('express');
const app = express();

// Generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Route to generate and send a random number
app.get('/random', (req, res) => {
  const random = getRandomNumber();
  res.send({ random });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
