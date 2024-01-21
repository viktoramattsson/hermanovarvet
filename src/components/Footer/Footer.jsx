import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="h-24 bg-hv-yellow flex items-center justify-center">
      <AiOutlineFacebook size={40} className="cursor-pointer mx-2" />
      <AiOutlineInstagram size={40} className="cursor-pointer mx-2" />
    </footer>
  );
};

export default Footer;
