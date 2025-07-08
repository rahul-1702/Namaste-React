import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react";

test("Checks Header Component Loads or not", () => {
  render(<ContactUs />);
});

// test("Checks text 'Redux - Food Store' present or not", () => {
//   const text = screen.getByText("Redux - Food Store");

//   // Assertion
//   expect(text).toBeInTheDocument();
// });
