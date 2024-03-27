// access modifiers ,union types,tuples
// union types
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);// the parameter is passed as a number 
  printStatusCode('404');// here the parameter is passed as string
  //Built in  datatypes 
let b: number = 123;
let z:number=190822;
console.log(z);

let c: number = 123.456;

let d: string = 'sam';
let e: undefined = undefined;

let f: boolean = true;
let r:boolean=false;

//User-defined Data Types: Apart from built-in data types, user can also define its own data type.
// User-defined types include Enumerations (enums), classes, interfaces, arrays, and tuple.

// tuples
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


// Readonly tuple 
// define our tuple
let ourTuple1: [number, boolean, string];
// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong',5,true);
console.log(ourTuple1);

