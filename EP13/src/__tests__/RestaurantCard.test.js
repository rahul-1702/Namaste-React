import { afterEach, beforeEach, afterAll, beforeAll } from "node:test";
import AllRestaurantCard from "../components/AllRestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render } from "@testing-library/react";

// for async operation use act function, like if component used fetch inside
/*
  it("Should render Restaurant Card Compoentn with Mock Data", async () => {
    await act(async () => {
      render(<AllRestaurantCard restaurant={MOCK_DATA} />);
    })
  }
*/

// create custom dom APIs like fetch
/* 
  global.fetch = jest.fn(() => {
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA)
    })
  })
*/

it("Should render Restaurant Card Compoentn with Mock Data", () => {
  // to print before all testcases
  beforeAll(() => {
    console.log("Before testcase");
  });
  // to print before each testcase
  beforeEach(() => {
    console.log("Before Each");
  });
  // to print after all testcases
  afterAll(() => {
    console.log("After testcases");
  });
  // to print after each testcase
  afterEach(() => {
    console.log("After each");
  });

  // render(<AllRestaurantCard restaurant={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBe(true);
});
