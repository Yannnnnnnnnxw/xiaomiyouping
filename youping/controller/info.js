const good = require("../api/good")

function showInfo(req,res){
    if(req.params.good == "area.js"){
        return
    }
    // console.log(req)
    if(req.cookies['blog-admin-cookie'] && req.cookies['blog-admin-cookie']!='undefined'){
        good(JSON.parse(req.cookies['blog-admin-cookie']).username,req.params.good,function(result,code){
            res.render('info',{
                data:result,
                code:code
            })
        })
    }else{
        good('0',req.params.good,function(result,code){
            res.render('info',{
                data:result,
                code:0
            })
        })
    }
    
  
}
module.exports = showInfo