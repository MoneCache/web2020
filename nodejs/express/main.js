const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
// 托管静态文件目录
// 属于内置中间件
app.use(express.static("static"))

//1. 应用级中间件(用于权限判断)
// app.use((req,res,next) => {
//   console.log(new Date())
//   next()
// })

app.get('/', (req,res) => {
  res.send('首页')
})

app.get("/login",(req,res)=>{
  res.send("执行登录")
})

//2. 路由级中间件(用的比较少)
app.get("/news/add",(req,res,next)=>{
  // res.send("执行增加新闻")
  console.log("执行增加新闻")
  next()
})

app.get("/news/:id",(req,res)=>{
  res.send("新闻动态路由")
})

// 提交接口
app.post("/submit", (req,res) => {
  const body = req.body;
  console.log(body)
  res.send(body)
})

//3.错误处理中间件 /css/base.css
app.use((req,res, next) => {
  res.status(404).send('404')
})

app.listen(3000)