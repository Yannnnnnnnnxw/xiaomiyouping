const findCart = require('../model/Cart')

function showCart(req,res){
    findCart.find({username:req.body.username}).then((result)=>{
        if(result){
            res.json({
                goods:result
            })
        }
    })
}

module.exports = showCart