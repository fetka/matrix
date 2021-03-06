function getPixelRatio(context) {
    dpr = window.devicePixelRatio || 1,
      bsr = context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1;
  
    return dpr / bsr;
  }
  
  
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext("2d");
  var pixelRatio = getPixelRatio(context);
  var initialWidth = canvas.clientWidth * pixelRatio;
  var initialHeight = canvas.clientHeight * pixelRatio;
  
  
  window.addEventListener('resize', function(args) {
    rescale();
    redraw();
  }, false);
  
  function rescale() {
    var width = initialWidth * pixelRatio;
    var height = initialHeight * pixelRatio;
    if (width != context.canvas.width)
      context.canvas.width = width;
    if (height != context.canvas.height)
      context.canvas.height = height;
  
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }
  
  function pixelPerfectLine(x) {
  
    context.save();
    context.beginPath();
    thickness = 1;
    // Multiple your stroke thickness  by a pixel ratio!
    context.lineWidth = thickness * pixelRatio;
  
    context.strokeStyle = "Black";
    context.moveTo(getSharpPixel(thickness, x), getSharpPixel(thickness, 0));
    context.lineTo(getSharpPixel(thickness, x), getSharpPixel(thickness, 200));
    context.stroke();
    context.restore();
  }
  
  function pixelPerfectRectangle(x, y, w, h, thickness, useDash) {
    context.save();
    // Pixel perfect rectange:
    context.beginPath();
  
    // Multiple your stroke thickness by a pixel ratio!
    context.lineWidth = thickness * pixelRatio;
    context.strokeStyle = "Red";
    if (useDash) {
      context.setLineDash([4]);
    }
    // use sharp x,y and integer w,h!
    context.strokeRect(
      getSharpPixel(thickness, x),
      getSharpPixel(thickness, y),
      Math.floor(w),
      Math.floor(h));
    context.restore();
  }
  
  function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    pixelPerfectLine(50);
    pixelPerfectLine(120);
    pixelPerfectLine(122);
    pixelPerfectLine(130);
    pixelPerfectLine(132);
    pixelPerfectRectangle();
    pixelPerfectRectangle(10, 11, 200.3, 443.2, 1, false);
    pixelPerfectRectangle(41, 42, 150.3, 443.2, 1, true);
    pixelPerfectRectangle(102, 100, 150.3, 243.2, 2, true);
  }
  
  function getSharpPixel(thickness, pos) {
  
    if (thickness % 2 == 0) {
      return pos;
    }
    return pos + pixelRatio / 2;
  
  }
  
  rescale();
  redraw();