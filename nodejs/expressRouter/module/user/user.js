const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('用户首页')
})


router.get('/center', (req,res) => {
    res.send('用户中心')
})

module.exports = router