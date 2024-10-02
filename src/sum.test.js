import sum from "./sum";

test("testing sum funnction", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(4);
  expect(sum(1, 2)).not.toBe(5);
  expect(sum(1, 2)).not.toBe(6);
  expect(sum(10, 20)).toBe(30);
  expect(sum(10, 20)).not.toBe(31);
});
