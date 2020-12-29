const express = require('express')
const user = require('./module/user/user')
const admin = require('./module/admin/index')

const app = express()
app.use('/user', user)
app.use('/admin', admin)

app.get('/', (req,res) => {
    res.send('首页')
})



app.listen(3000)


