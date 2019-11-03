var layer_show = document.querySelector('.layer-show')
var layer_hide = document.querySelector('.layer-hide')

layer_show.onmouseover=function(){
    layer_hide.style.display = 'block'
}
layer_show.onmouseleave=function(){
    layer_hide.style.display = 'none'
}



var danjia = document.querySelectorAll(".danjia")
var shuliang = document.querySelectorAll('.shuliang')
var subzongjia = document.querySelectorAll('.subzongjia')
var select_checkbox = document.querySelectorAll('.select-checkbox')
var yixuan = document.querySelector('.yixuan')
var totalprice = document.querySelector('.totalprice')
var checkbox1 = document.querySelectorAll('.checkbox1')
var cbox = document.querySelectorAll('.cbox')
var checkout = document.querySelector('.checkout')

// 设置单间商品的总价
function sub_zongjia(){
    for(let i=0;i<danjia.length;i++){
        subzongjia[i].innerHTML=(danjia[i].innerHTML-0)*(shuliang[i].innerHTML-0)
    }
}
sub_zongjia()

// 设置所有选择商品的数量及总价
function total_price(){
    var shuliang = document.querySelectorAll('.shuliang')
    var subzongjia = document.querySelectorAll('.subzongjia')
    var select_checkbox = document.querySelectorAll('.select-checkbox')
    var yixuanjian = 0
    var zongjia = 0
    for(let j=0;j<select_checkbox.length;j++){
        if(select_checkbox[j].checked == true){
            yixuanjian += (shuliang[j].innerHTML-0)
            zongjia += (subzongjia[j].innerHTML-0)
        }
    }
    yixuan.innerHTML = yixuanjian
    totalprice.innerHTML = zongjia
    if(zongjia == 0){
        layer_show.innerHTML=`<span class="postimg">!</span>满99.00元免运费`
        checkout.style.cssText='background-color:#E7E7E7;cursor: not-allowed;'
    }
    if(zongjia>0 && zongjia<99){
        layer_show.innerHTML=`<span class="postimg">!</span>还差${99-zongjia}元免运费<span class="cart-join">凑单&gt;</span>`
        checkout.style.cssText='background-color:#a9010d;cursor: pointer;'
        var cart_join = document.querySelector('.cart-join')
        cart_join.onclick=function(){
            location.href = '/index'
        }
    }
    if(zongjia >=99){
        layer_show.innerHTML=`<span class="postimg">!</span>已免运费`
        checkout.style.cssText='background-color:#a9010d;cursor: pointer;'
    }
}
total_price()

//  设置商品没有全选时剩余复选框的显示状态
function a(){
    var num2 = 0;
    for(let i=0;i<select_checkbox.length;i++){
        if(select_checkbox[i].checked == true){
            num2++
        }
    } 
    if(num2 == select_checkbox.length){
        for(let j=0;j<cbox.length;j++){
            checkbox1[j].checked = true
        }
    }else{
        for(let j=0;j<checkbox1.length;j++){
            checkbox1[j].checked = false
        }
    }
}

// 设置每件商品的点击事件
for(let i=0;i<select_checkbox.length;i++){
    select_checkbox[i].onchange=function(){
        total_price()
        a()
    }
}

// 设置除商品复选框外其他复选框的点击事件
for(let i=0;i<checkbox1.length;i++){
    checkbox1[i].onchange=function(){
        if(this.checked == true){
            for(let j=0;j<cbox.length;j++){
                cbox[j].checked = true
            }
        }else{
            for(let j=0;j<cbox.length;j++){
                cbox[j].checked = false
            }
        }
        total_price()
    }
}
var jian = document.querySelectorAll('.jian')
var jia = document.querySelectorAll('.jia')

// 设置加号减号的颜色
function color(){
    for(let i=0;i<shuliang.length;i++){
        if((shuliang[i].innerHTML-0) == 1){
            jian[i].style.cssText='color:#ccc'
        }else{
            jian[i].style.cssText='color:#845F3F'
        }
    }    
}
color()

