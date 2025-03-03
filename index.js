// Mavzu: Destructuring assignment

// array: metodlari
// map: foreach: filter: 

//Arrays:
let arr = ["Alibek", "Azimbek"]
let [firstValue,secondValue,third] = arr
console.log(third);
// console.log(secondValue);

// Objects:
let obj = {
    firstName: "Obyekt",
    age:20,


}
let {firstName:ism1, age:yosh} = obj
let ism = obj.firstName
console.log(ism);
console.log(yosh);
// console.log(age);
Object.keys(obj).forEach((val) => console.log(obj[val]))








