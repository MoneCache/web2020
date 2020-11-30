const fs = require('fs');

const path = './wwwroot';
const dirArr = [];

fs.readdir(path, (err, data) => {
  if(err) {
    console.log(err)
    return
  }

  (function getDir(i) {
    if (i == data.length) {
      console.log(dirArr);
      return;
    }
    fs.stat(path + '/' + data[i], (err, status) => {
      if (status.isDirectory()) {
        dirArr.push(data[i])
      }
      getDir(i + 1)
    })
  })(0)


})