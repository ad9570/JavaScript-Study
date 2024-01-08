// console.log(name);      // undefined
// // console.log(address);   // error
//
// var name = 'Park';
// var name = 'Lee';   // redeclare with var : no error
//
// let address = 'Suwon';
//
// if (name == 'Lee') {
//     var hobbies = ['Cooking', 'Walking'];   // not inside function = global scope
//     console.log(hobbies);
//
//     let birth = '09-29';    // block scope : same as inside function block
//     console.log(birth);
// }
//
// function greet() {
//     var age = 30;
//     var name = 'Kim';
//     console.log(name, age, hobbies);
// }
//
// console.log(name, hobbies); // no error
// // console.log(name, birth);   // error
// // console.log(name, age);     // error
// console.log(name, address);
//
// greet();
//
// // 'use strict';
// phone = '010-1111-2222';    // declare without keyword : no error
// console.log(phone);