import Sum from "../components/Sum";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Testing sum is 9 or not", () => {
  const result = Sum(5, 4);

  // Assertion
  expect(result).toBe(9);
});

// test("Checks Header Component Loads or not", () => {
//   render(<Header />);
// });

test("Checks text 'Redux - Food Store' present or not", () => {
  const text = screen.getByText("Redux - Food Store");

  // Assertion
  expect(text).toBeInTheDocument();
});
