const http=require('http');

var server=http.createServer((request,response)=>{
    console.log("request is received from client");
    response.write("<h1>welcome</h1>");
    response.write("<hr/>");
    response.write("<o1> <li>DBDA</li><li>PGDAC</li> </o1>");
    response.end();
});
server.listen(5000);
console.log("HTTP sever is listening on port 5000");