//

// node .\index.js

const express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname,"www")))

app.listen(3000,()=>{
    console.log('Funcionando!')
})