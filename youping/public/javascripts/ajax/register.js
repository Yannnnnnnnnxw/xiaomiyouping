$('form').on('submit',(e)=>{
    e.preventDefault()
    if(document.querySelector('#ip').value.length == 11){
        
        $.ajax({
            url:'/register',
            type:'post',
            data:$('form').serialize(),
            success:function(data){
                layer.msg(data.msg)
                if(data.msg=='注册成功'){
                    setTimeout(function(){
                        location.href='/user/login'
                    },1000)
                }else{
                    setTimeout(function(){
                        location.href='/user/register'
                    },1000)
                }
            },
            error:function(err){
                console.log(err)
            }
        })
    }
})