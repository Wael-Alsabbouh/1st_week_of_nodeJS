var http = require('http');
var port=8080;
var state=10;
var server = http.createServer(function(request,response){
	if (request.url==='/' || request.url==='/state' || request.url==='/reset'){
	console.log('The current state is '+ state);
	response.setHeader('content-type', 'text/html');
	response.write('<h1>the state is:'+state+'</h1>');
	response.end();
	}else if(request.url==='/add'){
		console.log('The current state is '+ (state+1));
	response.write('<h1>OK the State is:'+ (state+1) +'</h1>');
	response.end();
	}
	else if(request.url==='/remove'){
		console.log('The current state is '+ (state-1));
	response.write('<h1>OK the State is:'+ (state-1) +'</h1>');
	response.end();
	}else{
		//console.log('Error');
	response.write('<h1 style="color:red;">ERROR: This page  ['+request.url+']  is not found</h1>');
	response.end();
	}
});

server.listen(port, function(error){
	if(error){
		console.log(error);
	}else{console.log('listing on port',port);}
});
