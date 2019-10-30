const mongoose = require("mongoose");
//设置schema结构
var sclassSchema = new mongoose.Schema({
    sub_class : String,
    src : String,
    class : String
});
var sclassmodel = mongoose.model("sclasse",sclassSchema);
module.exports = sclassmodel;