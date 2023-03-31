// Import required modules
const bcrypt = require("bcrypt");
const User = require("../users/model");

// Get salt rounds from environment variables
const saltRounds = process.env.SALT_ROUNDS;

// Middleware function to hash a password
const hashPass = async (req, res, next) => {
  try {
    // If no password is provided, throw an error
    if (!req.body.password) {
      const error = new Error("No password");
      res.status(500).json({ errorMessage: error.message, error: error });
    }

    // Hash the password using bcrypt
    req.body.password = await bcrypt.hash(
      req.body.password,
      parseInt(saltRounds)
    );

    // Call the next middleware function
    next();
  } catch (error) {
    // Catch any errors and return an error response
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// Middleware function to compare a password with a hashed password
const comparePass = async (req, res, next) => {
  try {
    // If no password is provided, throw an error
    if (!req.body.password) {
      const error = new Error("No password given");
      res.status(500).json({ errorMessage: error.message, error: error });
    }

    // If no username is provided, throw an error
    if (!req.body.username) {
      const error = new Error("No username");
      res.status(500).json({ errorMessage: error.message, error: error });
    }

    // Find the user with the provided username
    req.user = await User.findOne({ where: { username: req.body.username } });

    // Compare the provided password with the hashed password for the user
    const match = await bcrypt.compare(req.body.password, req.user.password);

    // If the passwords do not match, throw an error
    if (!match) {
      const error = new Error("Passwords do not match");
      res.status(500).json({ errorMessage: error.message, error: error });
    }

    // Call the next middleware function
    next();
  } catch (error) {
    // Catch any errors and return an error response
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// Export the middleware functions
module.exports = {
  hashPass,
  comparePass,
};
