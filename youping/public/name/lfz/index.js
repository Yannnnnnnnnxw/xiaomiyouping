var banner_img = document.querySelectorAll(".banner_img")
var lis = document.querySelectorAll(".dian")
var banner_max = document.querySelector(".banner_max")
// var al = document.querySelectorAll(".anleft")
// var ar = document.querySelectorAll(".anright")

var num = 0
function left(){
    num++
    if(num>banner_img.length-1){
        num=0
    }
    $(".banner_max").animate({
        left:-num*859
    })
    for(let i=0;i<lis.length;i++){
        lis[i].style.border="1px solid #cecece"
        lis[i].style.background="#fff"
    }
    lis[num].style.border="4px solid #ccc"
    lis[num].style.background="#A7936E"
}
var lunbo
function lunbofn(){
    lunbo = setInterval(()=>{
        left()
    },3000)
}    
lunbofn()
$(".anleft").click(()=>{
    num--
    if(num<0){
        num=banner_img.length-1
    }
    $(".banner_max").animate({
        left:-num*859
    })
    clearInterval(lunbo)
    lunbofn()
    for(let i=0;i<lis.length;i++){
        lis[i].style.border="1px solid #cecece"
        lis[i].style.background="#fff"
    }
    lis[num].style.border="4px solid #ccc"
    lis[num].style.background="#A7936E"
})
$(".anright").click(()=>{
    left()
    clearInterval(lunbo)
    lunbofn()
})
for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        $(".banner_max").animate({
            left:-i*859
        })
        num=i
        for(let i=0;i<lis.length;i++){
            lis[i].style.border="1px solid #cecece"
            lis[i].style.background="#fff"
        }
        lis[i].style.border="4px solid #ccc"
        lis[i].style.background="#A7936E"
    }
}


$(".anleft").mouseenter(()=>{
    $(".anleft").attr("src","/name/lfz/img/huangleft.png")
})
$(".anleft").mouseleave(()=>{
    $(".anleft").attr("src","/name/lfz/img/baileft.png")
})
$(".anright").mouseenter(()=>{
    $(".anright").attr("src","/name/lfz/img/huangright.png")
})
$(".anright").mouseleave(()=>{
    $(".anright").attr("src","/name/lfz/img/bairight.png")
})
// function Drg(div){
//     this.div = div
//     this.l = 0
//     this.eleft = 0
//     var _this = this
//     this.div.onmousedown=function(e){
//         e.preventDefault()
//         _this.down(e)
//     }
// }
// Drg.prototype.down=function(e){
//     e.preventDefault()
//     var _this = this
//     this.l=e.clientX-this.div.offsetLeft
    
//     document.onmousemove=function(e){
//         e.preventDefault()
//         _this.move(e)
//     }
//     document.onmouseup=function(){
//         _this.up()
//     }
// }
// Drg.prototype.move=function(e){
//     e.preventDefault()
//     this.div.style.left=e.clientX-this.l+"px"
//     this.eleft =  e.clientX-this.l
// }
// Drg.prototype.up=function(e){
//     document.onmousemove=null
//     document.onmouseup=null
//     console.log(num)
//     console.log(this.eleft/-859)
//     if(this.eleft/-859<num-1/2){
//         num--
//         this.div.style.left=-num*859+"px"
//     }else if(num-1/2<this.eleft/-859<num+1/2){
//         this.div.style.left=-num*859+"px"
//     }else if(num+1/2<this.eleft/-859){
//         num++
//         this.div.style.left=-num*859+"px"
//         console.log(123)
//     }
//     console.log(this.div.style.left)
//     console.log(num+1/2)
// }
// new Drg(banner_max)
var lie_li = document.querySelectorAll(".lie_li")
var h1 = document.querySelectorAll(".h1")
var h2 = document.querySelectorAll(".h2")
$(".zhongchou_top>div:last-of-type").mouseenter(()=>{
    $(".bjiantou").css({"display":"none"})
    $(".hjiantou").css({"display":"inline"})
    $(".zhongchou_top>div:last-of-type>span").css({"color":"#845F3F"})
    $(".zhongchou_top>div:last-of-type").css({"cursor":"pointer"})
})
$(".gengduo").mouseleave(()=>{
    $(".bjiantou").css({"display":"inline"})
    $(".hjiantou").css({"display":"none"})
    $(".gengduo>span").css({"color":"#999"})
})
$(".search>img:first-of-type").mouseenter(()=>{
    $(".search>img:first-of-type").css({"display":"none"})
    $(".search>img:last-of-type").css({"display":"inline"})
    $(".search>img:first-of-type").css({"cursor":"pointer"})
})
$(".search>img:last-of-type").mouseleave(()=>{
    $(".search>img:first-of-type").css({"display":"inline"})
    $(".search>img:last-of-type").css({"display":"none"})
    $(".search>img:last-of-type").css({"cursor":"pointer"})
})
$(".car>img:first-of-type").mouseenter(()=>{
    $(".car>img:first-of-type").css({"display":"none"})
    $(".car>img:last-of-type").css({"display":"inline"})
    $(".car>img:first-of-type").css({"cursor":"pointer"})
})
$(".car>img:last-of-type").mouseleave(()=>{
    $(".car>img:first-of-type").css({"display":"inline"})
    $(".car>img:last-of-type").css({"display":"none"})
    $(".car>img:last-of-type").css({"cursor":"pointer"})
})
$(".search>input").focus(()=>{
    $(".search").css({"borderBottom":"1px solid #845F3F"})
})
$(".search>input").blur(()=>{
    $(".search").css({"borderBottom":"1px solid #ccc"})
})

