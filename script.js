const jwt = require("jsonwebtoken"); // Import the library

const encrypt = (payload, secret) => {
  // Define the options, including the expiration time
  const options = {
    expiresIn: "1h", // Token expires in 1 hour
  };
  // Sign the token with the payload, secret, and options
  const token = jwt.sign(payload, secret, options);
  return token; // Return the generated token
};

module.exports = encrypt;
