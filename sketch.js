let a = new Array();
let curState = new Array();
let chance;
var clickBoxX;
var clickBoxY;
var played;
function setup() {
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  chance = 1;
  clickBoxX = 0;
  clickBoxY = 0;
  cnv.position(x, y);
  background(0);
  stroke(400);
  strokeWeight(3);
  fill(0);
  played = 0;
  //ellipse(400, 400, 30, 30);
  for (var i = 0; i < 4; i++) {
    a[i] = [];
  }

  for (var i = 0; i < 3; i++) {
    curState[i] = [];
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      // if (random() > 0.5) curState[i][j] = 0;
      curState[i][j] = 0;
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
}

function draw() {
  textSize(50);
  background(255);
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);

  if (chance == 1) text("Chance: X", 300, 80);
  else text("Chance: O", 300, 80);

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
  fill(0);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (curState[i][j] == 2) {
        ellipse(
          (a[i][j][0] + a[i][j + 1][0]) / 2,
          (a[i][j][1] + a[i + 1][j][1]) / 2,
          65,
          65
        );
      } else if (curState[i][j] == 1) {
        line(a[i][j][0], a[i][j][1], a[i + 1][j + 1][0], a[i + 1][j + 1][1]);
        line(a[i + 1][j][0], a[i + 1][j][1], a[i][j + 1][0], a[i][j + 1][1]);
      }
    }
  }
}

function touchStarted() {
  let answer = findWhereClicked(mouseX, mouseY);
  if (answer) {
    if (curState[clickBoxX][clickBoxY] == 0) {
      curState[clickBoxX][clickBoxY] = chance;

      if (didheWin(chance) == true) {
        if (chance == 1) alert("X Wins :D you O is noob");
        else alert("O Wins :D you X is noob");

        if (chance == 1) {
          chance = 0;
        } else {
          chance = 1;
        }
        played = 0;
        clearall();
      }

      if (chance == 1) chance = 2;
      else chance = 1;

      played++;
      if (played == 9) {
        played = 0;
        clearall();

        // draw();
      }
    }
  }
  console.log(answer + " " + clickBoxX + " " + clickBoxY);
  return false;
}

function clearall() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      curState[i][j] = 0;
    }
  }
}

function didheWin(he) {
  for (var i = 0; i < 3; i++) {
    var flag = 0;
    for (var j = 0; j < 3; j++) {
      if (curState[i][j] == he) {
      } else {
        flag = 1;
      }
    }
    if (flag == 0) {
      return true;
    }
  }
  for (var i = 0; i < 3; i++) {
    var flag = 0;
    for (var j = 0; j < 3; j++) {
      if (curState[j][i] == he) {
      } else {
        flag = 1;
      }
    }
    if (flag == 0) {
      return true;
    }
  }
  var i = 0;
  var j = 0;
  if (
    curState[i][j] == he &&
    curState[i + 1][j + 1] == he &&
    curState[i + 2][i + 2] == he
  ) {
    return true;
  }

  i = 0;
  j = 0;
  if (
    curState[i + 2][j] == he &&
    curState[i + 1][j + 1] == he &&
    curState[i][i + 2] == he
  ) {
    return true;
  }

  return false;
}

function findWhereClicked(touchx, touchy) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (
        a[i][j][0] < touchx &&
        touchx < a[i][j + 1][0] &&
        touchy > a[i][j][1] &&
        touchy < a[i + 1][j][1]
      ) {
        clickBoxX = i;
        clickBoxY = j;
        return true;
      }
    }
  }
  return false;
}
