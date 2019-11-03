const Cartsure = require('../model/Cartsure')


function showBuynow(req,res){
    console.log(req.body)
    var data ={}
    data.id =req.body.id
    data.username =req.body.username
    data.address =req.body.address
    data.count =req.body.count
    data.title =req.body.title
    data.imgsrc =req.body.imgsrc
    data.price =req.body.price
    data.shopTags =JSON.parse(req.body.shopTags).name

    if(data.username==""){
        res.json({
            msg:"请您先登录"
        })
    }else{
        Cartsure.remove({}).then((result)=>{
            if(result){
                Cartsure.create(data).then((result1)=>{
                    if(result1){
                        res.json({
                            code:1
                        })
                    }
                })
            }
        })
    }
}


module.exports = showBuynow