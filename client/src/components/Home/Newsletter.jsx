import React, { useState } from "react";
import { HiMail, HiGift, HiBell, HiCheckCircle } from "react-icons/hi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
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

  if (isSubscribed) {
    return (
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 border-t border-gray-100">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiCheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Family! 🎉
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              You're all set! Get ready for exclusive deals, tasty updates, and
              delicious surprises delivered straight to your inbox.
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              🎁 Watch for your welcome discount coming soon!
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Newsletter;
