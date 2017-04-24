var numbers = [1,2,3,4,5];







function doSomething(){
	for(var i=0;i<numbers.length;i++){
		var num = numbers[i];
		print(num);
	}
}
function print(num){
	console.log(num);
}

doSomething();

//Functional Style

numbers.forEach(function(num){
	console.log(num);
});

//Imperative or Declarative style
/*
for(var i=0;i<numbers.length;i++){
	console.log(numbers[i]);
}
*/