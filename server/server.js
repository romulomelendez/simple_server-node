const express = require('express')
const app = express()
const path = require('path')

//  Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', ( req, res ) => {

    res.sendFile(path.join(__dirname, '../src/index.html'))

})

app.listen(8081)