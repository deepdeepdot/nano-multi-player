import PacMan from "./PacMan.js";
import Wall from "./Wall.js";

var balls = [];
var colors = ["#bada55", "purple", "yellow", "blue", "cyan", "orange"];

var x = 50;
var y = 100;
var dx = 3;
var dy = 0;
var radius = 20;
var pacman = new PacMan(x, y, dx, dy, radius, colors[2]);

var wall = new Wall(20, 40, 600, 25, 'red');
var leftWall = new Wall(20, 40, 25, 200, 'purple');

var bottomWall = new Wall(200, 100, 100, 10, "#bada55");

var walls = [leftWall, wall, bottomWall];

const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_DOWN = 40;

window.addEventListener('keydown', (e) => {
  let speed = Math.max(Math.abs(pacman.dx), Math.abs(pacman.dy));

  switch (e.keyCode) {
    case ARROW_RIGHT:
      pacman.dx = speed;
      pacman.dy = 0;
      break;
    case ARROW_LEFT:
      pacman.dx = -speed;
      pacman.dy = 0;
      break;
    case ARROW_DOWN:
      pacman.dx = 0;
      pacman.dy = speed;
      break;
    case ARROW_UP:
      pacman.dx = 0;
      pacman.dy = -speed;
      break;
  }
}, false);

export function displayFrame(domId) {
  var canvas = document.getElementById(domId);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    walls.forEach(wall => wall.display(ctx));
    pacman.updatePosition(canvas.width, canvas.height, walls);
    pacman.display(ctx);
  }
}
