import AllRestaurantCard from "../components/AllRestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card Compoentn with Mock Data", () => {
  render(<AllRestaurantCard restaurant={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
