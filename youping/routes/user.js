const express = require('express')
const Router = express.Router()

Router.get('/register',require('../controller/register'))
Router.get('/login',require('../controller/login'))
Router.get('/cart',require('../controller/cart'))

module.exports = Router