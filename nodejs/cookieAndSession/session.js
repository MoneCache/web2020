// session 的使用
const express = require('express')
const session = require('express-session')

const app = express()

// 配置 session 中间件
app.use(session({
    secret: 'this is session', //服务器端生成 session 的签名
    name:"itying", //修改session对应cookie的名称
    resave: false, //强制保存 session 即使它并没有变化
    saveUninitialized: true, //强制将未初始化的 session 存储
    cookie: { 
        maxAge:1000*60*30,
        secure: false  // true 表示只有https协议才能访问cookie  
    },
    rolling:false  //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
}))

//使用 session
app.get("/",(req,res)=>{
    //1. 设置 session
    req.session.username = 'zhangsan'

    //2. 获取 session
    console.log(req.session.username) 
    res.send('首页')
})

// 销毁session的几种方式
// /1、设置session的过期时间为0  (它会把所有的session都销毁)
    // req.session.cookie.maxAge=0

    //2、销毁指定session
    // req.session.username=""

    //3、销毁session  destroy

    // req.session.destroy()

app.listen(3000)
