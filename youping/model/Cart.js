const mongoose = require("mongoose");
//设置schema结构
var cartSchema = new mongoose.Schema({
    id:Number,
    username: String,//用户名
    address: String,//收获地址
    count: Number,//数量
    title: String,
    imgsrc :String,
    shopTags:Array,
    price:Number
});
var cartmodel = mongoose.model("cart",cartSchema);
module.exports = cartmodel;
