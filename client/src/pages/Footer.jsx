import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center mt-auto">
      <div className="flex justify-center items-center space-x-4">
        <a href="https://www.facebook.com" className="text-xl">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" className="text-xl">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" className="text-xl">
          <FaTwitter />
        </a>
      </div>
      <p className="mt-4">All rights reserved BytesSync Studios &copy; 2022-2024</p>
    </footer>
  );
};

export default Footer;
