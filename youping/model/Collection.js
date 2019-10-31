const mongoose = require("mongoose");
//设置schema结构
var collectionSchema = new mongoose.Schema({
    id:Number,
    username: String,//用户名
    title: String,
    imgsrc :String,
    date: {type : Date, default : Date.now},
});
var collectionmodel = mongoose.model("collection",collectionSchema);
module.exports = collectionmodel;
