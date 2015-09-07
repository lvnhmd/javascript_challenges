'use strict';
var oPerson = {
    name: 'john'
};

// (function(oTeacher) {
//     global.getTeacher = function() {
//         console.log(oTeacher);
//     };
// }(oPerson));


global.getTeacher = function() {
    console.log(oPerson);
};


global.getTeacher();

oPerson.surname = 'doe';

global.getTeacher();

oPerson = {
    name: 'mary',
    c: 'sullivan'
};

// oPerson.name = 'mary';
// oPerson.surname = 'sullivan';

global.getTeacher();