import Sum from "../components/Sum";
import "@testing-library/jest-dom";

test("Testing Sum is 9 or not", () => {
  const result = Sum(5, 4);

  // Assertion
  expect(result).toBe(9);
});
