import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Create from "./components/Create";
import FoodDetails from "./components/FoodDetails";
import FoodCatalog from "./components/FoodCatalog";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Create />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/foods/:id" element={<FoodCatalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
