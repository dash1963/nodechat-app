// var x = new Date();
// var months['Jan', 'Fen', 'Mar', 'Apr', 'May', 'Jun',
//            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//
// console.log(x.getMonth());

var moment = require('moment');
//
// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
//
// 10:35am

var some = moment().valueOf();
console.log(some);

var createdAt = 1234;
var time = moment(createdAt);
console.log(time.format('h:mm a'));
