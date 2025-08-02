import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";

import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Loading from "./components/common/Loading.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import NotFound from "./pages/static/NotFound.jsx";

// Lazy-loaded Components
const Layout = lazy(() => import("./components/Layout"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const Create = lazy(() => import("./components/Admin/Create"));
const AllOrders = lazy(() => import("./components/Admin/AllOrders"));

// Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const Contact = lazy(() => import("./pages/static/Contact"));
const Faq = lazy(() => import("./pages/static/Faq"));
const NoAccess = lazy(() => import("./pages/static/NoAccess"));
const Menu = lazy(() => import("./pages/Menu"));
const FoodCatalog = lazy(() => import("./pages/FoodCatalog"));
const FoodDetails = lazy(() => import("./pages/FoodDetails"));
const MainAdmin = lazy(() => import("./pages/MainAdmin"));
const HomeAdmin = lazy(() => import("./pages/HomeAdmin"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Suspense fallback={<Loading />}>
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

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
