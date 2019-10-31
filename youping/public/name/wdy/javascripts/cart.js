
var jiaru=document.querySelector('.jiaru')

jiaru.onclick = function(){
    var shopTags1 = []
    var color = document.querySelectorAll('.color')
    var active = document.querySelectorAll('.active')
    for(let i=0;i<color.length;i++){
        shopTags1[i] = {}
        shopTags1[i].name = color[i].innerHTML
        shopTags1[i].tags = active[i].innerText
    }
    // for (var x=0;x<shopTags1.length;x++){
    //     shopTags1[x] = JSON.stringify(shopTags1[x])
    // }
    
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
            console.log(1)
            layer.msg(datas.msg);
        },
        error:function(err){
            console.log(err);
        }
     })
}
