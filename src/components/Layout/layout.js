import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="max-w-[2500px] mx-auto">
      <Navbar />
      <div className="h-20 w-full"></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
