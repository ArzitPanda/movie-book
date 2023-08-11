const user = require("../../models/user.js");
const { bookShow } = require("../../models/BookMovies.js");
const Razorpay = require('razorpay');
  var instance = new Razorpay({ key_id: 'rzp_test_q10qM4bTk64pGH', key_secret: 'b7emBJtIWQvd51PipFb9La08' })
const BookTicket =async  (req, res) => {
  const { uid, movieid, hallId, date, slot, screenName, seat ,price} = req.body;

 

  var orders;
  
  var options = {
    amount: price*100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, async function(err, order) {

      if(err)
      {
        res.send(err)
      }
      else
      {
        const Booking = new bookShow({
          user: uid,
          seats: seat,
          bookingDate: date,
          showDate: date,
          isPaid: false,
          screen: screenName,
          theater: hallId,
          show: movieid,
          slot: slot,
          orderId:order.id
        });
      
        const dat =await Booking.save();

          res.send(dat)

      }


    
  });






};


module.exports = BookTicket



