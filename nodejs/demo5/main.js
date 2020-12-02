const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const tools = require('./module/index.js')

const serve = http.createServer((res, req) => {
  //  获取地址
  let pathname = url.parse(res.url).pathname
  pathname = pathname == '/' ? '/index.html' : pathname;
  
  
  // 读取本地文件
  if (path !== '/favicon.ico') {
    // 方式一
    // fs.readFile(`./static/${pathname}`, async (err, data) => {
    //   if (!err) {
    //     const extname = path.extname(pathname)
    //     const ext = await tools.getType(extname)

    //     req.writeHead(200, {
    //       'Content-Type': `${ext};charset=utf-8`
    //     });
    //     req.end(data);
    //   } else {
    //     console.log('shouye' + err)
    //   }
    // })
    // 方式二
    fs.readFile(`./static/${pathname}`, (err, data) => {
      if (!err) {
        const extname = path.extname(pathname)
        const ext = tools.getType(extname)
        console.log(ext)

        req.writeHead(200, {
          'Content-Type': `${ext};charset=utf-8`
        });
        req.end(data);
      } else {
        console.log('shouye' + err)
      }
    })
  }
  
})
serve.listen(3000)

console.log('服务器启动成功')