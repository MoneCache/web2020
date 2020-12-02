const fs = require('fs')
exports.getType = (extname) => {
  // 第一种方式
  // return new Promise((resolve, reject) => {
  //   fs.readFile('./data/mime.json', (err, data) => {
  //     if (!err) {
  //       const json = JSON.parse(data.toString())
  //       resolve(json[extname])
  //     }
  //     else {
  //       reject(err)
  //     }
  //   })
  // })
  // 第二种方式
  const data = fs.readFileSync('./data/mime.json')
  const mineObj = JSON.parse(data.toString())
  return mineObj[extname]
}