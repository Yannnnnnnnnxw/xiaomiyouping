const mongoose = require("mongoose");
//设置schema结构
var cartSureSchema = new mongoose.Schema({
    id:Number,
    username: String,//用户名
    address: String,//收获地址
    count: Number,//数量
    title: String,
    imgsrc :String,
    shopTags:Array,
    price:Number
});
var cartSuremodel = mongoose.model("cartsure",cartSureSchema);
module.exports = cartSuremodel;