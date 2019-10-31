const Type=require('../model/User')

function register(req,res){
    console.log(req.body.username)
    if(req.body.username){
        Type.findOne({username:req.body.username}).then((result)=>{
            if(result){
                res.json({
                    msg:'账户已存在'
                })
            }else{
                Type.create({username:req.body.username,password:req.body.password}).then((result1)=>{
                    if(result1){
                        res.json({
                            msg:'注册成功'
                        })
                    }else{
                        res.json({
                            msg:'注册失败'
                        })
                    }
                })
            }
        })
    }else{
        res.json({
            msg:'连接失败'
        })
    }
}
module.exports=register