const Booking=require('../models/bookingModel')
// Creating Bookings
const createBooking=async(req,res)=>{
   const bookings=new Booking(req.body)
   try{
    const saveBooking=await bookings.save();
    res.json(saveBooking)

   }catch(error){
    res.json({message:error.message})

   }
}

// GET BOOKINGS
const getBookings= async(re,res)=>{
    const bookings=await Booking.find({})
    res.json(bookings)
}

// Get BOOKINGS BY ID
const getBookingById=async(req,res)=>{
    const booking=await Booking.findById(req.params.id);
    if(booking){
        res.json(booking)
    }else{
        res.json({message:"Blog not found"})
    }
}
// Update BOOKING
const updateBooking=async(re,res)=>{

}
// Delete BOOKING
const deleteBooking=async(req,res)=>{
    
}

module.exports={createBooking,getBookingById,getBookings,deleteBooking,updateBooking}