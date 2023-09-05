const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config({ path: './server/.env' });;
const db = require('./config/database');

console.log('DB_HOST:', process.env.DB_HOST);

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match another route,
// send back the React app's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.get('/test', (req, res) => {
    console.log('Hello, World!');
});
  
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});