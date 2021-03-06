const Reservation = require('../models/reservationModel')

// Create reservation
const createReservation=async(req,res)=>{
    try{
        const reservation= await Reservation.create(req.body)
        res.json(reservation)

    }catch(error){

        res.send({error:error.message})

    }
}

// Get Reservation
const getReservation=async(req,res)=>{
    try{
        const reservations=await Reservation.find({})
        res.json(reservations)

    }catch(error){
        res.json(error)
    }
}

// Get Reservation by Id
const getReservationById=async(req,res)=>{
    try{
        const reservations=await Reservation.findById(req.params.id)
        res.json(reservations)

    }catch(error){
        res.json(error)
    }
}

module.exports={createReservation,getReservation,getReservationById}

//Update Reservation by Id
const updateReservation=async(req,res)=>{
    try{
    let reservation=await Reservation.findById(req.params.id)
    if(!booking){
        res.json('Reservation not found')
    }
    reservation = await Reservation.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:false,
        runValidators:true
    })
res.status(200).json(booking)
    }catch(error){
        console.log(error)
        res.send(error)
    }

}

//Delete Reservation by Id
const deleteReservation = async(req,res)=>{
    const reservation = await Reservation.findById(req.params.id)
    if(!reservation){
        res.json("Reservation not found")
    }
    await reservation.remove()
    res.json({
        message:"Reservation Deleted"
    })
    
}

module.exports={createReservation,getReservationById,getReservation,deleteReservation,updateReservation}; 