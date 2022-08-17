const HOMEROUTE= require('express').Router()



HOMEROUTE.get('/',(req,res)=>{
    res.status(200).render("home")
})



module.exports= HOMEROUTE