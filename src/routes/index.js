const INDEXROUTE= require('express').Router()
const fs= require('fs')
fs.readdir(__dirname,'utf-8',(err,files)=>{
    if(err){
        console.log(err)
    }else{
        for(let file of files){
            if(file.split('.')[0]!=='index'){
                INDEXROUTE.use(require(__dirname+'/'+file))
            }
        }
    }
})

module.exports={INDEXROUTE}