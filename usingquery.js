var http = require('http');
var url = require('url');


var server = http.createServer(function(req,res){
      var url_parts = url.parse(req.url,true); 
      var name = url_parts.query.name;
      var msg = url_parts.query.msg;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write("<h1> "+name+" </h1>");
      res.write("<h3>  "+msg+" </h3>")
      res.end();
      	
});

server.listen(8100);

console.log("server started on port 8100");

