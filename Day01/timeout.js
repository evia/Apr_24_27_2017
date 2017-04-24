//setTimeout
//executes a function after a specific time
//built-in function

// function doSomething(num){
// 	console.log(num);
// }
// doSomething(10);

//setTimeout is a callback function

function writeToDB(){
	//connect to DB
		//Execute a query
	//Print the response
}
function doSomething(num){
	console.log(num);
}
doSomething(10);

function doSomethingElse(num){
	setTimeout(function(){
		console.log(num);
	},0);
	console.log("Hey whatsup");
	console.log("I am learning callbacks");
	console.log("End of doSomethingElse");
}
doSomethingElse(10);