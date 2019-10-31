const showGoodAndSclass = require('../api/findGoodAndSclass')

function showList(req,res){
        var name ;
        if(req.params.sub_class === "main"){
                name = req.params.class
        }else{
                name = req.params.sub_class
        }
        showGoodAndSclass(req.params.class,(result1,result2)=>{
                res.render('list',{
                        titleid:req.params.class,
                        title:name,
                        data1:result1,
                        data2:result2
                }) 
        })
}
module.exports = showList