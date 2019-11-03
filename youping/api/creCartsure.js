const findCart = require('../model/Cart')
const createCart = require('../model/Cartsure')

function createCartsure(req,res){
    findCart.findOne({username:req.body.username,_id:req.body._id}).then((result)=>{
        if(result){
            var data ={}
            data.id = result.id
            data.username = result.username
            data.address = result.address
            data.count = result.count
            data.title = result.title
            data.imgsrc = result.imgsrc
            data.shopTags = result.shopTags
            data.price = result.price
            createCart.remove({}).then((result1)=>{
                if(result1){
                    createCart.create(data).then((result2)=>{
                        if(result2){
                            res.json({code:1})
                        }else{
                            res.json({code:0})
                        }
                    })
                }
            }) 
        }
    })
}

module.exports =createCartsure