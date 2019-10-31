const Cartsure=require('../model/Cartsure')
const Order=require('../model/Order')
const Cart=require('../model/Cart')

function coc(req,res){
    var data1 = {
        username:req.body.username,
        address:req.body.address,
        totalPrice:req.body.totalPrice,
        goods:JSON.parse(req.body.goods).good,
        time:req.body.time,
    }

    Order.create(data1).then((result)=>{
        if(result){
            for(let i=0;i<JSON.parse(req.body._id)._id.length;i++){
                Cartsure.findOne({_id:JSON.parse(req.body._id)._id[i]}).then((result1)=>{
                    if(result1){
                        var data ={}
                        data.id = result1.id
                        data.username = result1.username
                        data.address = result1.address
                        data.count = result1.count
                        data.title = result1.title
                        data.imgsrc = result1.imgsrc
                        data.shopTags = result1.shopTags
                        data.price = result1.price
                        console.log(data)
                        Cartsure.remove(data).then((result2)=>{
                            if(result2){
                                Cart.remove(data).then((result3)=>{
                                    if(result3){}
                                })
                            }
                        })
                    }
                })
            }    
        }
    })

}
module.exports =coc;