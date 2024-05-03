const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.) from the "public" directory
app.use(express.static('public'));

//sendfile
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Route to handle login form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log('Username:', username);
    console.log('Password:', password);
    res.send('Login successful');
});


app.listen(3000, () => {
    console.log("Server is running ");
});