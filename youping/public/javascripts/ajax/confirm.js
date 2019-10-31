
$('#goBuy').click(()=>{
    var project=document.querySelectorAll(".project")
    var id=document.querySelectorAll(".projectImg")
    var imgsrc=document.querySelectorAll(".projectImg>img")
    var title=document.querySelectorAll(".projectDesc>p")
    var count=document.querySelectorAll(".projectNum")
    var price=document.querySelectorAll(".projectPrice")
    var _id = []
    var goods = []
    for(let i=0;i<project.length;i++){
        goods[i] = {}
        goods[i].id = id[i].id-0
        goods[i].imgsrc = imgsrc[i].src
        goods[i].title = title[i].innerHTML
        goods[i].count = count[i].innerHTML-0
        goods[i].price = price[i].innerHTML-0
        _id[i] = project[i].id
    }

    var totalPrice =document.querySelector("#entire")
    var username=document.querySelector(".Pname")
    var address=document.querySelector(".Paddress")
    var time = (new Date()).getTime()
    var data ={
        username:username.innerHTML,
        address:address.innerHTML,
        goods:JSON.stringify({good:goods}),
        totalPrice:totalPrice.innerHTML,
        time:time,
        _id:JSON.stringify({_id:_id})
    }


    $.ajax({
        url:'/confirm',
        type:'post',
        data:data,
        success:function(data1){
            // console.log(data.ordertime)
        },
        error:function(err){
            console.log(err) 
        }
    })
    location.href=`/user/pay/${$('.Pname').html()}/${time}`
})
