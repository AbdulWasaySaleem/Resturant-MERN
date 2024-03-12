import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FoodDetails from "./components/FoodDetails";
import FoodCatalog from "./components/FoodCatalog";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Faq from "./components/Faq";
import Edit from "./components/Admin/Edit";
import NoAccess from "./components/NoAccess";
import Test from "./components/Admin/Test";
import MainAdmin from "./components/Admin/MainAdmin";




function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {user?.isAdmin ? (
            <>
              <Route path="/adminpanel" element={<MainAdmin />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/test" element={<Test />} />
              
            </>
          ) : (
            <>
              <Route path="/create" element={<NoAccess />} />
              <Route path="/adminpanel" element={<NoAccess />} />
              <Route path="/edit/:id" element={<NoAccess />} />
            </>
          )}
          <Route path="/contact" element={<Contact />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/foods/:id" element={<FoodCatalog />} />
          <Route path="/foods" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
