/* 
  index.js
*/
"use strict";
// **statement above makes the user use stricter js rules. 
// One of them requires the user to type var kw before variable declaration
// against debugging problems when we misspell to override existing variables**


//  //#6 objects, arrays and looping
// var result = {
//   name: "jQuery",
//   language: "JavaScript",
//   score: 4.5,
//   showLog: function () {

//   },
//   owner: {
//     login: "shawnwildermuth",
//     id: 123456
//   }
// };

// // **object are mutable which means we can add 
// // properties to our object at any point**
// result.phoneNumber = "123-456-7890";

// console.log(result.phoneNumber);

var results = [{
  name: "jQuery",
  language: "JavaScript",
  score: 4.5,
  showLog: function () {

  },
  owner: {
    login: "shawnwildermuth",
    id: 123456
  }
}, {
  name: "jQuery UI",
  language: "JavaScript",
  score: 3.5,
  showLog: function () {

  },
  owner: {
    login: "shawnwildermuth",
    id: 123456
  }
}];

// console.log(results.length);
// console.log(results[0].name);

// results.push(result);
// results.push({
//   name: "dummy project"
// });

for (var x = 0; x < results.length; x++) {
  var result = results[x];
  if (result.score > 4) continue;
  console.log(result.name);  
}



// #1
// var msg = "hello JavaScript";
// console.log(msg);

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>This is from JavaScript</p>";
// **alt: resultsDiv.append("This is from JavaScript");**



// #2 // vars and types
// console.log("msg is " + typeof(msg));
// console.log("resultsDiv is " + typeof(resultsDiv));

// var none; // *we can have undefined variables*
// console.log("none is " + typeof(none));

// var aNumber = 10;
// console.log("aNumber is " + typeof(aNumber));

// var trueFalse = true;
// console.log("trueFalse is " + typeof(trueFalse));

// //msgs = "this shouldn't work";



// #3 comparison
// if (!none) {
//   console.log("none is undefined");
// } 

// if (aNumber == "10") { // *value comparison*
//   console.log("10 is 10");
// }

// if (aNumber === "10") {  // *exact comparison*
//   console.log("10 is 10");
// }



// #4 function
// // function showMsg(msg) {
// //   console.log("showMsg: " + msg);
// // }

// //**alternative method for overloading which we are not allowed with js**
// function showMsg(msg, more) {
//   if (more) {
//     console.log("showMsg+ " + msg + more);
//   } else {
//     console.log("showMsg+ " + msg);
//   }
// }

// showMsg("some information");
// showMsg("more information", " and even more");

// // *we can have functions declared as variables*
// var showIt = function (msg) {
//   console.log(msg);
// }

// showIt("Some message");

// **we can have (callback) functions as parameters**
// function showItThen(msg, callback) {
//   showIt(msg);
//   callback();
// }

// showItThen("showItThen called", function () {
//   console.log("callback called");
// });



// #5 scopes and closures
// var inGlobal = true;

//  // **every global var is attached to window object**
// if(window.inGlobal)}{console.log("reached!")}

// function testMe() {
//   console.log("testMe(): " + inGlobal);

//  // **functions create smaller scopes**
//   var someMsg = "some Message";
//   console.log("testMe(): " + someMsg);

//  // *local var someMsg is printed with closure*
//   showItThen("with Closure", function () {
//     showIt("testMe With Closure(): " + someMsg);
//   });

// }


// // *fails because someMsg got local scope*
// //console.log("global: " + someMsg);

// testMe();