$(".anleft2").mouseenter(()=>{
    $(".anleft2").attr("src","/name/lfz/img/huangleft.png")
})
$(".anleft2").mouseleave(()=>{
    $(".anleft2").attr("src","/name/lfz/img/baileft.png")
})
$(".anright2").mouseenter(()=>{
    $(".anright2").attr("src","/name/lfz/img/huangright.png")
})
$(".anright2").mouseleave(()=>{
    $(".anright2").attr("src","/name/lfz/img/bairight.png")
})

var num1 = 0
$(".anright2").click(()=>{
    num1++
    if(num1>$(".banner2_max>div").length-4){
        num1=$(".banner2_max>div").length-4
        $(".anright2").attr("src","/name/lfz/img/bairight.png")
    }
    $(".banner2_max").animate({
        left:-num1*271
    })
})
$(".anleft2").click(()=>{
    num1--
    if(num1<0){
        num1=0
        $(".anleft2").attr("src","/name/lfz/img/baileft.png")
    }
    $(".banner2_max").animate({
        left:-num1*271
    })
})


$(".anleft3").mouseenter(()=>{
    $(".anleft3").attr("src","/name/lfz/img/huangleft.png")
})
$(".anleft3").mouseleave(()=>{
    $(".anleft3").attr("src","/name/lfz/img/baileft.png")
})
$(".anright3").mouseenter(()=>{
    $(".anright3").attr("src","/name/lfz/img/huangright.png")
})
$(".anright3").mouseleave(()=>{
    $(".anright3").attr("src","/name/lfz/img/bairight.png")
})

var num2 = 0
$(".anright3").click(()=>{
    num2++
    if(num2>$(".banner3_max>div").length-4){
        num2=$(".banner3_max>div").length-4
        $(".anright3").attr("src","/name/lfz/img/bairight.png")
    }
    $(".banner3_max").animate({
        left:-num2*271
    })
})
$(".anleft3").click(()=>{
    num2--
    if(num2<0){
        num2=0
        $(".anleft3").attr("src","/name/lfz/img/baileft.png")
    }
    $(".banner3_max").animate({
        left:-num2*271
    })
})



$(".anleft4").mouseenter(()=>{
    $(".anleft4").attr("src","/name/lfz/img/huangleft.png")
})
$(".anleft4").mouseleave(()=>{
    $(".anleft4").attr("src","/name/lfz/img/baileft.png")
})
$(".anright4").mouseenter(()=>{
    $(".anright4").attr("src","/name/lfz/img/huangright.png")
})
$(".anright4").mouseleave(()=>{
    $(".anright4").attr("src","/name/lfz/img/bairight.png")
})

var num3 = 0
$(".anright4").click(()=>{
    num3++
    if(num3>$(".banner4_max>div").length-4){
        num3=$(".banner4_max>div").length-4
        $(".anright4").attr("src","/name/lfz/img/bairight.png")
    }
    $(".banner4_max").animate({
        left:-num3*271
    })
})
$(".anleft4").click(()=>{
    num3--
    if(num3<0){
        num3=0
        $(".anleft4").attr("src","/name/lfz/img/baileft.png")
    }
    $(".banner4_max").animate({
        left:-num3*271
    })
})



var h1 =document.querySelectorAll(".h1")
var h2 =document.querySelectorAll(".h2")
var biao1 =document.querySelectorAll(".biao1")
var biao2 =document.querySelectorAll(".biao2")
var p1 =document.querySelectorAll(".biao1>p")
var p2 =document.querySelectorAll(".biao2>p")

for(let i=0;i<h1.length;i++){
    h1[i].onclick=function(){
       location.href = `index/list/${h1[i].innerHTML}`
    }
    h2[i].onclick=function(){
        location.href = `index/list/${h2[i].innerHTML}`  
    }
    lie_li[i].onmouseenter=()=>{
        for(let j=0;j<biao1.length;j++){
            biao1[j].onclick=function(){
                location.href = `index/list/${h1[i].innerHTML}/${p1[j].innerHTML}`
            }
        }
        for(let j=0;j<biao1.length;j++){
            biao2[j].onclick=function(){
                location.href = `index/list/${h2[i].innerHTML}/${p2[j].innerHTML}`
            }
        }
    }
}

var zhuanshu=document.querySelectorAll(".zhuanshu")
for(let i=0;i<zhuanshu.length;i++){
    zhuanshu[i].onclick=()=>{
        location.href=`/index/info/${zhuanshu[i].id}`
    }
}

var gengduo1=document.querySelectorAll(".gengduo1")
var bjiantou1=document.querySelectorAll(".bjiantou1")
var hjiantou1=document.querySelectorAll(".hjiantou1")
var gd=document.querySelectorAll(".gengduo1>span")
for(let i=0;i<gengduo1.length;i++){
    $(gengduo1[i]).mouseenter(()=>{
        $(bjiantou1[i]).css({"display":"none"})
        $(hjiantou1[i]).css({"display":"inline"})
        $(gd[i]).css({"color":"#845F3F"})
        $(gengduo1[i]).css({"cursor":"pointer"})
    })
    $(gengduo1[i]).mouseleave(()=>{
        $(bjiantou1[i]).css({"display":"inline"})
        $(hjiantou1[i]).css({"display":"none"})
        $(gd[i]).css({"color":"#999"})
    })
}