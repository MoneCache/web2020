// 引入 http 模块

const http = require("http");

// url 模块 的使用
const url = require("url")
http.createServer((req, res) => {
// 设置请求头 // 解决文本 显示乱码的问题
  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
  console.log(req.url)
  if (req.url !== '/favicon.ico') {
    const path = url.parse(req.url, true).query
    console.log(path)
    console.log(`这个是总数:${path.num}`)
    console.log(`这个是年龄: ${path.age}`)
  }
  
  res.end('222')


}).listen(3000)