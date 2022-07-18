const mongoose = require('mongoose')
// const express = require('express')
const {Post} = require("./models")


mongoose.connect("mongodb://localhost:27017/myapp")

mongoose.connection.on("connected", ()=>{
  console.log("연결 완료");
})

mongoose.connection.on("disconnected", ()=>{
  console.log("연결 끊김");
})

async function main(){
  await Post.create({
    title:"제목2",
    content:"내용2"
  })
}

// main();

// async function findList(){
//   return await Post.find({})
// }
// findList().then((res)=>{
//   console.log(res);
// })

// async function findItem(){
//   return await Post.find({title: '제목2'})
// }
// findItem().then((res)=>{
//   console.log(res);
// })

// async function changeItem(){
//   return await Post.updateOne({
//     _id:'62d4e149a307f0692292f731',
//     title:"new"
//   })
// }
async function changeItem2(){
  return await Post.findOneAndUpdate(
    {
      _id:'62d4fb931a1f55298c952f6c'
    }, 
    {
      title:"new"
    })
}
changeItem2().then((res)=>{
  console.log(res);
})

// async function deleteFun(){
//   await Post.deleteOne({
//     _id:'62d4fa8768ab2ae32a0977aa'
//   })
// }
// deleteFun().then((res)=>{
//   console.log(res)
// })
