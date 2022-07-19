const path =require('path')
const express= require('express')
const app= express()
const morgan= require('morgan')
const helmet= require('helmet')
const dotenv= require('dotenv')
dotenv.config()


//app.use(express.static('public'))
//app.use('/css',express.static(__dirname+'public/css'))
//app.use('/js',express.static(__dirname+'public/js'))
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
//app.set("views", path.join(__dirname, "views")); // express app uses ejs files in "views" folder to render html
app.use('/static', express.static('public'));

//app.set('views','./views')
//app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.send("nadita")
})

app.get('/product_card',(req,res)=>{
    res.render('prodprev_card',{text:"dsadsadsad"})
})













// on listen server 
app.listen(process.env.NODE_ENV=== 'prod'&&46391||8000,()=>{
    console.log("RUNING: localhost:8000")
})