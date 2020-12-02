// fs.stat  检测是文件还是目录

const fs = require('fs')
fs.stat('./test', (err, state) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log(state.isFile())
  }
})

// fs.mkdir 创建目录

fs.mkdir('logs', (error) => {
  if(!error) {
    console.log('创建成功')
  }
})

// fs.writeFile 创建写入文件

fs.writeFile('logs/hello.log', '文件内容', (error) => {
  if (!error) {
    console.log('写入文件成功')
  }
})

// fs.appendFile 追加文件

fs.appendFile('logs/hello.log', 'hemml~ \n', err => {
  if (!err) {
    console.log('追加文件成功')
  }
})

// fs.readFile 读取文件
fs.readFile('logs/hello.log', 'utf8', (err, data) => {
  if (!err) {
    console.log(data)
  }
})

// fs.readdir 读取目录
fs.readdir('logs', (err, files) => {
  if (!err) {
    console.log(files)
  }
})

// fs.rename 重命名

fs.rename('logs/hello1.log', 'logs/hello.log', err=> {
  if (!err) {
    console.log('重命名成功')
  }
})

// fs.rmdir 删除目录

fs.rmdir('./test', err => {
  if (!err) {
    console.log('删除成功')
  }
  else {
    console.log(err)
  }
})

// fs.unlink 删除文件

fs.unlink('logs/hello.log', err => {
  console.log('删除文件成功')
})

// fs.createReadStream 从文件流中读取数据

const fileReadStream = fs.createReadStream('data.json')
let count = 0;
let str = '';

// 创建监听流
fileReadStream.on('data', data => {
  str += data
  console.log(`${++count} 接收到: ${data.length}`)
})

// 读取 文件完成
fileReadStream.on('end', () => {
  console.log(count)
  console.log(str)
})

// 读取错误
fileReadStream.on('error', (err) => {
  console.log(err)
})

// fs.createWriteStream 写入文件流
const data = '我是要保存起来的数据'
const writeStream = fs.createWriteStream('output.txt')
// 使用 utf8 编码写入数据
writeStream.write(data, 'utf8')

// 标记文件末尾, 如果没有标记, finish 事件是监听不到的
writeStream.end()

//处理事件 ---> finish 事件
writeStream.on('finish', () => { // 所有数据写入完成时会触发
  console.log('写入完成')
})

writeStream.on('error', err => {
  console.log(err)
})

console.log('程序执行完毕')

// pipe 管道流
const readerStream = fs.createReadStream('output.txt');
// 创建一个可写流
const writeStream = fs.createWriteStream('input.txt');

// 读取 input.txt 文件内容, 并将内容写入到 output.txt 文件中
readerStream.pipe(writeStream)

console.log('程序执行完毕')

