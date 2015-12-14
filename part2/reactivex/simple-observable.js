
//
var source = Rx.Observable.range(1, 5);

// Prints out each item
var subscription = source.subscribe(
  // can be in one of three states: onNext, onError, onComplete
  function (x) {
    console.info('onNext: ' + x);
  },
  // Once it has an error, we are done
  function (e) {
    console.info('onError: ' + e);
  },
  // Once it has finished, we are done
  function () {
    console.info('onCompleted')
  });