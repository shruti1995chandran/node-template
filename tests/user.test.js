const user = require("../endpoints/handler/userhandler");

test("string provided must exist in the list of names", () => {
  expect(user.userTestFuction1("Sam")).toBe(true);
});
