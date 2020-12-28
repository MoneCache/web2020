// cookie-parser的使用

const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()

// 配置 cookie-parser 中间件
app.use(cookieParser('jackchen'))

app.get("/",(req,res)=>{
    //1. 设置 cookie 如果cookie没有过期的话，关闭浏览器后重新打开,cookie不会销毁
    res.cookie('username', 'zhangsan', {maxAge:1000*60*60})
    res.send('首页')
})

app.get("/article",(req,res)=>{
    //2. 获取cookie
    let username=req.cookies.username;
    console.log(username)
    res.send("新闻页面--"+username)
})

// cookie 加密
// 1. 加密之前, 需要在配置 cookie-parser 中间件时,传入如下参数
// app.use(cookieParser('jackchen'))
// 2. 加密
app.get("/title",(req,res)=>{
    res.cookie("username","zhangsan",{maxAge:1000*60*60,signed:true})
    //3. 获取加密过后的 cookie
    let username=req.signedCookies.username;
    res.send("标题页面--"+username)
})

// 多个域名共享 cookie ; 如: aaa.jackchen.com 和 bbb.jackchen.com
app.get("/other",(req,res)=>{
    // 1. 这里需要配置 hosts 文件, 多个域名共享, 只适用于二级域名不同的网址
    res.cookie("username","zhangsan",{maxAge:1000*60*60,signed:true, domain: '.jackchen.com'})
    res.send("其它页面")
})

app.listen(3000)