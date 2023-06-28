const express = require("express");
const AuthRoute = require("./routes/authRoute.js");
const mongoose = require("mongoose");
const {bookShow} = require("./models/BookMovies.js")

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

app.use("/auth", async (req, res) => {
  const user = new User({
    username: "JohnDoe",
    email: "johndoe@example.com",
    mobile: "1234567890",
    location: {
      city: "New York",
      pincode: "12345",
    },
    watchedMovies: [], // Array of watched movies (empty for now)
    bookMovie: [], // Array of booked movies (empty for now)
  });

  const movie = new Movies({
    name: "Movie Name",
    Genre: [1, 2, 3], // Array of genre IDs
    description: "Movie description",
    releaseDate: new Date(), // Current date
    actors: [
      {
        name: "Actor 1",
        photo: "actor1.jpg",
      },
      {
        name: "Actor 2",
        photo: "actor2.jpg",
      },
    ],
    director: {
      name: "Director Name",
      photo: "director.jpg",
    },
    producer: {
      name: "Producer Name",
      photo: "producer.jpg",
    },
    poster: "movie_poster.jpg",
  });

  const data = await user.save();
  const moviedata = await movie.save();


const theater =new Theater({
    name: "Theater Name",
    location: "Theater Location",
    pincode: "12345",
    PresentMovies: [
      {
        _id:new  mongoose.Types.ObjectId(moviedata._id), // Replace with an actual movie ID
        start: new Date(),
        end: new Date(),
        runningStatus: [
          {
            start: new Date(),
            slot: 1,
            screenName: "Screen 1",
            seatAvailable: ["A1", "A2", "B1"],
            status: 1
          },
          {
            start: new Date(),
            slot: 2,
            screenName: "Screen 2",
            seatAvailable: ["C1", "C2", "D1"],
            status: 1
          }
        ]
      }
    ],
    moviesOnTheater: [] // Replace with an actual movie ID
  }
  )

const theaterData =await  theater.save();


const bookShows = new bookShow({
    user:new  mongoose.Types.ObjectId(data._id), // Replace with an actual user ID
    show:new  mongoose.Types.ObjectId(moviedata._id), // Replace with an actual movie ID
    theater:new  mongoose.Types.ObjectId(theaterData._id), // Replace with an actual theater ID
    screen: "Screen 1",
    slot: 1,
    seats: ["A1", "A2", "B1"],
    bookingDate: new Date(),
    showDate: new Date(),
    isWatched: false,
    payment: {
        type: "credit card",
        amount: 100,
        currency: "USD",
        cardNumber: "1234567890123456",
        cardHolderName: "John Doe",
        expiryMonth: 12,
        expiryYear: 2025,
        cvv: "123"
    }
  }
  )

  const booking  =await bookShows.save()

await  User.findByIdAndUpdate(data._id,{

      $push:{watchedMovies:booking}
  })




  console.log(data, moviedata,theaterData,booking);
});

app.get("/", (req, res) => {
  res.send("hello world");
});





app.listen(3000, () => {
  console.log("eunning on 3000");
});
