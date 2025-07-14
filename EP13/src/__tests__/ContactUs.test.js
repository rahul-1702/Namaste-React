import ContactUs from "../components/ContactUs";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Grouping Some Test Cases", () => {
  it("Checks Header Component Loads or not", () => {
    render(<ContactUs />);
  });

  it("Checks text 'Contact Us' present or not", () => {
    const text = screen.getByText("Contact Us");

    // Assertion
    expect(text).toBeInTheDocument();
  });

  describe("Nested Grouping of Test Cases", () => {
    test("Checks button present or not", () => {
      const button = screen.getByRole("button", { name: "Submit" });

      fireEvent.click(button);

      // Assertion
      expect(button).toBeInTheDocument();
    });

    test("Checks input elements present or not", () => {
      // Querying
      const inputs = screen.getAllByRole("textbox");

      const length = inputs.length;
      console.log("length : ", length);

      // Assertion
      // expect(length).toBe(4);
      expect(length).not.toBe(4);
    });

    test("Checks input elements present or not", () => {
      // Querying
      const inputs = screen.getByRole("textbox");

      const length = inputs.length;

      // Assertion
      expect(length).not.toBe(4);
    });
  });
});
