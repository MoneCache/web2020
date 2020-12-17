const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')


const superagent = require('superagent')
const cheerio = require('cheerio')


superagent
  .get("https://www.baidu.com/from=844b/s?word=%E5%9B%BE%E7%89%87&sa=tb&ts=0&t_kt=0&ie=utf-8&rsv_t=9424aupPEGCjoRjBeHYXygfQ4XRcwC4%252Fw8XTJoxUrE57Vk7E6%252BwiMv1E8Q&ms=1&rsv_pq=8374025216671485964&ss=&rfrom=1024439f&rchannel=1024439j&rqid=8374025216671485964")
  .end((error, response) => {
    // console.log(response)
    //获取页面文档数据
    var content = response.text;
    // console.log(content)
     fs.writeFile("text.html", content, "utf-8", (error) => {
       //监听错误，如正常输出，则打印null
       if (error == null) {
         console.log("写入成功");
       }
     }); 
    //cheerio也就是nodejs下的jQuery  将整个文档包装成一个集合，定义一个变量$接收
    var $ = cheerio.load(content);
    //定义一个空数组，用来接收数据
    var result = [];
    $('script').each((i, el) => {
      if ($(el)[0].children.length > 0) {
        result.push($(el)[0].children)
      }
    })
    // console.log('111111', address)
    // let tempArr = []
    // address.map((index, item) => {
    //   tempArr.push(item.children)
    // })
    // $('script').each((index, value) => {
    //   address = $(value).find('#atom-data-3807c2b0-400c-11eb-9734-e52a23605c18').children().eq(0)
    // })
    // console.log(tempArr)
    //分析文档结构  先获取每个li 再遍历里面的内容(此时每个li里面就存放着我们想要获取的数据)
    // $("c-result-content .image-strong-card__2AKR6").each((index, value) => {
    //   //地址和类型为一行显示，需要用到字符串截取
    //   //地址
    //   let address = $(value).find(".image-img-item-load__3lkCk").children().eq(1).html();
    //   //类型
    //   let type = $(value).find(".info-company p").html();
    //   //解码
    //   address = unescape(address.replace(/&#x/g, '%u').replace(/;/g, ''));
    //   type = unescape(type.replace(/&#x/g, '%u').replace(/;/g, ''))
    //   //字符串截取
    //   let addressArr = address.split('<em class="vline"></em>');
    //   let typeArr = type.split('<em class="vline"></em>');
    //   //将获取的数据以对象的形式添加到数组中
    //   result.push({
    //     title: $(value).find(".name .job-title").text(),
    //     money: $(value).find(".name .red").text(),
    //     address: addressArr,
    //     company: $(value).find(".info-company a").text(),
    //     type: typeArr,
    //     position: $(value).find(".info-publis .name").text(),
    //     txImg: $(value).find(".info-publis img").attr("src"),
    //     time: $(value).find(".info-publis p").text()
    //   });
    //   // console.log(typeof $(value).find(".info-primary").children().eq(1).html());
    // });
    //将数组转换成字符串
    // result = JSON.stringify(result);
    //将数组输出到json文件里  刷新目录 即可看到当前文件夹多出一个boss.json文件(打开boss.json文件，ctrl+A全选之后 ctrl+K，再Ctrl+F即可将json文件自动排版)
    fs.writeFile("boss.json", Array.from(result), "utf-8", (error) => {
      //监听错误，如正常输出，则打印null
      if (error == null) {
        console.log("恭喜您，数据爬取成功!请打开json文件，先Ctrl+A，再Ctrl+K,最后Ctrl+F格式化后查看json文件(仅限Visual Studio Code编辑器)");
      }
    });
  });