const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) =>
  res.send('Hello World')
)


app.get('/user/:id', function (req, res) {
  // const p = req.params
  // console.log(p.id)
  
  const q= req.query
  console.log(q)

  res.json({'userid' : q.name})
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params

  if(name == 'dog') {
    res.json({'sound' : '멍멍'})
  } else if(name == 'cat') {
    res.json({'sound' : '야옹'})
  } else if(name == 'pig') {
    res.json({'sound' : '꿀꿀'})
  } else {
    res.json({'sound' : '알수없음'})
  }
  


  res.send('고양이')
})

app.listen(3000)