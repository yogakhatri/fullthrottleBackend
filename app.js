const express = require('express')
const cors =require('cors')
const jsonReader = require('./readingFile')
const app = express()

var port = process.env.PORT || 5000;

app.use(cors())
// sending data for UI
app.get('/', function (req, res) {
  res.send(jsonReader())
})

app.listen(port, () => {
  console.log(`server started at port ${port}`)

})