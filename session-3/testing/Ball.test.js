const Ball = require('./Ball');

test('update position from (10,10), speed (1,1) to be (11,11)', () => {
    let ball = new Ball(10, 10, 1, 1);
    const width = 200;
    const height = 50;

    ball.updatePosition(width, height);
    expect(ball.x).toBe(11);
    expect(ball.y).toBe(11);
});

test("update position from (10,10), speed (1,2) to be (11,12) ", () => {
  let ball = new Ball(10, 10, 1, 2);
  const width = 200;
  const height = 50;

  ball.updatePosition(width, height);
  expect(ball.x).toBe(11);
  expect(ball.y).toBe(12);
});

// Boundary conditions
test("update position from (98,98), speed (1,1) to be (99,99)", () => {
  let ball = new Ball(98, 98, 1, 1);
  const width = 100;
  const height = 100;

  ball.updatePosition(width, height);
  expect(ball.x).toBe(99);
  expect(ball.y).toBe(99);
});

test("update position from (99,99), speed (1,1) to be (98, 98)", () => {
  let ball = new Ball(99, 99, 1, 1);
  const width = 100;
  const height = 100;

  ball.updatePosition(width, height);

  expect(ball.x).toBe(98);
  expect(ball.y).toBe(98);
  expect(ball.dx).toBe(-1);
  expect(ball.dy).toBe(-1);
});
