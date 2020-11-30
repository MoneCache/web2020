// 判断服务器上面有没有upload目录。 如果没有创建这个目录， 如果有的话不做操作


const fs = require('fs')

const path = './upload'
fs.stat(path, (err, data) => {
  if (err) {
    mkdir(path)
    return
  }
  if (!data.isDirectory()) {
    // 删除文件, 在创建目录
    fs.unlink(path, (err) => {
      if (!err) {
        mkdir(path)
      }
      else {
        console.log('请检查传入的数据是否正确')
      }
    })
  }
  
})


function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err)
      return
    }
  })
}