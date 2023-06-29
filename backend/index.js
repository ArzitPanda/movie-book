const express = require("express");
const AuthRoute = require("./routes/authRoute.js");
const mongoose = require("mongoose");
const {bookShow} = require("./models/BookMovies.js")
const  moviesRouter  = require("./routes/MovieRoute.js")
const cors =require('cors')

const User = require("./models/user.js");
const Movies = require("./models/movies.js");
const Theater = require("./models/MovieHall.js")

const connectionURL =
  "mongodb+srv://arzP:Panda2001@cluster0.4hcwv.mongodb.net/movie?retryWrites=true&w=majority";

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });









const app = express();


app.use(express.json())
app.use(cors())


app.use("/auth", AuthRoute);
app.use("/movies",moviesRouter)

app.get("/", (req, res) => {
  res.send("hello world");
});





app.listen(3000, () => {
  console.log("eunning on 3000");
});
