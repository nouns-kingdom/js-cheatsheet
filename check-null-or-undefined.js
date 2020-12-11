// I think the most efficient way to test for "value is null or undefined" is

if ( some_variable == null ){
  // some_variable is either null or undefined
}


//So these two lines are equivalent:

if ( typeof(some_variable) !== "undefined" && some_variable !== null ) {}
if ( some_variable != null ) {}


// check object empty
var normalObject = {a:2};
Object.keys(normalObject).length
//1

var sampleObject= {};
Object.keys(sampleObject).length
//0
