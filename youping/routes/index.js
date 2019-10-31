const express = require('express')
const Router = require('express').Router()

Router.get('/',require('../controller/index'))
Router.get('/list/:class/:sub_class',require('../controller/list'))


module.exports = Router