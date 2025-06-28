const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Store submissions in memory
const admissions = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.redirect('/admission');
});

app.get('/admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/admission', (req, res) => {
  const { fullName, email, phone, course } = req.body;
  
  // Validate form data
  if (!fullName || !email || !phone || !course) {
    return res.status(400).sendFile(path.join(__dirname, 'public', 'error.html'));
  }
  
  // Store the submission
  const submission = {
    id: Date.now(),
    fullName,
    email,
    phone,
    course,
    submittedAt: new Date()
  };
  
  admissions.push(submission);
  
  // Redirect to confirmation page with query parameters
  res.redirect(`/confirmation?name=${encodeURIComponent(fullName)}&course=${encodeURIComponent(course)}`);
});

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});