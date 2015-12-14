// we can use an object literal as a singleton

var simpleSingleton = {
  // by convention the private properties/methods begin with an underscore
  _pseudoPrivateVar: "Private Var",
  _pseudoPrivateMethod: function () {
    console.info("This is a private method");
  },
  publicVar: "Public Var",
  publicMethod: function () {
    console.info("Hello " + this.publicVar);
  }
};

// we can access the methods and variables of the singleton easily
console.info(simpleSingleton.publicMethod());
// unfortunately we can also access private methods and variables easily as well
console.info(simpleSingleton._pseudoPrivateMethod());

// here is a better singleton object

var Singleton = (function () {
  // if defined, points to the object
  var instantiated;

  function init() {
    return {
      publicMethod: function () {
        console.log("Hello world");
      },
      publicProperty: 'test'
    };
  }

  return {
    getInstance: function(){
      if(!instantiated){
        instantiated = init();
      }
      return instantiated;
    }
  };
}());

// get a singleton
var s1 = Singleton.getInstance();
s1.publicProperty = 'nfl';
// note: that s2 points to the same object as s1
var s2 = Singleton.getInstance().publicProperty;

console.info(s2);
