// Import User model
const User = require("./model");

// Register new user
const registerUser = async (req, res) => {
  try {

    // Create new user in database using request body data
    const user = await User.create(req.body);
    console.log(user);

    // Respond with success message and user data
    res.status(201).json({
      message: "success",
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    // Respond with error message and error object
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// User login
const login = async (req, res) => {
  try {

    // Respond with success message and user data obtained from request object
    res
      .status(202)
      .json({
        message: "success",
        user: { username: req.user.username, email: req.user.email },
      });
  } catch (error) {
    // Respond with error message and error object
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// Export registerUser and login functions for use in other modules
module.exports = { registerUser, login };

