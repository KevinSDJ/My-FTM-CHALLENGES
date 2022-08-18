const CHALLENGES= require('express').Router()

CHALLENGES.get('/product_card',(req,res)=>{
    res.render('prodprev_card',{text:"dsadsadsad"})
})
CHALLENGES.get('/interact_rating_comp',(req,res)=>{

    res.render('interact_rating_comp')
})
CHALLENGES.get('/qr-component',(req,res)=>{
    res.render('qr_component')
})
CHALLENGES.get('/encript',(req,res)=>{
    res.render('encript')
})




module.exports= CHALLENGES