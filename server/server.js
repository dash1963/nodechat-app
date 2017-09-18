const express = require('express');

const path = require('path');
const publicPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.send("Hola mundo cruel");
})

app.listen(3000, () => {
  console.log("Server started on port 3000")
})
