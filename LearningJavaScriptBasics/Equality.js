/*== Compares  the value
!=
===  compares equality in both typesss*/


var i=10;
var j=10;
console.log(i==j);
console.log(i!=j);


var s1= "Rahul"; // String Value
var s2= "Rahul";
console.log(s1==s2);


var s3=new String("Rahul"); // returning Object
console.log(s1==s3); // 
console.log(s1===s3); // comparing string value with Object


var s4=new String("Rahul");
console.log(s4==s3);
console.log(s4===s3);