const good = require("../api/good")

function showInfo(req,res){
    console.log(req.params)
    if(req.params.good == "area.js"){
        result
    }
    good(req.params.good,function(result,code){
          res.render('info',{
              data:result,
              code:code
            })
    })
  
}
module.exports = showInfo