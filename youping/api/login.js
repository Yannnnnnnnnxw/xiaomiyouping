const User=require('../model/User')

function login(req,res){
  
  User.findOne({username:req.body.username,password:req.body.password})
  .then((result)=>{
    if(result){
      let data={"username":req.body.username}
      res.cookie('blog-admin-cookie',JSON.stringify(data));
      res.json({
        code:1,
        msg:'登录成功'
      })
    }else{
      res.json({
        code:0,
        msg:'用户名或密码错误'
      })
    }
  })
}
module.exports=login