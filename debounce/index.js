/* 
Learnings
1. Always clear timer and assign new one, so that new timer starts ticking
2. Forgot to add (call) Array.prototype.slice.call(arguments)
*/

var debounce = function(CB, time) {
  var timerId = null;
  return function() {
    clearTimeout(timerId);
    var fnArgs = Array.prototype.slice.call(arguments);
    var context = this;
    timerId = setTimeout(function() {
      CB.apply(context, fnArgs);
      clearTimeout(timerId);
      timerId = null;
    }, time);
  };
};

var callSupplier = function(n) {
  console.log("this inside supplier");
};

var debounced = debounce(callSupplier, 2000);

debounced();
debounced();
debounced();
debounced();

module.exports = debounce;
