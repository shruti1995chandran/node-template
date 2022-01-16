const { userTestFuction1 } = require("../userHandler");

test("string provided must exist in the list of names", () => {
  expect(userTestFuction1("Sam")).toBe(true);
});
