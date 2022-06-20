const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: { type: String, required: true },
  proffession: {
    type: String,
    required: true,
  },
  experience:{
    type:String,
    required:true
  },
  achievement:{
    type:String,
    required:true
  },
  image : {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);
