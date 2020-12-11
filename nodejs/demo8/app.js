// 1. 下载 mongodb
// cnpm i mongodb --save
const http = require('http')
const cors = require('cors')

const app = require('./module/router.js')
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const serve = http.createServer(app);
serve.listen(3010)
// serve.use(cors())
// app.use(cors())
const dbName = 'test'
// 第一种连接方式
// const client = new MongoClient(url, {
//   useUnifiedTopology: true
// })
// client.connect((err) => {
//   if(!err) {
//     console.log('数据库连接成功')
//   }

  // 获取db 对象
  // const db = client.db(dbName)
  // 查询 db 中所有的数据
  // db.collection('user').find({}).toArray((err, data) => {
  //   if (!err) {
  //     console.log(data)
  //   }

  //   client.close()
  // })

  //新增 db 中的数据
  // db.collection('user').insertOne({ "name": "nodejs01", "age": 50 }, (err, res) => {
  //   if (!err) {
  //     console.log(res)
  //   }
  //   client.close()
  // })

  //修改 db 中的数据
  // db.collection('user').updateOne({'name': 'nodejs01'}, {$set: {"age": 45, name: 'nodejs02'}}, (err, res) => {
  //   if (!err) {
  //     console.log('修改成功')
  //   }
  // })

  // 删除 db 中的数据
//   db.collection('user').deleteOne({'name': 'xiaohua'}, (err, msg) => {
//     if (!err) {
//       console.log('删除成功')
//     }
//   })
// })


// 以下是第二种连接方式
app.get('/index', (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (!err) {
      const db = client.db(dbName)
      db.collection('user').find({}).toArray((err, data) => {
        client.close()
        if (!err) {
          res.send(data)
        }
      })
    }
  })
})