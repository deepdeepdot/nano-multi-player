var Wall = require('./Wall.js');

test("is (23,56) inside (20, 40, 600, 25)", () => {
  var wall = new Wall(20, 40, 600, 25, "red");
  expect(wall.isInside(23, 56)).toBe(true);
});

test("is (23,56) inside (20, 40, 600, 25)", () => {
  var wall = new Wall(20, 40, 600, 25, "red");
  expect(wall.isInside(20, 40)).toBe(true);
});

test("is (23,56) inside (20, 40, 600, 25)", () => {
  var wall = new Wall(20, 40, 600, 25, "red");
  expect(wall.isInside(620, 56)).toBe(false);
});

test("is (23,56) inside (20, 40, 600, 25)", () => {
  var wall = new Wall(20, 40, 600, 25, "red");
  expect(wall.isInside(619, 64)).toBe(true);
});
