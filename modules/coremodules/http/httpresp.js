var http=require('http');


var server=http.createServer((req,resp)=>{
if(req.url=='/blabla'){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<html><body><h1>hello im html</h1></body></html>');
    resp.end();

}else if(req.url=='/students'){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<html><body><h1>hello student</h1></body></html>');
    resp.end();

}else if(req.url=='/triner'){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<html><body><h1>hello im triner</h1></body></html>');
    resp.end();

}else
resp.end("serach is not matched");

});
server.listen(5000);
console.log("my server is working yaar enjoy")