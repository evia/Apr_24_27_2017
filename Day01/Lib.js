function sayHello(name){
	console.log("Hello " + name);
}
function bye(name){
	console.log("Bye Bye " + name);
}

module.exports.hello = sayHello;
module.exports.bye = bye;