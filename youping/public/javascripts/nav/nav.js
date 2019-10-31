var cli = document.querySelectorAll('.site-nav li')
var ca = document.querySelectorAll('.site-nav a')

var cm_clauses_con = document.querySelector('.m-clauses-con')
var csite_item_nav = document.querySelector('.site-item-nav')

for(let i=0;i<cli.length;i++){
    cli[i].onmousemove=function(){
        for(var j = 0 ;j<cli.length;j++){
            cli[j].style.cssText = 'background:#fff'
            ca[j].style.cssText = 'color:#666'
        }
        cli[i].style.cssText = 'background:#845F3F'
        ca[i].style.cssText = 'color:#fff'        
    }
}

cm_clauses_con.onmouseenter=function(){
    csite_item_nav.style.display = 'block'
}
cm_clauses_con.onmouseleave=function(){
    for(var j = 0 ;j<cli.length;j++){
        cli[j].style.cssText = 'background:#fff'
        ca[j].style.cssText = 'color:#666'
    }
    csite_item_nav.style.display = 'none'
}





var cli1 = document.querySelectorAll('.login-nav li')
var ca1 = document.querySelectorAll('.login-nav a')

var cm_login = document.querySelector('.m-login')
var clogin_item_nav = document.querySelector('.login-item-nav')

for(let i=0;i<cli1.length;i++){
    cli1[i].onmousemove=function(){
        for(var j = 0 ;j<cli1.length;j++){
            cli1[j].style.cssText = 'background:#fff'
            ca1[j].style.cssText = 'color:#666'
        }
        cli1[i].style.cssText = 'background:#845F3F'
        ca1[i].style.cssText = 'color:#fff'        
    }
}

cm_login.onmouseenter=function(){
    clogin_item_nav.style.display = 'block'
}
cm_login.onmouseleave=function(){
    for(var j = 0 ;j<cli1.length;j++){
        cli1[j].style.cssText = 'background:#fff'
        ca1[j].style.cssText = 'color:#666'
    }
    clogin_item_nav.style.display = 'none'
}

var order = document.querySelectorAll('.order')
var mmuname = document.querySelector('.m-username')
for(let i=0;i<order.length;i++){
    order[i].onclick=function(){
        location.href=`/user/relevant/${mmuname.innerHTML}`
    }
}