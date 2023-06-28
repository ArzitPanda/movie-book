const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['credit card', 'netbanking', 'upi'],
    required: true
  },
  // Common fields for all payment types
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  // Credit card specific fields
  cardNumber: {
    type: String,
    required: function() {
      return this.type === 'credit card';
    }
  },
  cardHolderName: {
    type: String,
    required: function() {
      return this.type === 'credit card';
    }
  },
  expiryMonth: {
    type: Number,
    required: function() {
      return this.type === 'credit card';
    }
  },
  expiryYear: {
    type: Number,
    required: function() {
      return this.type === 'credit card';
    }
  },
  cvv: {
    type: String,
    required: function() {
      return this.type === 'credit card';
    }
  },
  // Netbanking specific fields
  bankName: {
    type: String,
    required: function() {
      return this.type === 'netbanking';
    }
  },
  accountNumber: {
    type: String,
    required: function() {
      return this.type === 'netbanking';
    }
  },
  // UPI specific fields
  upiId: {
    type: String,
    required: function() {
      return this.type === 'upi';
    }
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports ={ Payment,paymentSchema};
