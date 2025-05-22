const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  capacity: Number
});

module.exports = mongoose.model('Event', eventSchema);
