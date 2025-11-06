const mongoose = require('mongoose');

const latLngSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
}, { _id: false });

const tripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  origin: { type: String, required: true },
  destination: { type: String, required: true },

  originCoords: { type: latLngSchema, required: false },
  destinationCoords: { type: latLngSchema, required: false },

  startTime: { type: Date, required: true },
  status: { type: String, default: 'active' } 
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
