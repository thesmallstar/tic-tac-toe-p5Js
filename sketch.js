let a = new Array();
let curState = new Array();
function setup() {
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0);
  stroke(400);
  strokeWeight(3);
  fill(0);
  //ellipse(400, 400, 30, 30);
  for (var i = 0; i < 4; i++) {
    a[i] = [];
  }

  for (var i = 0; i < 3; i++) {
    curState[i] = [];
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (random() > 0.5) curState[i][j] = 0;
      else curState[i][j] = 1;
    }
  }

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      a[i][j] = [];
      a[i][j][0] = 0;
      a[i][j][1] = 0;
    }
  }

  a[0][0][0] = 200;
  a[0][0][1] = 200;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (j == 0 && i != 0) {
        a[i][j][0] = a[i - 1][j][0];
        a[i][j][1] = a[i - 1][j][1] + 75;
        line(a[i][j][0], a[i][j][1], a[i - 1][j][0], a[i - 1][j][1]);
        continue;
      } else {
        //        console.log(i + " " + j);
        if (i == 0 && j == 0) continue;
        a[i][j][0] = a[i][j - 1][0] + 75;
        a[i][j][1] = a[i][j - 1][1];
        line(a[i][j][0], a[i][j][1], a[i][j - 1][0], a[i][j - 1][1]);
        if (i != 0)
          line(a[i][j][0], a[i][j][1], a[i - 1][j][0], a[i - 1][j][1]);
      }
    }
  }
}

function draw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (curState[i][j] == 1) {
        ellipse(
          (a[i][j][0] + a[i][j + 1][0]) / 2,
          (a[i][j][1] + a[i + 1][j][1]) / 2,
          65,
          65
        );
      } else if (curState[i][j] == 0) {
        line(a[i][j][0], a[i][j][1], a[i + 1][j + 1][0], a[i + 1][j + 1][1]);
        line(a[i + 1][j][0], a[i + 1][j][1], a[i][j + 1][0], a[i][j + 1][1]);
      }
    }
  }
}
