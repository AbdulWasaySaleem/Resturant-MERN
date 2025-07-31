import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./components/ProtectedRoute";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ScrollToTop from "./components/common/ScrollToTop";
import Create from "./components/Admin/Create";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Contact from "./pages/static/Contact";
import Faq from "./pages/static/Faq";
import NoAccess from "./pages/static/NoAccess";
import Menu from "./pages/Menu";
import HomeAdmin from "./pages/HomeAdmin";
import MainAdmin from "./pages/MainAdmin";
import FoodCatalog from "./pages/FoodCatalog";
import FoodDetails from "./pages/FoodDetails";
import AllOrders from "./components/Admin/AllOrders";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/foods/:id" element={<FoodCatalog />} />
          <Route path="/foods" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin Protected Routes */}
          <Route
            path="/adminpanel"
            element={
              <ProtectedRoute adminOnly>
                <MainAdmin />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomeAdmin />} />
            <Route path="create" element={<Create />} />
            <Route path="all-orders" element={<AllOrders />} />
          </Route>

          {/* No Access Page */}
          <Route path="/noaccess" element={<NoAccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
