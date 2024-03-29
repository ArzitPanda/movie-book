const mongoose = require('mongoose')
const BookMovie = require('./BookMovies.js')



const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:String,required:true,unique:true},
    password:{
        type:String,required:true
    },
    location:{
        
            city:{type:String},
            pincode:{type:String}

    },

    watchedMovies:[BookMovie.BookShowSchema],
    bookMovie:[BookMovie.BookShowSchema],



},{timestamps:true})


module.exports = mongoose.model("viewer",userSchema)