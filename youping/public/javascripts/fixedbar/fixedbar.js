var cli2 = document.querySelectorAll('.fixed-nav>li')
var cm_iconss = document.querySelectorAll('.m-iconss')
var cm_info = document.querySelectorAll('.m-info')
var cpop_inner = document.querySelectorAll('.pop-inner')


for(let i=0;i<cli2.length;i++){
    cli2[i].onmouseover=function(){
        cm_info[i].style.cssText= 'color:#845f3f;'
        cm_iconss[i].style.cssText='color:#845f3f;'
    }
    cli2[i].onmouseleave=function(){
        cm_info[i].style.cssText= 'color:#333;'
        cm_iconss[i].style.cssText='color:#333;'
    }
}

var creturn_top = document.querySelector('#return-top');
    
creturn_top.onclick=function(){
    window.scrollTo(0,0);
}

for(let i=0;i<cpop_inner.length;i++){
    cli2[i].onmouseover=function(){
        cpop_inner[i].style.display = 'block'
        cm_info[i].style.cssText= 'color:#845f3f;'
        cm_iconss[i].style.cssText='color:#845f3f;'
    }
    cli2[i].onmouseleave=function(){
        cpop_inner[i].style.display = 'none'
        cm_info[i].style.cssText= 'color:#333;'
        cm_iconss[i].style.cssText='color:#333;'
    }
}