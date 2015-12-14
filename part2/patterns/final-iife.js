// Final IIFE

// the semicolon is not accidental
;(function (namespace, $, undefined) {
  'use strict';
  // the parameters are now local - tiny performance boost and more control

  // private properties
  var foo = "foo",
    bar = "bar";

  // public members and methods
  namespace.foobar = "foobar";
  namespace.sayHello = function () {
    speak("Hello world");
  };

  // JavaScript functions exists the entirety of the function's scope
  // so speak() is visible before it is defined
  function speak(msg) {
    console.info("Your message: " + msg);
  }

  // these are globals here
}(window.MY_COMPANY2 = window.MY_COMPANY2 || {}, jQuery));


MY_COMPANY2.sayHello();

// we can new properties and methods whenever

// one at a time

MY_COMPANY2.wave = function (name) {
  console.info("Waving at " + name);
};

;(function (namespace, $, undefined) {
  'use strict';

  // public members and methods
  namespace.sayGoodbye = function () {
    console.info("Goodbye");
  };

}(window.MY_COMPANY2 = window.MY_COMPANY2 || {}, jQuery));


MY_COMPANY2.wave("Fred");
MY_COMPANY2.sayGoodbye();
