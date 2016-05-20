var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views')
app.set('view engine', 'jade')
app.listen(port)

console.log('server listening on poert:'+port)

// index
app.get('/',function (req,res) {
    res.render('index',{
        title: '租房首页'
    })
})


// list
app.get('/list',function (req,res) {
    res.render('index',{
        title: '租房列表'
    })
})

// detail
app.get('/detail/{id}',function (req,res) {
    res.render('index',{
        title: '详情页'+id
    })
})

// admin
app.get('/admin',function (req,res) {
    res.render('index',{
        title: '管理员'
    })
})
