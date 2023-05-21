const data = require('./data.json')
const http = require('http')


http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index.html);
}).listen(5000);
console.log()

data