const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('管理员首页')
})


router.get('/center', (req,res) => {
    res.send('管理员中心')
})

module.exports = router