const del = require('../model/Cart')

function delCart(req,res){
    del.findOne({username:req.body.username,_id:req.body._id}).then((result)=>{
        if(result){
            del.remove(result).then((result1)=>{
                // if(result1.ok==1){
                //     res.send('修改成功')
                // }
                // console,log(result1)
            })
        }
    })
}

module.exports = delCart