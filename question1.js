//ex1  let a = {name:"aditya",color:"white"};
// let b = {name:"aditya",color:"white"};
// let comp = (a==b);
// console.log(comp);
// output-False
//logic - we know primitive data type like string and number are compared by their value,while objects
//are compared by their reference.
//output is false because objects given refer not same location in memory.


//ex2  let a = {name:"aditya",color:"white"};
// let b = {name:"aditya",color:"white"};
// let c = a;
// let comp = (a==c);
// console.log(comp);
//output- true ,because object a and c have same reference and same memory location.


//ex3 function compare(a, b) {
    // create array of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // if number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // if values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // are considered equivalent
    return true;
    
}
var a = {name:"aditya",age:20};
var b = {name:"aditya",age:20,};
var c = compare(a,b);
console.log(c);



