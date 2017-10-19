var app = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var xRef = 250;
  var yRef = 300;

  var drawFunction = function(x, y){
    context.beginPath()
    context.moveTo(x, y)



  }



  window.addEventListener('keydown', function(event) {
    var movingX = xRef;
    var movingY = yRef;

    //if we press up, decrease x, down increase x
    if(event.keyCode === 38 && movingX !== 0){
      movingX -= 5;
    };
    if(event.keyCode === 40 && movingX !== 600){
      movingX += 5;
    };
    if(event.keyCode === 37 && movingY !== 0){
      movingX -= 5;
    };
    if(event.keyCode === 39 && movingY !== 500){
      movingX += 5;
    };
    xRef = movingX;
    yRef = movingY;
    console.log(movingX);
    //left decrease y, right increases y
    // and appropriate combinations.
    // up
    // console.log(event);

    // drawFunction();
    //change x & y ref to represent stop point.
  })
}

window.addEventListener('load', app);
