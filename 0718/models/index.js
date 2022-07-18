const mongoose = require('mongoose')
const PostSchema = require("./schemas/board")

exports.Post = mongoose.model("Post", PostSchema)
// "Post"는 collection 이름 지정, 자동으로 소문자 바꿈, s붙음 (복수형)