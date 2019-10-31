const showSClasse = require('../model/Sclasse')
const showList = require('../model/Good')

function showGoodAndSclass(classname,callback){
    showSClasse.find({class:classname}).then((result)=>{
        if(result){
            showList.find({class:classname}).then((result1)=>{
                if(result1){
                    callback && typeof callback == "function" && callback(result1,result)
                }
            })
        }
    })
}

module.exports = showGoodAndSclass