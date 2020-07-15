const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();


const PORT = process.env.PORT || 3000;
const { pid } = process;     

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/build-a-base", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
// app.use(require("./controllers/api.js"));

app.listen(PORT, () => {
  console.log(`PID: ${pid}\n`);
  console.log(`App running on port ${PORT}!`);
});
