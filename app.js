var app = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var xRef = 255;
  var yRef = 177;

  var img = document.createElement("img");
  img.src = "public/harrison.png"

  var drawHarrison = function(x,y){
    context.drawImage(img, x, y, 30,30)
  }

  var drawFunction = function(x, y){
    drawHarrison(x,y);
    // context.beginPath()
    // context.moveTo(xRef, yRef)
    // context.lineTo(x, y);
    // context.stroke();
  }



  window.addEventListener('keydown', function(event) {
    var movingX = xRef;
    var movingY = yRef;

    //if we press up, decrease x, down increase x
    if(event.keyCode === 38 && movingY > 0){
      movingY -= 5;
    };
    // down
    if(event.keyCode === 40 && movingY < 325){
      movingY += 5;
    };
    // left
    if(event.keyCode === 37 && movingX > 0){
      movingX -= 5;
    };
    // right
    if(event.keyCode === 39 && movingX < 480){
      movingX += 5;
    };
    drawFunction(movingX, movingY);
    xRef = movingX;
    yRef = movingY;
  })
}

window.addEventListener('load', app);
