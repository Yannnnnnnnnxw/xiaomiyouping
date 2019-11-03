
var coll=document.querySelector('.Collection')
var coll1=document.querySelector('.Collection1')
// var mmmm = ($('.m-username').html())
// console.log($('.m-username').html(),234)
// console.log(mmmm,1)
    coll.onclick=function(){
        var datas = {
            id:$(".dataid").attr("id")-0,
            username:$('.m-username').html(), 
            title:$(".title").html(),
            imgsrc:$(".etalage_thumb_image:eq(0)").attr("src"),
        }    
        $.ajax({
            url:'/collection',
            type:'post',
            data:datas,
            success:function(data1){
                if(data1.msg=="请您先登录"){
                    layer.msg(data1.msg);
                }else{
                    coll.style.display="none"
                    coll1.style.display="block"
                    layer.msg(data1.msg);
                }
            },
            error:function(err){
                console.log(err);
            }
         })
    }

    coll1.onclick=function(){
        var datas = {
            id:$(".dataid").attr("id")-0,
            username:$('.m-username').html(), 
            title:$(".title").html(),
            imgsrc:$(".etalage_thumb_image:eq(0)").attr("src"),
        }    
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
