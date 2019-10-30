const showClass2 = require("../model/Sclasse")
const showClass1 = require("../model/Pclasse")
const showClass3 = require("../model/Good")
function Index(req,res){
        showClass1.find().then((result1)=>{
                if(result1){
                        showClass2.find().then((result2)=>{
                                if(result2){
                                        showClass3.find({id:{$gt:65}}).then((result3)=>{
                                                if(result3){
                                                        showClass3.find({id:{$lt:7}}).then((result4)=>{
                                                                if(result4){
                                                                        showClass3.find({id:{$lt:22,$gt:14}}).then((result5)=>{
                                                                                if(result5){
                                                                                        showClass3.find().then((result6)=>{
                                                                                                if(result6){
                                                                                                        res.render('index',{
                                                                                                                data:result1,
                                                                                                                data2:result2,
                                                                                                                data3:result3,
                                                                                                                data4:result4,
                                                                                                                data5:result5,
                                                                                                                data6:result6
                                                                                                        })
                                                                                                }
                                                                                        })
                                                                                }
                                                                        })
                                                                }
                                                        })
                                                }
                                        })
                                }
                        })
                }
        })
}
module.exports = Index
