const jia= require('../model/Cart')

function jiaCart(req,res){
    jia.findOne({username:req.body.username,_id:req.body._id}).then((result)=>{
        if(result){
            jia.update(result,{$set:{count:`${result.count+1}`}}).then((result1)=>{
                if(result1.ok==1){
                    res.send('修改成功')
                }
            })
        }
    })
}

module.exports = jiaCart