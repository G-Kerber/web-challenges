const data = undefined; //undefined
//const data = 42; //number
//const data = ""; //NaN
//const data = null; //null
//const data = "hello world"; //string
//const data = false; //boolean
//const data = ""; //function
//const data = {} //object
//const data = []; //array

switch (typeof data) {
  case "undefined":
    console.log(data + " is undefined");
    break;
  case "number":
    console.log(data + " is number");
    break;
  case "string":
    console.log(data + " is string");
    break;
  case "NaN":
    console.log(data + " is not a number");
    break;
  case "null":
    console.log(data + " is null");
    break;
  case "boolean":
    console.log(data + " is boolean");
    break;
  case "function":
    console.log(data + " is function");
    break;
  case "object":
    console.log(data + " is object");
    break;
  case "array":
    console.log(data + " is array");
    break;
  default:
    console.log("I have no idea!");
}
