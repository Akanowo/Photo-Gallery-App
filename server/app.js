// Declarations
const express = require("express");
const mongoose = require("mongoose");
const photoRouter = require("./routes/image.route");

// initialize app
const app = express();

// mongoDB configuration
mongoose.connect(
  "mongodb://127.0.0.1:27017/PhotoGalleryDB",
  { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Could not connect to database: ", err.message);
      return;
    }
    console.log("DB connected successfully");
  }
);

// App config
app.use(express.json()); // allow json formats
app.use(express.urlencoded({ extended: false })); // allow url-form-encoded formats
app.use("/api", photoRouter());

// routes configuration
app.get("/", (req, res) => {
  // Send response
  res.send("You have reached the home endpoint");
});

// Handle wildcard routes
app.get("**", (req, res) => {
  res.redirect("/");
});

// set server to run on port 8080
app.listen(8080, () => {
  console.log("App started on port 8080");
});
