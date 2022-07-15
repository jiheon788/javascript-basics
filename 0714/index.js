const express = require('express')
const app = express()

let list = {
  "name":"이름",
  "number":"번호",
  "local":"지역",
}

app.get("/get/list", (req, res)=>{
  res.json(list);
})

// 사용자 요청 req, 사용자에게 응답줄 떄 res
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

// 서버 생성해줌
app.listen(8080, () => {
  console.log("server start");
})

// app.listen(3000);