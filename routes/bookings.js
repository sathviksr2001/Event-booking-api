const express = require('express');
const router = express.Router();
const { bookEvent, getUserBookings } = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth, bookEvent);
router.get('/', auth, getUserBookings);

module.exports = router;
