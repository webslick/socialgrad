const express = require('express');
const app = express(); 
const http = require('http').createServer(app);
const createSocket = require('./socket');

const v8 = require('v8');
const path = require('path');
const config = require('config');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const SERVER = config.get('Server');
const PORT = SERVER.port || 4000;
 

const errorMiddleware = require('./middelwares/error-middleware');
const updateLastSeen = require('./middelwares/update-lastseen-middleware');

const createRoutes = require('./routers/router');

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  credentials: true,
  //  origin: 'https://botinviter.ru',
  origin: 'http://localhost:3000',
  methods: "GET, POST, PATCH, DELETE, OPTIONS",
},
{
  headers: {
    'access-control-allow-credentials': true,
    'access-control-allow-headers': "Origin, X-Requested-With, Content-Type, Accept",
    'access-control-allow-methods': "GET, POST, PATCH, DELETE, OPTIONS",
    'access-control-allow-origin': '*'
  }
}
)); 
const io = createSocket(http)

// app.use(checkAuth);
// app.use(updateLastSeen);

createRoutes(app,io);

app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static(path.join(__dirname,'..','client','build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','client','build','index.html'))
  })
}
 
http.listen(PORT,() => { 
  
  const totalHeapSize = v8.getHeapStatistics().total_available_size;
  const totalHeapSizeGb = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2);

  console.log('TOTAL HEAP SIZE Gb: ', totalHeapSizeGb);
  console.log(`Start server ${PORT} on port`);
  console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
 
});




  
