const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

// About route
app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

// Contact route
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
