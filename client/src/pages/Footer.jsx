import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from 'react-icons/hi';
import { toast } from 'react-toastify';

const Footer = () => {
   const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // fake delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setEmail("");
      toast.success("Subscribed successfully!");
    } catch (error) {
      toast.error("Failed to subscribe.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: HiMail, text: "Get exclusive offers" },
    { icon: HiMail, text: "Stay updated with new items" },
    { icon: HiMail, text: "Early access to deals" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 border-t border-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10 z-0"></div>
      <div className="absolute top-16 left-12 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-12 w-48 h-48 bg-purple-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            📧 Stay Connected
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Never Miss a
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Delicious Deal</span>
          </h2>
          <p className="text-lg text-gray-600">
            Be the first to know about new dishes, secret menus, and delicious news.
          </p>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <b.icon className="text-white h-5 w-5" />
                </div>
                <p className="text-gray-700 text-base font-medium">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>10K+ subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>No spam</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 sm:p-10">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HiMail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Get Started Today</h3>
            <p className="text-sm text-gray-600">Join thousands of happy food lovers!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            By subscribing, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white text-white flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">2,847</span> people subscribed this week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
