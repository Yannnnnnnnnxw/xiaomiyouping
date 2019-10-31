const showSClasse = require('../model/Sclasse')
const showPClasse = require('../model/Pclasse')


function findPAndSClass(req,res){
    showSClasse.find().then((result)=>{
        if(result){
            showPClasse.find().then((result1)=>{
                if(result1){
                    res.json({
                        result:result,
                        result1:result1
                    })
                }
            })
        }
    })
}


module.exports = findPAndSClass