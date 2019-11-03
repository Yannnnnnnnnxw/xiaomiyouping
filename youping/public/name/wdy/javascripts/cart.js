
var jiaru=document.querySelector('.jiaru')

jiaru.onclick = function(){
    var shopTags1 = []
    var color = document.querySelectorAll('.color')
    var active = document.querySelectorAll('.active')
    if($('.right:has(.shuxing)').length==0 || active.length!=0){
        for(let i=0;i<color.length;i++){
            shopTags1[i] = {}
            shopTags1[i].name = color[i].innerHTML
            shopTags1[i].tags = active[i].innerHTML
        }
        var datas = {
            id:$(".dataid").attr("id")-0,
            username:$(".m-username").html(),
            address:$("#s_province").val()+$("#s_city").val()+$("#s_county").val(),    
            count:$(".amount").val()-0,
            title:$(".title").html(),
            imgsrc :$(".etalage_thumb_image:eq(0)").attr("src"),
            shopTags:JSON.stringify({name: shopTags1}),
            price:$(".nub").html()-0,
        }
        $.ajax({
            url:'/cart',
            type:'post',
            data:datas,
            success:function(datas){
                if(datas.msg=="请您先登录"){
                    layer.msg(datas.msg);
                }else{
                    layer.msg(datas.msg);
                }
            },
            error:function(err){
                console.log(err);
            }
         })
    }else{
        layer.msg('请选择规格')
    }

}
