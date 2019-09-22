/* 
here iterator is iterator function so we can 
tranverse through the element of  arr2 by next() method.
because of iterator return value done so we have take only value ,done so we have take only value
so I use next().value
*/

/*here map function is just working like a loop
and we are use es6 of spread operator for concatinate
*/
var arr1 = [1,3,5,6,7,];
var arr2 = [2,5,7,8,9];
var iterator = arr2[Symbol.iterator]();
arr2.map (v=>{arr1=[...arr1,iterator.next().value]
})
console.log(arr1);//output- [1,3,5,6,7,2,5,7,8,9].
