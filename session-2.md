## Game discussion (part 2)

- competitive or collaborative?
- teams or battle royal?
- survival? last standing
- cards, dice
- pacman? as the ghost? (split personality?)
- Multi-player pacman
- Pacman personal shooter?
- Minecraft + baby ghosts?
- Multi-player pacman
- powerups: eat through the wall (map)
- stationary cannons
- pacman + blow/explosion walls
- classes of ghosts?
- ghost + ghost => suicide => respawn
- Dark cloud (map discovery)


## Example of Hello World using 

```html
<canvas id="hello"></canvas>

<script>
    var canvas = document.getElementById('hello');
    var context = canvas.getContext('2d');

    var width = 500;
    var height = 350;

    context.clearRect(0, 0, width, height);
    context.fillStyle = 'purple';
    context.fillRect(0, 20, 400, 250);

    context.font = '30px Lucida Grande';
    context.fillStyle = 'white';
    context.fillText("Hello World", 20, 50);
</script>

```

## Example of a Ball using &lt;canvas&gt;

```html
<canvas id="tutorial" width="400" height="400"></canvas>

<script>
var canvas = document.getElementById('tutorial');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.closePath();
    ctx.stroke();
}
</script>
```

## Example of two moving Balls
```js
var x = 50;
var y = 50;
var dx = 1;
var dy = 1;

var x2 = 250;
var y2 = 125;
var dx2 = 0.75;
var dy2 = 1.25;

function displayFrame() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // display ball 1
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2, false);
        ctx.strokeStyle = '#bada55';
        ctx.closePath();
        ctx.stroke();

        // display ball 2
        ctx.beginPath();
        ctx.arc(x2, y2, 30, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'purple';
        ctx.closePath();
        ctx.stroke();
    }

    x = x + dx;
    y = y + dy;

    x2 = x2 + dx2;
    y2 = y2 + dy2;
    
    if (y < 0 || y > canvas.height) { // reverse
        dy = -dy;
    }

    if (y2 < 0 || y2 > canvas.height) { // reverse
        dy2 = -dy2;
    }
    // console.log(x, y, dx, dy);
}

var animationId;
function draw() {
    // animationId = setTimeout(draw, 100);
    animationId = requestAnimationFrame(draw, 100);
    displayFrame();
}


```