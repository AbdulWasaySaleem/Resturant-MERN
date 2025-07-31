import { HiClock, HiStar, HiTruck } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      icon: HiClock,
      image: "/images/delivery-is-always-on-time-vector.webp",
      title: "Lightning Fast Delivery",
      description:
        "Get your favorite meals delivered in under 30 minutes. Hot, fresh, and always on time.",
    },
    {
      icon: HiStar,
      image: `/images/delivery-man-is-friendly-and-social-vector (1).webp`,
      title: "Premium Quality",
      description:
        "Hand-picked ingredients and expert chefs ensuring every bite is a delightful experience.",
    },
    {
      icon: HiTruck,
      image: `/images/delivery-man-is-friendly-and-social-vector.webp`,
      title: "Reliable Service",
      description:
        "Our dedicated delivery team ensures your food arrives fresh with a smile, every time.",
    },
  ];

  return (
    <section className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering not just food, but an exceptional
            experience that keeps you coming back for more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span className="text-sm">Learn more</span>
                  <svg
                    className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