// 设置商品的加减删除以及更改数据库
var musername = document.querySelector('.m-username')
var cart_good_items = document.querySelectorAll('.cart-good-items')

function jianCount(i){
    var jian = document.querySelectorAll('.jian')
    var shuliang = document.querySelectorAll('.shuliang')

    jian[i].onclick=function(){  
        if((shuliang[i].innerHTML-0) > 1){
            shuliang[i].index = shuliang[i].innerHTML-0
            shuliang[i].index --
            shuliang[i].innerHTML =shuliang[i].index
            color()
            sub_zongjia()
            total_price()
            jian[i].onclick=null
            $.ajax({
                type:'post',
                url:'/jian',
                data:`username=${musername.innerHTML}&_id=${cart_good_items[i].id}`,
                success:function(data){
                    if(data == "修改成功"){
                        jianCount(i)
                    }
                }
            })
        }
        if((shuliang[i].innerHTML-0) <= 1){
            jian[i].onclick =null
        }
    }
}

function jiaCount(i){
    var jia = document.querySelectorAll('.jia')
    var shuliang = document.querySelectorAll('.shuliang')
    jia[i].onclick=function(){
        shuliang[i].index = shuliang[i].innerHTML-0
        shuliang[i].index ++
        shuliang[i].innerHTML =shuliang[i].index
        if(shuliang[i].index >1){
            jianCount(i)
        }
        color()
        sub_zongjia()
        total_price()
        jia[i].onclick=null
        $.ajax({
            type:'post',
            url:'/jia',
            data:`username=${musername.innerHTML}&_id=${cart_good_items[i].id}`,
            success:function(data){
                if(data == "修改成功"){
                    jiaCount(i)
                }
            }
        })
    }
}

for(let i =0;i<shuliang.length;i++){
    jianCount(i)
    jiaCount(i)
}
// 设置商品的删除
var merchantList = document.querySelector('#merchantList')
var del = document.querySelectorAll('.del1')
for(let i=0;i<del.length;i++){
    del[i].onclick=function(){
        layer.confirm('是否删除', {
            btn: ['删除','取消'] //按钮
        }, function(){
            merchantList.removeChild(cart_good_items[i])
            $.ajax({
                type:'post',
                url:'/delete',
                data:`username=${musername.innerHTML}&_id=${cart_good_items[i].id}`,
                success:function(){
                    
                }
            })
            layer.msg('删除成功')
            total_price()
        }, function(){
        });
    }
}

// 设置商品图片和名字的点击事件
var img = document.querySelectorAll('.cart-good-items>.image')
var gname = document.querySelectorAll('.cart-good-items>.gname')
var select =document.querySelectorAll('.select')
for(let i=0;i<select.length;i++){
    img[i].onclick=function(){
        location.href = `/index/info/${select[i].id}`
    }
    gname[i].onclick=function(){
        location.href = `/index/info/${select[i].id}`
    }
}

// 设置结算按钮
var checkout = document.querySelector('.checkout')
checkout.onclick=function(){
    var totalprice1 = document.querySelector('.totalprice')
    if((totalprice1.innerHTML-0)>0){
        var select_checkbox1 = document.querySelectorAll('.select-checkbox')
        var cart_good_items1 = document.querySelectorAll('.cart-good-items')
        var select_checkbox2 = document.querySelectorAll('.select-checkbox:checked')
        var num11 = 0;
        for(let i=0;i<select_checkbox1.length;i++){
            if(select_checkbox1[i].checked == true){
                $.ajax({
                    type:'post',
                    url:'/crecartsure',
                    data:`username=${musername.innerHTML}&_id=${cart_good_items1[i].id}`,
                    success:function(data1){
                        if(data1.code){
                            num11++
                            if(num11 == select_checkbox2.length){
                                location.href=`/user/cartsure/${musername.innerHTML}`
                            } 
                        }
                    }
                }) 
            }
        }
    }
}