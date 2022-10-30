const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    noOfRooms: {
        type: Number,
        required: true,
        length: 10
    },
    checkInDate: {
        type: String,
        required: true

    },
    checkoutDate: {
        type: String,
        required: true
    }
})

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = {
    Booking
}