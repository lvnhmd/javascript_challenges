'use strict';

var key,
    obj = {
        surname: 'doe'
    };

var keys = ['name','surname'];

for (var i=0;i<keys.length;i++) {
    var key = keys[i];
     if (obj.hasOwnProperty(key)) {
        console.log(key + ' exists in obj');
        console.log(key + ': ' + obj[key]);
        continue;
    }
    console.log(key + " doesn't exist in obj");
}


// var key,
//     obj = {
//         name: 'john',
//         surname: 'doe'
//     };
// for (key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(key + ' exists in obj');
//         console.log(key + ': ' + obj[key]);
//         continue;
//     }
//     console.log(key + " doesn't exist in obj");
// }


var key,
    obj = {
        name: 'john',
        surname: 'doe'
    };
Object.prototype.hasOwnProperty = function(key) {
    if (key == 'name') {
        return false;
    }
    return true;
};
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key + ' exists in obj');
        console.log(key + ': ' + obj[key]);
        continue;
    }
    console.log(key + " doesn't exist in obj");
}