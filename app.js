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
        title: '首页',
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
});

// movie detail
app.get('/movie/:id',function (req,res) {
    res.render('detail',{
        title: '详情页',
        movie:{
            title:'美国队长3：内战',
            doctor: '安东尼·罗素 / 乔·罗素',
            editor : '克里斯托弗·马库斯 / 斯蒂芬·麦克菲利 / 杰克·科比 / 乔·西蒙',
            actor : '克里斯·埃文斯 / 小罗伯特·唐尼 / 斯嘉丽·约翰逊 / 塞巴斯蒂安·斯坦 / 安东尼·麦凯 / 更多...',
            type : '动作 / 科幻 / 冒险',
            link : 'marvel.com/captainamerica',
            country : '美国',
            language : '科萨语 / 英语 / 德语 / 俄语 / 罗马尼亚语',
            publishTime: ' 2016-05-06(中国大陆/美国) / 2016-04-12(加州首映)',
            duration : '148分钟(中国大陆) / 147分钟',
            alise : '美国队长3：内战 / 美国队长3：英雄内战(港/台) / 美队3 / Captain America 3',
            summary : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……',
            flash:'https://img3.doubanio.com/rda/8ffecbe972ad5cf.mp4'
        }
    })
})

// admin
app.get('/admin',function (req,res) {
    res.render('index',{
        title: '管理员'
    })
})
