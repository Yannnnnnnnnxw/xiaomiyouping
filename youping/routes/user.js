const express = require('express')
const Router = express.Router()

Router.get('/register',require('../controller/register'))
Router.get('/login',require('../controller/login'))
Router.get('/cart',require('../controller/cart'))
Router.get('/pay',require('../controller/pay'))
Router.get('/pay/:username/:time',require('../controller/pay'))

module.exports = Router