import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header atc={true} />
        <div className={'from-gray-900 to-cyan-950 bg-gradient-to-br text-white'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
