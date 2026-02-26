import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Welcome from "./pages/Welcome";
import SignUP from "./pages/Signin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignUP />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food-details" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
