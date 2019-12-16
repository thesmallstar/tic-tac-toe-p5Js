let a = new Array();
function setup() {
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0);
  stroke(400);
  strokeWeight(3);
  fill(0);
  ellipse(400, 400, 30, 30);
  for (var i = 0; i < 4; i++) {
    a[i] = [];
  }
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      a[i][j] = [];
      a[i][j][0] = 0;
      a[i][j][1] = 0;
    }
  }

  a[0][0][0] = 100;
  a[0][0][1] = 100;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (j == 0 && i != 0) {
        a[i][j][0] = a[i - 1][j][0];
        a[i][j][1] = a[i - 1][j][1] + 75;
        line(a[i][j][0], a[i][j][1], a[i - 1][j][0], a[i - 1][j][1]);
        continue;
      } else {
        console.log(i + " " + j);
        if (i == 0 && j == 0) continue;
        a[i][j][0] = a[i][j - 1][0] + 75;
        a[i][j][1] = a[i][j - 1][1];
        line(a[i][j][0], a[i][j][1], a[i][j - 1][0], a[i][j - 1][1]);
        if (i != 0)
          line(a[i][j][0], a[i][j][1], a[i - 1][j][0], a[i - 1][j][1]);
      }
    }
  }

  //   /background(0);
}

function draw() {}
