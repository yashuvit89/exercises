/* 
Iteration: 1
- took around 20 to 25mins
- 4/7 test cases covered
*/

var throttle = function(fn, wait) {
  var timer = null;
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var context = this;
    if (!timer) {
      fn.apply(context, args);
      timer = setTimeout(function() {
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
};

var sayHi = function() {
  console.log("hi");
};

var throttled = throttle(sayHi, 500);
var counter = 0;

var intervalTimer = setInterval(function() {
  console.log("Calling throttle");
  if (counter === 50) {
    clearInterval(intervalTimer);
  }
  throttled();
  counter++;
}, 100);

throttled();
throttled();
throttled();
throttled();

module.exports = throttle;
