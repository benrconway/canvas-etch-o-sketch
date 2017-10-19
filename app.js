var app = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var xRef = 300;
  var yRef = 250;

  var drawFunction = function(x, y){
    context.beginPath()
    context.moveTo(xRef, yRef)
    context.lineTo(x, y);
    context.stroke();
  }



  window.addEventListener('keydown', function(event) {
    var movingX = xRef;
    var movingY = yRef;

    //if we press up, decrease x, down increase x
    if(event.keyCode === 38 && movingX !== 0){
      movingY -= 5;
    };
    // down
    if(event.keyCode === 40 && movingX < 600){
      movingY += 5;
    };
    // left
    if(event.keyCode === 37 && movingY !== 0){
      movingX -= 5;
    };
    // right
    if(event.keyCode === 39 && movingY < 500){
      movingX += 5;
    };
    drawFunction(movingX, movingY);
    xRef = movingX;
    yRef = movingY;
    // console.log("keycode:", event.keyCode);
    // console.log("x: ", movingX);
    // console.log("y: ", movingY);


    //change x & y ref to represent stop point.
  })
}

window.addEventListener('load', app);
