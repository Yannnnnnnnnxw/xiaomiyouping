$('#leave').on('click',(e)=>{
    e.preventDefault()
    $.ajax({
        type:'get',
        url:'/leave',
        success:function(data){
            layer.msg(data.msg);
            setTimeout(()=>{
                location.href = '/index'
            },1000)
        },
        error:function(data){
            console.log(data)
        }
    })
})