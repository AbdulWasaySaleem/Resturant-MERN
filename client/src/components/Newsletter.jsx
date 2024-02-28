import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest updates, offers, and news delivered straight to your inbox.
          </p>
        </div>
        <form className="mt-8 max-w-lg mx-auto flex flex-col items-center justify-center" action="#" method="POST">
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" required className="block w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400" placeholder="Enter your email address" />
            <button type="submit" className="mt-4 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
