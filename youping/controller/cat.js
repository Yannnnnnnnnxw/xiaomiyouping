function cat(req,res){
    res.render('cat',{
        title:'【猫粮以及猫粮相关产品】-小米有品',
        list:[{
            img:'12.png',
            desc:'佩妮6+1宠物零食冻干 猫犬通用',
            price:'9.9',  
        },{
            img:'13.png',
            desc:'有鱼深海鱼猫粮',
            price:'97', 
        }]
    })
}
module.exports=cat