const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.amewz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log("dbURI", dbURI);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const PORT = process.env.SERVER_PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
});
