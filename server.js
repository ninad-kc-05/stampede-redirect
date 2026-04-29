const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

// Redirect EVERYTHING to Firebase
app.get("*", (req, res) => {
  res.redirect("https://your-firebase-app.web.app");
});

app.listen(PORT, () => {
  console.log("Redirect server running on port", PORT);
});