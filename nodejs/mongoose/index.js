// 引入 mongoose
const mongoose = require('mongoose')
// 无密码连接方式
mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser:true,
  useUnifiedTopology: true
})

// 有密码连接方式

//mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms');


//定义 schema

const userSchema = mongoose.Schema({
  name: String,
  age: Number
})

// 创建数据模型
// model的三个参数
// 1. 模型名称（首字母大写）
// 2. Schema
// 3. 需要操作的表(集合名称)


//如果传入 2 个参数的话: 这个模型会和模型名称相同的复数的数据库建立连接： 如通过下面方法创建模型， 那么这个模型将会操作 users 这个集合。
//如果传入 3 个参数的话: 模型默认操作第三个参数定义的集合名称
const user = mongoose.model('User', userSchema, 'user')


// 查找数据
// user.find({}, (err, docs) =>{
//   if(!err) {
//     console.log(docs)
//   }
// })

// 增加数据

// const u = new User({
//   name: '张三',
//   age: 80
// })
// u.save()

// 修改数据
// user.updateOne({ age: 80}, { age: 20 }, (err, res) =>{
//   if (!err) {
//     console.log(res)
//   }
// })


//删除数据
// user.deleteOne()

// 保存成功查找
const u = new user({
  name: '黄毛',
  age: 35
})
u.save((err, res) => {
  if (!err) {
    user.find({}, (err, docs) => {
      if (!err) {
        console.log('这是保存成功类型', docs)
      }
    })
  }
})
