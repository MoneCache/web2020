const url = require('url');
const fs = require('fs')

let reqMethods = {};


const app = (req, res) => {
  let pathname = url.parse(req.url).pathname;
  fs.appendFile('path.log', pathname + `<br/>`, (error) => {
    if (!error) {
      console.log('写入文件成功')
    }
  })
  if (reqMethods[pathname]) {
    reqMethods[pathname](req, res)
  }
  else {
    res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8'})
    res.end('页面不存在')
  }
}

app.get = (str, cb) => {
  reqMethods[str] = cb
}
module.exports = app