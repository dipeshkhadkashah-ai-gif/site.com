const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
    maxlength: [30],
    minlength: [4],
  },
  email: {
    type: String,
    required: [true],
    unique: true,
  },
  address: {
    type: String,
    required: [true],
    maxlength: [20],
    minlength: [10],
  },
  contact: {
    type: Number,
    maxlength: 10,
    unique: true,
  },
  session: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  equipments: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Booking", bookingSchema);
