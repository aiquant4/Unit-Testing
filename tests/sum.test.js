// sum.js

// tests/sum.test.js
const sum = require("../src/sum");


// Test case: Should return NaN when one or both inputs are not numbers
test("returns NaN when one or both inputs are not numbers", () => {
  expect(sum(1, "a")).toBeNaN();
  expect(sum("b", 2)).toBeNaN();
  expect(sum("c", "d")).toBeNaN();
});
// sum.test.js

// Test case: Should throw an error when one or both inputs are not provided
test("throws an error when one or both inputs are not provided", () => {
  expect(() => {
    sum();
  }).toThrow("Both inputs are required");

  expect(() => {
    sum(1);
  }).toThrow("Both inputs are required");
});
// sum.test.js

// Test case: Should return NaN when adding positive infinity to negative infinity
test("returns NaN when adding positive infinity to negative infinity", () => {
  expect(sum(Infinity, -Infinity)).toBeNaN();
});
