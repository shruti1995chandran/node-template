const user = require("./userHandler");

test("string provided must exist in the list of names", () => {
  expect(user.userTestFuction1("Sam")).toBe(true);
});
