import express from 'express'
const app = express()

const port = 3000;
app.listen(port,()=>{
  console.log(`server is runnig on ${port}`)
})

app.get('/', (req, res)=>{
  res.send('next hire')
})