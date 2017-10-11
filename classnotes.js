Review!!

var = value

if else statements
if  (the condition) {
	//this is where the logic goes
} else if( condition
	)else if ( condition
	)

For loops iterate through arrays

for (var i = 0; //first parameter 
	i< arra.length; //2nd parameter
	i++ //3rd parameter
	// the thing that should happen every time
	console.log...

Function declarations, there are 2 types:
-- function name(arguments){
	//whatever you want to do
}
name(passing);

-- var name = function(arguments){
	//logic
}

Objects
var car = {
	make: "VW", 
	color: "white",
	honk: function () {
		console.log("beep");
	}
}

console.log(car.make) //VW
car.honk() //beep
car["make"];

Scope: reference which variables are available from where in your program
var name ="Name";
function printName() {
	console.log(name);
	var second = "second"
}
console.log(second) //undefined
console.log(name)

