const {
  createReservation,
  getReservation,
} = require("../controllers/reservationController");
const router = require("express").Router();

router.route("/create").post(createReservation);
router.route("/").get(getReservation);

module.exports = router;
