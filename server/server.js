const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match another route,
// send back the React app's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});