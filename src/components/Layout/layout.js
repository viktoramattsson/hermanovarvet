import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-[90px] w-full"></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
