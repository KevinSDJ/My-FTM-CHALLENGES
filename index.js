const path =require('path')
const express= require('express')
const app= express()
const morgan= require('morgan')
const helmet= require('helmet')


//app.use(express.static('public'))
//app.use('/css',express.static(__dirname+'public/css'))
//app.use('/js',express.static(__dirname+'public/js'))
app.use(morgan('dev'))
app.disable('x-powered-by')
app.use(helmet())

// set views
app.set("view engine", "ejs"); // express app uses ejs as view engine
//app.set("views", path.join(__dirname, "views")); // express app uses ejs files in "views" folder to render html
app.use('/static', express.static('public'));

//app.set('views','./views')
//app.set('view engine','ejs')

app.get('/product_card',(req,res)=>{
    res.render('prodprev_card',{text:"dsadsadsad"})
})













// on listen server 
app.listen(8000,()=>{
    console.log("RUNING: localhost:8000")
})