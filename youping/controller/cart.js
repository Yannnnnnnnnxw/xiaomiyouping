const showCarts = require('../model/Cart')

function showCart(req,res){
    showCarts.find({username:req.params.username}).then((result)=>{
        if(result){
            res.render('cart',{
                data:result
            })
        }
    })
}
module.exports = showCart