const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Genre:{
    type:[Number],

  },
  description:{
    type:String
  },
  releaseDate: { type: Date, default: new Date() },
  actors: [
    {
      name: String,
      photo: String,
    },
  ],
  director: {
    name: String, photo: String ,
  },
  producer:{
   name: String, photo: String ,
  },
  poster:{
   name:String,
  },

  price:{
    type:Number
  }

});


module.exports = mongoose.model("movie",moviesSchema);
