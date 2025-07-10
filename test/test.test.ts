// test/test.test.ts
import {add} from "../src/calculate"

describe("Sum of 2 numbers", () => {
  it("should return addition of 2 integers", () => {
    const result = add(2, 4);
      expect(result).toBe(6);
      expect(result).not.toEqual(1);
  });

  test("should return 3 for 1 + 2", () => {
    expect(add(1, 2)).toBe(3);
  });
});
