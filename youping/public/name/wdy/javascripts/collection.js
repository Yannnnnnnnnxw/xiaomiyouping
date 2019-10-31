
var coll=document.querySelector('.Collection')
var coll1=document.querySelector('.Collection1')
    
var datas = {
    id:$(".dataid").attr("id")-0,
    username:$(".m-username").html(), 
    title:$(".title").html(),
    imgsrc :$(".etalage_thumb_image:eq(0)").attr("src"),
}

    coll.onclick=function(){
        $.ajax({
            url:'/collection',
            type:'post',
            data:datas,
            success:function(data1){
                coll.style.display="none"
                coll1.style.display="block"
                layer.msg(data1.msg);
            },
            error:function(err){
                console.log(err);
            }
         })
    }

    coll1.onclick=function(){
        $.ajax({
            url:'/canclecoll',
            type:'post',
            data:datas,
            success:function(data2){
                layer.msg(data2.msg);
                coll1.style.display="none"
                coll.style.display="block"
            }
        })
    }
