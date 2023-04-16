// JavaScript source code

/*
 *	COMMENTS
 *	SINGLE LINE //
 *	MULTILINE ?**? ? = /
 *


 *	DECLARATIONS
 *	var, let, const
 */

// DECLARATIONS
{
	var name = "sainadth";
	let localMessage = "Hello ";
	console.log("Using Let " + localMessage + name);
}

let message;
const pi = 3.14;
message = "Hello ";
console.log("Using Const " + pi);
console.log("Using Var " + message + name);
console.log(typeof(message));


//VARIABLES

/*
Variables should always be declared before they are used. 
JavaScript used to allow assigning to undeclared variables, 
which creates an undeclared global variable. 
This is an error in strict mode and should be avoided altogether.
*/

let x;
console.log(x); // logs "undefined"
console.log(x === undefined);

x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
console.log(x);

//const only prevents re-assignments, but doesn't prevent mutations
const MY_OBJECT = { key: "value", val : "ADsfd" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];

/*
 *	Data types 8 (7 primitive + 1)
 *	Primitive
	 *	Boolean true/false
	 *	null
	 *	undefined
	 *	Number
	 *	BigInt
	 *	String
 *	Object
*/

// Data type conversion
x = "10";
y = 5;
console.log(x + y);
console.log(parseFloat(x) + y);
console.log((+x) + y);// unary + changes string to int

/**
 * Literals
 * Array Literals
 * Boolean literals
 * Numeric literals
 * Object literals
 * RegExp literals
 * String literals
**/

const coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees);
const fish = ["Lion", , "Angel"];
console.log(fish);

const myList = [, "home", , "school"];
console.log(myList.length);
const myList1 = ["home", , "school", ,];//skips element after last comma
console.log(myList.length);
const myList2 = ["home", /* empty */, "school", /* empty */,];
console.log(myList2);
console.log(myList.length);

//-NoExit -Command "& { Import-Module $env:VSAPPIDDIR\..\Tools\Microsoft.VisualStudio.DevShell.dll}; Enter-VsDevShell -SkipAutomaticLocation -SetDefaultWindowTitle -InstallPath $env:VSAPPIDDIR\..\..\
///k ""%VSAPPIDDIR%\..\Tools\VsDevCmd.bat"