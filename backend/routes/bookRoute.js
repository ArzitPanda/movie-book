const express =require('express')
const BookTicket = require('../controller/BookingController/BookMovieTicket.js')


const router = express.Router()




router.post("/order",BookTicket);


module.exports =router