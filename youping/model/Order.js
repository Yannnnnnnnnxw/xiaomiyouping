const mongoose = require("mongoose");
//设置schema结构
var orderSchema = new mongoose.Schema({
    username: String,//用户名
    address: String,//收获地址
    goods:Array,
    totalPrice: Number,//数量
    state:{type : Number, default : 0},
    time:String,
});
var ordermodel = mongoose.model("order",orderSchema);
module.exports = ordermodel;