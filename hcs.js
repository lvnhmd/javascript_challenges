'use strict';
var bird = 'Pidgeons';
// immeduiately executing function will create its own scope
// for that matter, any function will create its own scope
(function() {
	if (typeof bird === 'undefined') {
        bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird);
    } else {
        console.log('Bert loves his ' + bird);
    }
}());


// function foo() {
// 	console.log(typeof bird);
//     if (typeof bird === 'undefined') {
//         // var bird = 'Rubber Duck';
//         console.log('Ernie loves his ' + bird);
//     } else {
//         console.log('Bert loves his ' + bird);
//     }
// };

// foo();