const http=require('http');
const fs=require('fs');

const home=fs.readFileSync('./index.html');
const css=fs.readFileSync('./style.css');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
            res.end(home);
            res.end(css);
        }
        res.end();
    });
server.listen(3000,()=>{
    console.log('HOSTED');
});
