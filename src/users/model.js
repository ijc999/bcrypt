const { DataTypes } = require("sequelize");

// Import the database connection instance
const connection = require("../db/connection");

// Define the User model
const User = connection.define(
  "User",
  {
    // Define the username field with a string data type that is required
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Define the email field with a string data type that is required
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Define the password field with a string data type that is required
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  // Define an index with the fields 'username' and 'email' that must be unique
  { indexes: [{ unique: true, fields: ["username", "email"] }] }
);

// Export the User model
module.exports = User;
