const Cart = require('../model/Cart')

function addCart(req,res){
    var data ={}
    data.id =req.body.id
    data.username =req.body.username
    data.address =req.body.address
    data.count =req.body.count
    data.title =req.body.title
    data.imgsrc =req.body.imgsrc
    data.price =req.body.price
    data.shopTags =JSON.parse(req.body.shopTags).name

    var data1={}
    data.id =req.body.id
    data.username =req.body.username
    data.address =req.body.address
    data.title =req.body.title
    data.imgsrc =req.body.imgsrc
    data.price =req.body.price
    data.shopTags =JSON.parse(req.body.shopTags).name
    if(data.username==""){
        res.json({
            msg:'请您先登录'
        })
    }else{
        // Cart.find(data1).then((result1)=>{
        //     if(result1){
        //         Cart.update(result1,{$set:{count:`${result1.count+1}`}})
        //     }else{
                Cart.create(data).then((result)=>{
                    if(result){
                        res.json({
                            msg:'成功添加'
                        })
                    }else{
                        res.json({
                            msg:'添加失败'
                        })
                    }
                })
            }
    //     })
    // }
    
    
    
}

module.exports = addCart