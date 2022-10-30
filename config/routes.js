const express = require('express')
const router = express.Router()
const { bookingRouter } = require('../app/controllers/BookingController')

router.use('/booking', bookingRouter)

module.exports = {
    routes: router
}