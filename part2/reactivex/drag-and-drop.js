
(function (global) {

  function main () {
    var dragTarget = document.getElementById('dragTarget');

    // Get the three major events
    var mouseUp = Rx.DOM.fromEvent(dragTarget, 'mouseup');
    var mouseMove = Rx.DOM.fromEvent(document, 'mousemove');
    var mouseDown = Rx.DOM.fromEvent(dragTarget, 'mousedown');

    var mouseDrag = mouseDown.selectMany(function (md) {

      // calculate offsets when mouse down
      var startX = md.offsetX, startY = md.offsetY;

      // Calculate delta with mousemove until mouseup
      return mouseMove.map(function (mm) {
        (mm.preventDefault) ? mm.preventDefault() : event.returnValue = false;

        return {
          left: mm.clientX - startX,
          top: mm.clientY - startY
        };
      }).takeUntil(mouseUp);
    });

    // Update position
    subscription = mouseDrag.subscribe(function (pos) {
      dragTarget.style.top = pos.top + 'px';
      dragTarget.style.left = pos.left + 'px';
    });
  }

  main();

}(window));