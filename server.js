const express = require("express");
const app = express();
const PORT = 3000; // Port for the server

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Backend Server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
