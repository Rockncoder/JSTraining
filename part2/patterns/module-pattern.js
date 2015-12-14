
var myModule = (function(){
  'use strict';

  // private variables
  var counter = 0;

  // public variables / methods
  return {
    publicVar: "Public Var",
    sayHello: function(){
      console.info('Hello: ' + this.publicVar);
    },

    incrementCounter: function(){
      return counter++;
    },
    resetCounter: function() {
      // in order to refer to any other function, we need to use the this parameter internally
      this.sayHello();
      counter = 0;
      return counter;
    }
  };
}());


console.info("counter = " + myModule.incrementCounter());
console.info("counter = " + myModule.incrementCounter());
console.info("counter = " + myModule.incrementCounter());
console.info("counter = " + myModule.incrementCounter());
console.info("counter = " + myModule.resetCounter());
console.info("public var = " + myModule.publicVar);
