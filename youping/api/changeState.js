const changeState = require("../model/Order")
function State(req,res){
    changeState.update(req.body,{$set:{state:1}}).then((result)=>{
        if(result){
            res.json({
                code:1
            })
        }
    })
}
module.exports=State;