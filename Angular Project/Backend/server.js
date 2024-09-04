// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/database');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

connectDatabase();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/pages'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
