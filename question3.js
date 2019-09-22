//Destructing is a convenient way of extracting multiple values from data stored in object and array.
//the destructuring assignment syntax is a javascript expression that makes it posible to unpack values 
//from arrays,or properties from objects,into distinict variables.
//Assignment to define what values to unpack from the sourced variable.
//EXAMPLE.
//Array destructuring.

// ex1 let a = [1,2,3];
// let[x,y,z] = a;
// console.log(x);
// console.log(y);
// console.log(z); output - 1,2,3.


//ex2  let a,b;
// [x,y=20]=[10];
// console.log(x);
// console.log(y); output - 10,20.

//array passing to function.

// ex3 let arr = [1,2,3,5,6,7,8,];
// function show([a,b,...rest]){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// show(arr); //output- 1,2,[3,5,6,7,8].

// OBJECT DESTRUCTURING.

//ex1  let course = {coursename:"javascript",duration:"threemonth",company:"clicklab"};
// let{coursename,duration,company} = course;
// console.log(coursename);
// console.log(duration);
// console.log(company);//output - javascript,threemonth,clicklab.

// ex2 let a,b;
// ({a,b} = {a:10,b:20});
// console.log(a);
// console.log(b);//output-10,20.


// ex3 let course = {coursename:"javascript",duration:"threemonths",company:"clicklab"};
// function print({coursename,duration,company}){
//     console.log(coursename);
//     console.log(duration);
//     console.log(company);

// }
// print(course);//output - javascript,threemonths,clicklab.


// ex4 let object = {name:"aditya",age:56};
// function show(z){
//     return z ;
// }
// let x = show(object);
// let{name,age} =x;
// console.log(name);
// console.log(age);// output- aditya,56

