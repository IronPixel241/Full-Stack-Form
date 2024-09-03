require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Simulate saving the data to a database
    console.log('Form Data:', { name, email, message });

    // Respond with success
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start Server
app.listen(port, () => {
    // console.log(`${port}`);
    console.log(`Server running on http://localhost:${port}`);
});
