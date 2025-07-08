import { store } from "./Redux/Store.ts";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";

it("Should render Header component", () => {
  render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>
  );
});
