const express = require('express')
const Router = require('express').Router()

Router.get('/',require('../controller/index'))
Router.get('/list',require('../controller/list'))


module.exports = Router