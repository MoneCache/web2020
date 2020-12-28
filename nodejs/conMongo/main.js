// 讲session 储存在 数据库中, connect-mongo 中间件的使用

const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

const app = express()
// 配置 session

app.use(session({
    secret: 'this is session', //服务器端生成 session 的签名
    name:"jackchen", //修改session对应cookie的名称
    resave: false, //强制保存 session 即使它并没有变化
    saveUninitialized: true, //强制将未初始化的 session 存储
    cookie: { 
        maxAge:1000*60*30,
        secure: false  // true 表示只有https协议才能访问cookie  
    },
    rolling:true,  //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/shop',      
        touchAfter: 24 * 3600 // 不管发出了多少请求 在24小时内只更新一次session， 除非你改变了这个session 
    })
}))


app.get("/",(req,res)=>{
    //获取seesion
    if(req.session.username || req.session.age){
        res.send(req.session.username+"--"+req.session.age+"-已登录")        
    }else{
        res.send("没有登录")
    }
})

app.get("/login",(req,res)=>{  
    //设置seesion
    req.session.username="张三"
    req.session.age=20
    res.send("执行登录")
})

app.listen(3000)
