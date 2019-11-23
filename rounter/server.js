// onRequest() 函数加上一些逻辑，用来找出浏览器请求的 URL 路径：
var http = require('http');
var url = require('url');

function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + "received.");

        route(pathname);
        
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("HelloWorld");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;