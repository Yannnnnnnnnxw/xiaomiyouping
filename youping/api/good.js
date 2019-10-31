const good = require('../model/Good')
const collection = require('../model/Collection')
    function showGood(idname,callback){
        good.findOne({id:idname-0}).then((result)=>{
            if(result){
                collection.findOne({id:idname-0}).then((result1)=>{
                    if(result1){
                        var code = {code:1}
                        callback && typeof callback == "function" && callback(result,code)
                    }else{
                        var code = {code:0}
                        callback && typeof callback == "function" && callback(result,code)
                    }
                }) 
            }
        })
    }

module.exports = showGood