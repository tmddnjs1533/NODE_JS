/* Hello world in NodeJS */
// var http = require("http");

// http.createServer(function(request, response){
//     /**
//      * HTTP 헤더 전송
//      * HTTP Status: 200 : OK
//      * Content Type: text/plain
//      */
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     /**
//      * Response Body 를 "Hello World" 로 설정
//      */
//     response.end("Hello! World\n")
// }).listen(8081);

// console.log("Server running at http://127.0.0.1:8081");

const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tmddnjs1533:5a6s7d8f@cluster0.nktlw.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World~~! 안녕하세요~~~!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})