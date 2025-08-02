import { lazy, Suspense } from "react";
import Hero from "../components/Home/Hero";
import Newsletter from "../components/Home/Newsletter";
import Features from "../components/Home/Features";
import Loading from "../components/common/Loading";

const Foods = lazy(() => import("../components/Home/Foods"));

const Home = () => {
  return (
    <div className="relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>
        <section className="relative">
          <Features />
        </section>

        {/* Foods Section */}
        <Suspense fallback={<Loading />}>
          <section>
            <Foods />
          </section>
        </Suspense>

        {/* Newsletter Section */}
        <section className="relative">
          <Newsletter />
        </section>
      </div>
    </div>
  );
};

export default Home;
