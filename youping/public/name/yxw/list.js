$(function(){
    var pro_item = document.querySelectorAll(".pro-item")
    for(let i =0;i<pro_item.length;i++){
        pro_item[i].onclick =function(){
            location.href = `/index/info/${pro_item[i].id}`
        }
    }
})