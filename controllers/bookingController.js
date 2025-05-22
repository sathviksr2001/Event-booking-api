const Booking = require('../models/Booking');

exports.bookEvent = async (req, res) => {
  try {
    const booking = new Booking({
      user: req.user.id,
      event: req.body.eventId
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('event');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
