const express = require('express');
const app = express();
const routerNotes = require("./routes/notes")

app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.send('Hello World');
// })

app.use("/notes", routerNotes)

//지정하지 않은 url : 404
app.use((req, res, next) => {
  res.status(404);

  res.json({
    result: 'fail',
    error: `Page not found ${req.path}`
  })
})

app.use((err, req, res, next) => {
  res.status(500);

  res.json({
    result: 'fail',
    error: err.message
  })
})

app.listen(8080, () => {
  console.log("server start");
})