const Pay =require("../model/Order")
function showPay(req,res){
    Pay.findOne(req.params).then((result)=>{
        console.log(result)
        if(result){
            res.render('pay',{
            data:result,
            })
        }
    })
}
module.exports = showPay