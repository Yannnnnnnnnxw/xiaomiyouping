const mongoose = require("mongoose");
//设置schema结构
var pclassSchema = new mongoose.Schema({
    class : Array
});
var pclassmodel = mongoose.model("pclasse",pclassSchema);
module.exports = pclassmodel;