const http = require('http');
const app = require('./router.js')


const serve = http.createServer(app)
serve.listen(3000)

app.get('/', (req,res) => {
  res.writeHead(404, {
    'Content-Type': 'text/html;charset="utf-8"'
  });
  res.end('这个是首页')
})