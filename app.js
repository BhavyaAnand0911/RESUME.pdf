const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    fs.readFile('./index.html','utf-8',(error,data)=>{
       if(error) {console.log('error oeccured'); return;}
       else{
        if(req.url==='/'){
            res.end(data);
        }
        else if(req.url==='/contact'){
            res.end(data);
        }
        else if(req.url==='/about'){
            res.end(data);
        }
        else{
            res.end('ERROR 404 : FILE NOT FOUND');
        }
       } 
    });
});

server.listen(3000,()=>{
    console.log('SERVER RUNNING');
})
