// access modifiers ,union types,tuples
// union types
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404); // the parameter is passed as a number 
printStatusCode('404'); // here the parameter is passed as string
//Built in  datatypes 
var b = 123;
var z = 190822;
console.log(z);
var c = 123.456;
var d = 'sam';
var e = undefined;
var f = true;
var r = false;
//User-defined Data Types: Apart from built-in data types, user can also define its own data type.
// User-defined types include Enumerations (enums), classes, interfaces, arrays, and tuple.
// tuples
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// Readonly tuple 
// define our tuple
var ourTuple1;
// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong', 5, true);
console.log(ourTuple1);
var tuple2;
var tuple3;
var tuple4 = tuple3.push(tuple4);
console.log(tuple4);
