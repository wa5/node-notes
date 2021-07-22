var http=require('http');

http.createServer((req,resp)=>{

    resp.writeHead(500,{'Content-Type': 'text/html'});
    resp.end("hello world im the first server")

}).listen(8088)

console.log(http)