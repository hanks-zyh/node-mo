var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine', 'jade') 
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('server listening on poert:'+port)

// index
app.get('/',function (req,res) {
    res.render('index',{
        title: '租房首页',
        movies: [
            {
                title: '变形金刚1',
                _id: 1,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2332503406.jpg'
            },
            {
                title: '变形金刚2',
                _id: 2,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2332503406.jpg'
            },
            {
                title: '变形金刚3',
                _id: 3,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2332503406.jpg'
            },
            {
                title: '变形金刚4',
                _id: 4,
                poster: 'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2332503406.jpg'
            }
            
        ]
    })
})


// list
app.get('/list',function (req,res) {
    res.render('index',{
        title: '租房列表'
    })
})

// movie detail
app.get('/movie/:id',function (req,res) {
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
