const Collection = require('../model/Collection')

function Canclecoll(req,res){
    
    Collection.remove(req.body).then((result)=>{
        if(result){
            res.json({
                msg:'取消成功'
            })
        }else{
            res.json({
                msg:'取消失败'
            })
        }
    })
}

module.exports = Canclecoll