import React, { useState } from "react";
import { HiMail, HiGift, HiBell, HiCheckCircle } from "react-icons/hi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const benefits = [
    { icon: HiGift, text: "Exclusive deals & discounts" },
    { icon: HiBell, text: "New menu alerts" },
    { icon: HiMail, text: "Weekly food inspiration" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 border-t border-gray-100">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
          {isSubscribed ? (
            <>
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiCheckCircle className="h-10 w-10 text-purple-600" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                Welcome to the Family! 🎉
              </h2>

              <p className="text-lg text-gray-600 mb-8 text-center">
                You're all set! Get ready for exclusive deals, tasty updates,
                and delicious surprises delivered straight to your inbox.
              </p>

              <div className="text-center">
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-md">
                  🎁 Watch for your welcome discount coming soon!
                </span>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Sign up to get mouthwatering updates, delicious deals, and
                weekly food inspo!
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full sm:w-2/3 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition duration-200"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <ul className="mt-10 grid gap-4 sm:grid-cols-3 text-center">
                {benefits.map(({ icon: Icon, text }, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center bg-purple-50 p-4 rounded-xl shadow-sm"
                  >
                    <Icon className="w-8 h-8 text-purple-600 mb-2" />
                    <span className="text-gray-700 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
