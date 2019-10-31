

var minus=document.querySelector('.minus')
var amount=document.querySelector('.amount')
var addition=document.querySelector('.addition')

addition.onclick=function(){
    amount.value++
}
    minus.onclick=function(){
        if(amount.value<=1){
            amount.value=1
            minus.style.color='#CCCCCC'
        }else{
            amount.value--
            minus.style.color='#845F3F'
        }
    }


var dianji=document.getElementsByClassName('dianji')
var dianjihou=document.getElementsByClassName('dianjihou')
var b=0
for(var j=0;j<dianji.length;j++){
    dianji[j].index=j
    dianji[j].onclick=function(){ 
        dianji[b].style.color='black'
        dianjihou[b].style.display='none'
        dianjihou[this.index].style.display='inline-block'
        b=this.index
        dianji[this.index].style.color='#845F3F'
    }
}


var ccq=document.getElementsByClassName('comment_center_quan')
var ckh=document.getElementsByClassName('comment_kehu')
var c=0
for(var j=0;j<ccq.length;j++){
    ccq[j].index=j
    ccq[j].onclick=function(){ 
        ccq[c].style.backgroundColor='#fff'
        ccq[c].style.color='black'
        ckh[c].style.display='none'
        ckh[this.index].style.display='inline-block'
        c=this.index
        ccq[this.index].style.backgroundColor='#845F3F'
        ccq[c].style.color='#fff'
    }
}
$(function(){
    var color = document.querySelectorAll('.color')
    var shuxing = document.querySelectorAll('.shuxing')
    var arr = []
    for(let i=0;i<shuxing.length;i++){
        var tags = shuxing[i].getElementsByClassName('tags')
        shuxing[i].index = i
        arr.push(tags)
        
        for (var j=0;j<tags.length;j++){
            tags[j].index = j
            
            tags[j].onclick= function(){
                // this.parentNode.index  父级的index
                var index = this.parentNode.index
                
                if (typeof shuxing[index].getElementsByClassName('tags').num == 'number'){
                    shuxing[index].getElementsByClassName('tags')[shuxing[index].getElementsByClassName('tags').num].classList.remove('active')
                }
                
                shuxing[index].getElementsByClassName('tags').num = this.index
                this.classList.add('active')
            }
        }
    }
})


var Gid  = document.getElementById ;
var showArea = function(){
    Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" + 	
    Gid('s_city').value + " - 县/区" + 
    Gid('s_county').value + "</h3>"
    }
// Gid('s_county').setAttribute('onchange','showArea()');
    
