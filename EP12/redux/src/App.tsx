import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.tsx';
import RestaurantDetail from "./components/RestaurantDetail.tsx";
import CartPage from "./components/CartPage.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
