const HOMEROUTE= require('express').Router()



HOMEROUTE.get('/',(req,res)=>{
    res.status(200).send('Estas en Home')
})



module.exports= HOMEROUTE