const mysql = require('mysql2'); // Using mysql2 for better performance and compatibility.

// Define the database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

// Create the connection
console.log('DB Config:', dbConfig);;
const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Successfully connected to the database.');
});

module.exports = connection;