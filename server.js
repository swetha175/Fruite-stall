const {connectdb} = require('./connect')
const controller = require('./controller')
const cors = require('cors')
const express = require('express')
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
   .then(()=>{console.log("connected")})
   .catch((err)=>{console.log(err)})

   app.post('/api/webtech',controller.insertfaculty)
   app.get('/api/webtech',controller.getallfaculty);
   app.get('/api/webtech/:name',controller.getfaculty);
   app.put('/api/webtech/:name',controller.updatefaculty)
   app.delete('/api/webtech/:name',controller.deletefaculty)
const port=8002

app.listen(8002,()=>{
    console.log(`listening to port ${port}`)
})
