// multer 的使用
const express = require('express')
const multer = require('multer')
const cors = require('cors')

// 配置 multer
const storage = multer.diskStorage({
    // 1.文件保存路径,注意路径必须存在
    destination(req,file,cb) {
        cb(null, 'assets/images/')
    },
    // 2. 修改文件名称
    filename(req,file,cb) {
        const fileFormat = (file.originalname).split('.');
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1])
    }
})

const upload = multer({storage})

const app = express()
app.use(cors())
app.post('/upLoader',upload.single(),(req, res) => {
    res.send({
        file: req.file,
        data: req.body
    })
})
app.listen(3000)