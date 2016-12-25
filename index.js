var express = require('express')
var app = express()
var http = require('http')

// require('babel-core').transform('code')

app.use(express.static('client/public'))

var server = http.createServer(app)

server.listen('8080', () => {
  console.log('Listening 8080...')
})
