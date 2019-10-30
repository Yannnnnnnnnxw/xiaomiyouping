const mongoose = require("mongoose");
//设置schema结构
var goodSchema = new mongoose.Schema({
    id : Number,
    class : String,
    sub_class : String,
    title : String,
    desc : String,
    imgsrc : Array,
    staticWords : String,
    nameDesc : String,
    oldPrice : String,
    nowPrice : String,
    saletags : String,
    services  : Array,
    shopTags : Array,
    introduction : Array
});
var goodmodel = mongoose.model("good",goodSchema);
module.exports = goodmodel;