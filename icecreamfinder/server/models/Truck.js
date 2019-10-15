const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    truckNumber: { type: String, required: true },
    location: { type: String, required: true },
   //or will location include latitude, longitude?
    // minutesUntil:
    date: { type: Date, default: Date.now }
   });
   const Truck = mongoose.model("Truck", truckSchema);
   module.exports = Truck;
   //index.js page for Model folder (just in case)