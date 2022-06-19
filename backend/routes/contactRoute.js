const { createContact } = require('../controllers/contactController');

const router = require('express').Router();

router.route('/create').post(createContact);

module.exports = router;