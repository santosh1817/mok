const express = require('express')
const router = express.Router()
const { Booking } = require('../models/Booking')

router.get('/all', (req, res) => {
    Booking.find()
        .then(bookings => {
            res.send(bookings)
        })
        .catch(err => {
            res.send(err)
        });

})


router.post('/book', async (req, res) => {
    const body = req.body
    const result = await Booking.find({ checkInDate: body.checkInDate })
    if (result.length < 5) {
        const booking = new Booking(body)
        const successresult = await booking.save()
        res.send({
            status: 'success',
            data: successresult
        })
    } else {
        res.send({
            status: 'error',
            msg: 'booking full for the given date'
        })
    }

})

module.exports = {
    bookingRouter: router
}
