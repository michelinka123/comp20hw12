var http = require('http');
var port = process.env.PORT || 3000;
var url = require('url');

// const MongoClient = require('mongodb').MongoClient;
// const MongoUrl = 
// "mongodb+srv://Mars1234:Mars1234@cluster0.dc97w.mongodb.net/CompanyData?retryWrites=true&w=majority";

http.createServer(function(req, res)
{
	res.writeHead(200, {'Content-Type' : 'text/html'});

	//read user submission
	var qobj = url.parse(req.url, true).query;
	var ticker = qobj.ticker;
	var company = qobj.company;
	// if (ticker == "")
	// {
	// 	res.write("You did not select a ticker" + "<br>" + "The company you selected is: " + company);
	// }

	// if (company == "")
	// {
	// 	res.write("The ticker you selected is: " + ticker + "<br>" + "You did not select a company");
	// }

// 		MongoClient.connect(MongoUrl, {useUnifiedTopology: true}, function(err, db)
// 		{
// 			if (err)
// 			{
// 				return console.log(err);
// 				return; 
// 			}

// 			var database = db.db("CompanyData");
// 			var collection = database.collection("companies");
// 			if (ticker == "")
// 			{
// 				theQuery = {"company":company};
// 				collection.find(theQuery).toArray(function(err, items)
// 				{
// 					if (err)
// 					{
// 						res.write("Error: " + err);
// 					}
// 					else
// 					{
// 						res.write("Ticker(s) for the company " + "<strong>" + company + "</strong>" + ":" + "<br>");
// 						for (i=0; i<items.length; i++)
// 						{	
// 							res.write(items[i].ticker) + "<br>";
// 						}
// 					}
// 				});
// 			}
// 			if (company == "")
// 			{
// 				theQuery = {"ticker":ticker};
// 				collection.find(theQuery).toArray(function(err, items)
// 				{
// 					if (err)
// 					{
// 						res.write("Error: " + err);
// 					}
// 					else
// 					{
// 						res.write("Companies with the ticker " + "<strong>" + ticker + "</strong>" + ":" + "<br>");
// 						for (i=0; i<items.length; i++)
// 						{	
// 							res.write(items[i].company + "<br>");
// 						}
// 						db.close();
// 					}
// 				});
// 			}

// 		});
}

	res.end();
	console.log("Connect successful! Whoopee");
}).listen(port);
