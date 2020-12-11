const url = require('url');
const fs = require('fs');
const path = require('path')


//扩展res
function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, {
      // 'Content-Type': 'text/html;charset="utf-8"',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-writeHeads": "X-Requested-With",
      "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
      "X-Powered-By": ' 3.2.1',
      "Content-Type": "application/json;charset=utf-8"
    });
    // res.writeHead({"Access-Control-Allow-Origin": "*"});
    // res.writeHead({"Access-Control-Allow-writeHeads": "X-Requested-With"});
    // res.writeHead({"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"});
    // res.writeHead({"X-Powered-By": ' 3.2.1'})
    // res.writeHead({"Content-Type": "application/json;charset=utf-8"});
    // res.writeHead(200, {
    //   'Content-Type': "application/json"
    // });
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.end(JSON.stringify(data));
  }
}


//根据后缀名获取文件类型
function getFileMime(extname) {
  var data = fs.readFileSync('./data/mime.json'); //同步方法
  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];

}
//静态web服务的方法
function initStatic(req, res, staticPath) {

  //1、获取地址
  let pathname = url.parse(req.url).pathname;
  pathname = pathname == '/' ? '/index.html' : pathname;
  let extname = path.extname(pathname);
  //2、通过fs模块读取文件
  try {
    let data = fs.readFileSync('./' + staticPath + pathname);
    if (data) {
      let mime = getFileMime(extname);
      res.writeHead(200, {
        'Content-Type': '' + mime + ';charset="utf-8"'
      });
      res.end(data);
    }
  } catch (error) {

  }

}

const serve = () => {
  const reqMethods = {
    _get: {},
    _post: {},
    staticPath: 'static' //，默认静态web目录
  }
  const app = (req, res) => {
    // 扩展 res
    changeRes(res)

    // 配置静态服务器
    initStatic(req, res, reqMethods.staticPath)
    // 获取请求地址
    let pathname = url.parse(req.url).pathname;

    // 获取请求类型
    let reqType = req.method.toLowerCase()
    fs.appendFile('path.log', `${pathname}\<br/\>`, (error) => {
      if (!error) {
        // console.log('写入文件成功')
      }
    })
    if (reqMethods['_' + reqType][pathname]) {
      reqMethods['_' + reqType][pathname](req, res)

    } else {
      res.writeHead(404, {
        'Content-type': 'text/html;charset=utf-8'
      })
      res.end('页面不存在')
    }
  }

  app.get = (str, cb) => {
    reqMethods['_get'][str] = cb
  }
  app.post = (str, cb) => {
    reqMethods['_post'][str] = cb
  }

  //配置静态web服务目录
  app.static = function (staticPath) {
    reqMethods.staticPath = staticPath;
  }
  return app
}
module.exports = serve()