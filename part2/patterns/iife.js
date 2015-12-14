// an anonymous immediately-invoked function expression
(function () {

}());

// the final parenthesis can go inside or outside, the results are the same
(function () {
})();

// the function could have a name, but the name is not visible to the global scope
(function foo() {
  // this will display the function definition
  console.log(foo);
}());

// foo is not defined in the global scope
//foo();


// Here is a slightly more capable IIFE, it declares a namespace, MY_COMPANY
var MY_COMPANY = MY_COMPANY || {};

(function (o) {
  o.foo = "foo";
  o.bar = function () {
    return "bar";
    // for giggles let's delete the semi colon from line below and run gulp test
  };

  // note: we pass it in as a global, then use it as a local
}(MY_COMPANY));


