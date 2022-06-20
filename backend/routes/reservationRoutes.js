const Reservation = require("../models/reservationModel");
const { upload } = require("../utlis/fileUpload");
const {
  createReservation,
  getReservation,
  getReservationById,
} = require("../controllers/reservationController");
const router = require("express").Router();

// router.route("/create").post(createReservation);
router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const reservation = new Reservation({
      name: req.body.name,
      role: req.body.role,
      proffession: req.body.proffession,
      experience: req.body.experience,
      achievement: req.body.achievement,
      image: req.file.originalname,
    });

    const savedBlogs = await reservation.save();
    res.json(savedBlogs);
    console.log(savedBlogs);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.route("/").get(getReservation);
router.route("/:id").get(getReservationById);

module.exports = router;
