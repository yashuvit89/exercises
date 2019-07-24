/* 
  1st Iteration:
  Learnings: Took very long time to come up with visualization
  Approach: Initialized one global outer args to push to that array from all nested Fns
  Time taken: 45mins + for 5 test cases, still 2 of them are failing


  2nd Iteration:
  Approach: Making use of previous clousure
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

function curry1(fn) {
  var outerArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var totalArgs = outerArgs.concat(innerArgs);
    if (fn.length === totalArgs.length) {
      return fn.apply(null, totalArgs);
    }
    return curry1.apply(null, [fn, ...totalArgs]);
  };
}

function add(a, b) {
  return a + b;
}

var curried = curry1(add);
console.log(curried(1, 2));
console.log(curried(1)(2));

module.exports = curry1;
