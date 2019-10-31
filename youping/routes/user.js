const express = require('express')
const Router = express.Router()

Router.get('/register',require('../controller/register'))
Router.get('/login',require('../controller/login'))
Router.get('/cart',require('../controller/cart'))

// wangyaoyao
Router.get('/search/aircraft',require('../controller/aircraft'))
Router.get('/search/cat',require('../controller/cat'))
Router.get('/cartsure/:username',require('../controller/confirm'))

// liufengze
Router.get('/pay',require('../controller/pay'))
Router.get('/pay/:username/:time',require('../controller/pay'))


// wdy
Router.get('/collection',require('../controller/collection'))

module.exports = Router