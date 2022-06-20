const Reservation=require('../models/reservationModel')

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
const getReservation=async(req,res)=>{
    try{
        const reservations=await Reservation.find({})
        res.json(reservations)

    }catch(error){
        res.json(error)
    }
}

module.exports={createReservation,getReservation}