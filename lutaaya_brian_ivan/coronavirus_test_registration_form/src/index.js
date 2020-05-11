// import all the dependencies
const express = require('express');

// Initialize the application
const app = express();

// Declare the constants
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`The server is listening on PORT ${PORT}`);
});
