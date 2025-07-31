import Hero from "../components/Home/Hero";
import Foods from "../components/Home/Foods";
import Newsletter from "../components/Home/Newsletter";
import Features from "../components/Home/Features";

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
        <section className="relative">
          <Foods />
        </section>

        {/* Newsletter Section */}
        <section className="relative">
          <Newsletter />
        </section>
      </div>
    </div>
  );
};

export default Home;
