// const relevant = require("../api/relevant")
const Order = require("../model/Order")
const collection = require('../model/Collection')

function showRelevant(req,res){
    collection.find({username:req.params.username}).then((result)=>{
        if(result){
            Order.find({username:req.params.username,state:1}).then((result1)=>{
                Order.find({username:req.params.username,state:0}).then((result2)=>{
                    res.render('relevant',{
                        data:result,
                        data1:result1,
                        data2:result2
                    })
                })
            })
        }
    })
    
}
module.exports = showRelevant