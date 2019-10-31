const createError = require('http-errors');
const db = require('./model/db')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser=require('body-parser')
var logger = require('morgan');
var app = express();



// view engine setup
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 设置界面路由
app.use('/user',require('./routes/user'))
app.use('/index',require('./routes/index'))
// lfz
app.get('/index/info/:good',require('./controller/info'))
// wyy
app.get('/index/search/aircraft',require('./controller/aircraft'))
app.get('/index/search/cat',require('./controller/cat'))



// 设置功能路由
// lfz
app.post("/changeState",require("./api/changeState"))
// wyy
app.post('/login',require('./api/login'))
app.post('/register',require('./api/register'))
app.post('/confirm',require('./api/confirm'))















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;