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

  beforeAll(() => {
    console.log("Restaurant Card Before All ...");
  })

  beforeEach(() => {
    console.log("Restaurant Card Before Each ...");
  })

  afterAll(() => {
    console.log("Restaurant Card After All ...");
  })

  afterEach(() => {
    console.log("Restaurant Card After Each ...");
  })

  render(<AllRestaurantCard restaurant={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBe(true);
});
