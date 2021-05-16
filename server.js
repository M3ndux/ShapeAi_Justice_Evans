const express = require("express");
const body_parser = require("body-parser");

const app = express();
app.use(body_parser.urlencoded({extended: true}));


app.get("/", function(request, response){
	response.sendFile(__dirname+"/index.html");
});


app.post("/", function(request, response){
	var num1 = Number(request.body.num1);
	var num2 = Number(request.body.num2);

	var result = num1 + num2;
	response.send("Answer: " + result);
});


app.listen(8800, function(){
	console.log("Server has been started on port 8800");
});