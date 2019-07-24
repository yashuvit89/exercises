/* 
  1st Iteration:
  Learnings: Took very long time to come up with visualization
  Time taken: 45mins + for 5 test cases, still 2 of them are failing

*/
function curry(fn) {
  var totalArgsCount = fn.length;
  var totalArgs = [];
  var innerFn = function() {
    var args = Array.prototype.slice.call(arguments);
    console.log("totalArgs", totalArgs);
    totalArgs = totalArgs.concat(args);
    if (totalArgs.length === totalArgsCount) {
      return fn.apply(this, totalArgs);
    } else {
      return innerFn;
    }
  };

  return innerFn;
}

function add(a, b) {
  return a + b;
}

var curried = curry(add);
console.log(curried(1, 2));
console.log(curried(1)(2));

module.exports = curry;
