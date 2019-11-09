import Ball from "./Ball.js";
import Wall from "./Wall.js";

var balls = [];
var colors = ["#bada55", "purple", "yellow", "blue", "cyan", "orange"];

for (let i = 0; i < 10; i++) {
  var x = Math.random() * 800;
  var y = Math.random() * 200;
  var dx = Math.random() * 2 - 1;
  var dy = Math.random() * 2 - 1;
  var radius = Math.random() * 50 + 20;
  var idx = Math.floor(Math.random() * colors.length);
  var ball = new Ball(x, y, dx, dy, radius, colors[i % colors.length]);
  balls.push(ball);
}

var wall = new Wall(20, 40, 600, 25, 'red');

export function displayFrame(domId) {
  var canvas = document.getElementById(domId);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    for (let i = 0; i < balls.length; i++) {
      wall.display(ctx);
      balls[i].display(ctx);
      balls[i].updatePosition(canvas.width, canvas.height, wall);
    }
  }
}
