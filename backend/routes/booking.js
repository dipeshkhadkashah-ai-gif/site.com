const router = require("express").Router();
const {createBooking,getBookingById,getBookings,updateBooking,deleteBooking}=require('../controllers/bookingController')

router.route('/create').post(createBooking)
router.route('/').get(getBookings)
router.route('/:id').get(getBookingById)
router.route('/update').put(updateBooking)
router.route('/delete').delete(deleteBooking)

module.exports = router;