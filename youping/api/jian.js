const jian= require('../model/Cart')

function jianCart(req,res){
    jian.findOne({username:req.body.username,_id:req.body._id}).then((result)=>{
        if(result){
            jian.update(result,{$set:{count:`${result.count-1}`}}).then((result1)=>{
                if(result1.ok==1){
                    res.send('修改成功')
                }
            })
        }
    })
}

module.exports = jianCart