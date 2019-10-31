$(function(){
    get()
})
function get(){
    // document.cookie='blog-admin-cookie={"username":"yan"}'
    var str = document.cookie
    var arr = str.split(';')
    var boo = false
    for (var i=0;i<arr.length;i++) {
        arr[i] = arr[i].trim().split('=') 
        if (arr[i][0] === 'blog-admin-cookie' && arr[i][1] !== 'undefined') {
            $('.m-user-con').hide()
            $('.m-login').show()
            var user = JSON.parse(unescape(arr[i][1]))
            $('.m-username').text(user.username)
            boo=true
        } 
    }
    if (!boo) {   
        $('.m-user-con').show()
        $('.m-login').hide()
    }
}