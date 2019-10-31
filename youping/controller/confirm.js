const shangpin =require("../model/Cartsure")
function confirm(req,res){
    shangpin.find({username:req.params.username}).then((result)=>{
        res.render('confirm',{
            title:'结算-小米有品',
            Sp:result
        })
    })
    
}
module.exports=confirm