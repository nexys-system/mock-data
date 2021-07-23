import * as Names from "./names";

test("check data consistency", () => {
  expect(Array.isArray(Names.female)).toEqual(true);
  expect(Array.isArray(Names.male)).toEqual(true);
});
