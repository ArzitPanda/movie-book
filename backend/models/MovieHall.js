const mongoose = require("mongoose");

const ThreaterSchema = new mongoose.Schema({
  name: String,
  city: String,
  pincode: String,
  email:{
    required:true,
    type:String,
    unique:true
  },
  password:{
required:true,
type:String,

  },

  screens:[
    {
      name:String,
      seats:[String]
    }
  ],


  PresentMovies: [
    {
      id: mongoose.Types.ObjectId,


      start: {
        type: Date,
        default: new Date(),
      },

      end: {
        type: Date,
      },
      runningStatus: [
        {

          date: Date,
          slot: Number,
          screenName: String,
          seatBooked:[String],
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
