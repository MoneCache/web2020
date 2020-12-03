const http = require('http');
const app = require('./router.js')

const ejs = require('ejs')


const serve = http.createServer(app)
serve.listen(3000)

app.get('/', (req,res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'text/html;charset="utf-8"'
  // });
  // res.end('这个是首页')
  res.send('这个是首页')
})

app.get('/login', (req, res) => {
  ejs.renderFile("./views/form.ejs", {}, (err, data) => {
    res.send(data)
  })
  
})

app.post('/login', (req, res) => {

  // res.writeHead(200, {
  //   'Content-Type': 'text/html;charset="utf-8"'
  // });
  res.send(req.body)
})