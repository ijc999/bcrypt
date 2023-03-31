// Import the Sequelize library
const { Sequelize } = require("sequelize");

// Create a new connection to a MySQL database using the URI stored in the environment variable MYSQL_URI
const connection = new Sequelize(process.env.MYSQL_URI, {
  retry: { match: [/Deadlock/i], max: 3 }, // If a "Deadlock" error is encountered, retry the operation up to 3 times
});

// Authenticate the connection to ensure that it works
connection.authenticate();

// Export the connection object for use in other parts of the application
module.exports = connection;
