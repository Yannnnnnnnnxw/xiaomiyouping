$('form').on('submit',(e)=>{
    e.preventDefault()
    $.ajax({
        url:'/login',
        type:'post',
        data:$('form').serialize(),
        success:function(data){
            layer.msg(data.msg)
            if(data.code){ 
                setTimeout(()=>{
                    location.href='/index'
                },2000)
            }
        },
        error:function(err){
               console.log(err) 
            
        }
    })
   
})
