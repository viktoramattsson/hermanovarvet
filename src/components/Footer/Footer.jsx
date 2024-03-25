import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="h-24 bg-hv-yellow flex items-center justify-center">
      <a href="https://www.facebook.com/hermanovarvet/">
        <FaFacebookSquare
          size={35}
          className="cursor-pointer ml-10 text-blue-600"
        />
      </a>
      <a href="https://www.instagram.com/hermanovarvet/">
        <FaInstagramSquare
          size={35}
          className="cursor-pointer mx-6 text-orange-600"
        />
      </a>
    </footer>
  );
};

export default Footer;
