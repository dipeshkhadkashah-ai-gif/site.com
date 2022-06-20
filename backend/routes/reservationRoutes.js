const {
  createReservation,
  getReservation,getReservationById
} = require("../controllers/reservationController");
const router = require("express").Router();

router.route("/create").post(createReservation);
router.route("/").get(getReservation);
router.route("/:id").get(getReservationById);

module.exports = router;
