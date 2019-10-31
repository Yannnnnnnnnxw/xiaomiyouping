// 页面加载从数据库拿一级和二级分类
$.ajax({
    type:'get',
    url:'/findPAndSClass',
    success:function(data){
        for(let i=0;i<data.result1.length;i++){
            $(".nliebiao>ul").append(`
            <li class="nlie_li">
                <div><span class="nh1">${data.result1[i].class[0]}</span>&nbsp;/&nbsp;<span class="nh2">${data.result1[i].class[1]}</span></div>
                <div class="nbiao_box">
                <div class="nbiao_box1" id="b${i+10}">
                    <p>${data.result1[i].class[0]}</p>
                </div>
                <div class="nbiao_box1" id="b${i+100}">
                    <p>${data.result1[i].class[1]}</p>
                </div>
                </div>
            </li>
            `)
            for(let j=0;j<data.result.length;j++){
                if(data.result[j].class === data.result1[i].class[0]){
                    $(`#b${i+10}`).append(`
                        <div class="nbiao nbiao10">
                            <img src="${data.result[j].src}" alt="">
                            <p>${data.result[j].sub_class}</p>
                        </div>
                    `)
                }
                if(data.result[j].class === data.result1[i].class[1]){
                    $(`#b${i+100}`).append(`
                        <div class="nbiao nbiao11">
                            <img src="${data.result[j].src}" alt="">
                            <p>${data.result[j].sub_class}</p>
                        </div>
                    `)
                }
            }
        }
        $(function(){
            var nh1 = document.querySelectorAll('.nh1')
            var nh2 = document.querySelectorAll('.nh2')
            var nlie_li = document.querySelectorAll('.nlie_li')
            var nbiao10 = document.querySelectorAll('.nbiao10')
            var nbiao11 = document.querySelectorAll('.nbiao11')
            var p1 = document.querySelectorAll('.nbiao10>p')
            var p2 = document.querySelectorAll('.nbiao11>P')
            for(let i=0;i<nh1.length;i++){
                nh1[i].onclick=function(){
                    location.href = `/index/list/${nh1[i].innerHTML}/main/#${nh1[i].innerHTML}`
                }
                nh2[i].onclick=function(){
                    location.href = `/index/list/${nh2[i].innerHTML}/main/#${nh2[i].innerHTML}`
                }
                nlie_li[i].onmouseenter=()=>{
                    for(let j=0;j<nbiao10.length;j++){
                        nbiao10[j].onclick=function(){
                            location.href = `/index/list/${nh1[i].innerHTML}/${p1[j].innerHTML}/#${p1[j].innerHTML}`
                        }
                    }
                    for(let j=0;j<nbiao11.length;j++){
                        nbiao11[j].onclick=function(){
                            location.href = `/index/list/${nh2[i].innerHTML}/${p2[j].innerHTML}/#${p2[j].innerHTML}`
                        }
                    }
                }
            }
        })
    }
})
// 设置第二个隐藏导航栏的显示与隐藏功能
var box = document.querySelector('.box-hidden')
window.onscroll=function(){
    if(window.scrollY>300){
        box.style.display="block";
    }else{
        box.style.display="none";
    }
}
// 设置导航栏中的logo图标点击事件
var logo = document.querySelectorAll('.logo>img')
for(let i=0;i<logo.length;i++){
    logo[i].onclick=function(){
        location.href = '/index'
    }
}
// 设置导航栏中的限时抢购的点击事件
var nxianshi = document.querySelectorAll('.nxianshi>span')
for(let i=0;i<nxianshi.length;i++){
    nxianshi[i].onmouseenter=function(){
        this.style.cssText = 'color:#845F3F'
    }
    nxianshi[i].onmouseleave=function(){
        this.style.cssText = 'color:#666'
    }
    nxianshi[i].onclick=function(){
        location.href='https://m.youpin.mi.com/w/secbuy?_rt=weex&activity_id=5'
    }
}
// 设置第二个隐藏导航栏中的分类点击事件
var nav_show = document.querySelector('.nav-arrow-container')
var nliebiao = document.querySelector('.nliebiao')
var nav_part = document.querySelectorAll('.nav-part')[1]
nav_part.onmouseover=function(){
    nliebiao.style.display='block'
}
nav_part.onmouseleave=function(){
    nliebiao.style.display='none'
}
// 设置搜索框的点击事件
var search = document.querySelectorAll('.search')
var ipt = document.querySelectorAll('.search input')
for(let i=0;i<search.length;i++){
    ipt[i].onfocus=function(){
        search[i].style.cssText='border-bottom:1px solid #000'
    }
    ipt[i].onblur=function(){
        search[i].style.cssText='border-bottom:1px solid #ccc'
    }
}
// 设置导航栏购物车图标的点击事件及图标上方物品数量
var muc = document.querySelector('.m-user-con')
var ml = document.querySelector('.m-login')
var mun = document.querySelector('.m-login .m-username')
var car1 = document.querySelectorAll('.car1')
$(function(){
    for(let i=0;i<car1.length;i++){
        car1[i].onclick=function(){
            if(muc.style.display == 'none' && ml.style.display == 'block'){
                location.href = `/user/cart/${mun.innerHTML}`
            }
            if(getComputedStyle(muc).display == 'block' && ml.style.display == 'none'){
                layer.confirm('请登录', {
                    btn: ['登录','取消'] //按钮
                }, function(){
                    location.href = "/user/register"
                }, function(){
                });
            }
        }
    }
})

$(function(){
    if(muc.style.display == 'none' && ml.style.display == 'block'){
        $.ajax({
            type:'post',
            url:'/findCart',
            data:`username=${mun.innerHTML}`,
            success:function(data){
                if(data.goods.length !== 0){
                    var num = 0;
                    for(let i=0;i<data.goods.length;i++){
                        num += data.goods[i].count
                    }
                    $('.car1').each(function(){
                        $(this).prepend(`
                        <div class="jiaobiao"><span class="jiaobiaoshu">${num}</span></div>
                        `)
                    })
                }
            }
        })
    }
})



    


    

