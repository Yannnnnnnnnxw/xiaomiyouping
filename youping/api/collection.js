const Collection = require('../model/Collection')

function addCollection(req,res){
    var data ={}
    data.id =req.body.id
    data.username =req.body.username
    data.title =req.body.title
    data.imgsrc =req.body.imgsrc
    if(data.username==""){
        res.json({
            msg:'请您先登录'
        })
    }else{
        Collection.create(data).then((result)=>{
            if(result){
                res.json({
                    msg:'收藏成功'
                })
            }else{
                res.json({
                    msg:'收藏失败'
                })
            }
        })
    }

}

module.exports = addCollection