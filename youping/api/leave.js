function leave(req, res){
    res.cookie('blog-admin-cookie','undefined');
    res.json({
        msg:'成功退出'
    })
}

module.exports = leave