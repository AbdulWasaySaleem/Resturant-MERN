import { Suspense, lazy } from "react";
import { foodTypes } from "../data/data.js";
import Loading from "../components/common/Loading.jsx";
const FoodCardGrid = lazy(() => import("../FoodCardGrid.jsx"));

const Menu = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 lg:py-20"
      id="section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<Loading/>}>
          <FoodCardGrid foodTypes={foodTypes} />
        </Suspense>
      </div>
    </section>
  );
};

export default Menu;
