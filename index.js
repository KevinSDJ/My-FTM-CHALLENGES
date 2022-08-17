const path =require('path')
const express= require('express')
const app= express()
const morgan= require('morgan')
const helmet= require('helmet')
const dotenv= require('dotenv')
const {INDEXROUTE} =require('./src/routes')
dotenv.config()

app.use(morgan('dev'))
app.disable('x-powered-by')
app.use(helmet())
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE,HEAD');
  next();
});
// set views
app.set("view engine", "ejs"); // express app uses ejs as view engine
app.use('/static', express.static('public'));


// routes
app.use('/',INDEXROUTE)

// on listen server 
app.listen(process.env.PORT||3000,()=>{
    process.env.PORT && console.log("RUNING: "+ process.env.PORT)||console.log("RUNING: localhost:3000")
})