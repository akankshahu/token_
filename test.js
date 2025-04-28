// filepath: /home/akanksha/Desktop/kalvium/saving_token_assignment2/test.js
const encrypt = require("./script.js"); // Import the function from script.js

// Define a sample payload and secret key
const samplePayload = { userId: "abc12345", username: "testuser" };
const sampleSecret = "mySecretKeyForTesting"; // Use a secure key in real apps

// Call the encrypt function
const generatedToken = encrypt(samplePayload, sampleSecret);

// Print the generated token
console.log("Generated Token:", generatedToken);

// You can add verification logic here as well if needed
const jwt = require("jsonwebtoken");
try {
  const decoded = jwt.verify(generatedToken, sampleSecret);
  console.log("Token verified successfully!");
  console.log("Decoded Payload:", decoded);
} catch (err) {
  console.error("Token verification failed:", err.message);
}
