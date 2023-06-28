const mongoose = require("mongoose");

const ThreaterSchema = new mongoose.Schema({
  name: String,
  location: String,
  pincode: String,
  PresentMovies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Movie",

      start: {
        type: Date,
        default: new Date(),
      },

      end: {
        type: Date,
      },
      runningStatus: [
        {
          type: Date,
          slot: Number,
          screenName: String,
          seatAvailable: [String],
          status: Number,
        },
      ],
    },
  ],
  moviesOnTheater: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
      start: {
        type: Date,
        default: new Date(),
      },

      end: {
        type: Date,
      },
    },
  ],
});



module.exports =mongoose.model("theater",ThreaterSchema);
