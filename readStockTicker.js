var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;
console.log("This goes to the console window");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var qobj = url.parse(req.url, true).query;
	var ticker = qobj.ticker;
	var company = qobj.company;
   res.write(company);
   res.write ("Success!  This app is deployed online");
   res.end();
}).listen(port);
