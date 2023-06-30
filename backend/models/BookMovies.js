const mongoose =require('mongoose')
const Payment = require('./Payment.js')





const BookShowSchema = new mongoose.Schema({
        user:{
            type:mongoose.Types.ObjectId,
            ref:'viewer'
        },
        show:{
                type:mongoose.Types.ObjectId,
                ref:'movies'
        },
        theater:{
            type:mongoose.Types.ObjectId,
            ref:'theater'
        },
        screen:String,
        slot:Number,
        seats:[String],
        ticket:String,
        bookingDate:Date,
        showDate:Date,
        isWatched:{
            type:Boolean,
        },
        isPaid:{
            type:Boolean
        },
        payment:Payment.paymentSchema

     
    


})


const bookShow = mongoose.model('bookshow',BookShowSchema)

module.exports ={bookShow,BookShowSchema}



