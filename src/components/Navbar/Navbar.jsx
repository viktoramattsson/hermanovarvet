import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SlMenu, SlClose } from 'react-icons/sl';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loppDropdownOpen, setLoppDropdownOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    setLoppDropdownOpen(false);
  };

  const toggleLoppDropdown = () => {
    setLoppDropdownOpen(!loppDropdownOpen);
  };

  return (
    <>
      <nav className="fixed w-full h-20 md:h-24 shadow-xl bg-white z-10 max-w-[2500px] mx-auto">
        <div className="flex justify-between items-center h-full w-full px-8 2xl: px16">
          <Link href="/">
            <Image
              src="https://viktoramattsson.github.io/images/logo.png"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
          <div className="hidden lg:flex">
            <ul className="hidden lg:flex">
              <Link href="/register" className="flex items-center">
                <li className="flext hover:border-b text-l">Anmälan</li>
              </Link>
              <li
                className="ml-10 hover:border-b text-l cursor-pointer flex items-center"
                onClick={toggleLoppDropdown}
              >
                Lopp
                {loppDropdownOpen && (
                  <ul className="absolute mt-40 ml-18 bg-white border border-gray-300">
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/hermanovarvet">Hermanövarvet</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/hermanoTrail">Hermanövarvet Trail</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/barnLopp">Hermanövarvet Barnloppet</Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link href="/afterRun" className="flex items-center">
                <li className="ml-10 hover:border-b text-l">After Run</li>
              </Link>
              <Link href="/find" className="flex items-center">
                <li className="ml-10 hover:border-b text-l">Hitta hit</li>
              </Link>
              <Link
                href="mailto:info@hemanovarvet.se"
                className="flex items-center"
              >
                <li className="ml-10 hover:border-b text-l">Kontakt</li>
              </Link>
              <Link href="/terms" className="flex items-center">
                <li className="ml-10 hover:border-b text-l">
                  Ammlänna villkor
                </li>
              </Link>

              <li>
                <a href="https://www.facebook.com/hermanovarvet/">
                  <FaFacebookSquare
                    size={35}
                    className="cursor-pointer ml-10 text-blue-600"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hermanovarvet/">
                  <FaInstagramSquare
                    size={35}
                    className="cursor-pointer mx-6 text-orange-600"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
            <SlMenu size={35} />
          </div>
        </div>
        <div
          className={`fixed top-0 w-[75%] max-w-96 lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer pt-0">
              <SlClose size={40} />
            </div>
          </div>
          <div className="flex col py-4 text-xl">
            <ul>
              <Link href={'/'}>
                <li
                  onClick={() => {
                    setMenuOpen(false);
                    setLoppDropdownOpen(false);
                  }}
                  className="py-4 cursor-pointer"
                >
                  Hem
                </li>
              </Link>
              <Link href={'/register'}>
                <li
                  onClick={() => {
                    setMenuOpen(false);
                    setLoppDropdownOpen(false);
                  }}
                  className="py-4 cursor-pointer"
                >
                  Anmälan
                </li>
              </Link>

              <li onClick={toggleLoppDropdown} className="py-4 cursor-pointer">
                Lopp
                {loppDropdownOpen && (
                  <ul className=" mt-2">
                    <li
                      onClick={() => {
                        setMenuOpen(false);
                        setLoppDropdownOpen(false);
                      }}
                      className="pl-3 py-3 hover:bg-gray-200"
                    >
                      <Link href="/hermanovarvet">Hermanövarvet</Link>
                    </li>
                    <li
                      onClick={() => {
                        setMenuOpen(false);
                        setLoppDropdownOpen(false);
                      }}
                      className="pl-3 py-3 hover:bg-gray-200"
                    >
                      <Link href="/hermanoTrail">Hermanövarvet Trail</Link>
                    </li>
                    <li
                      onClick={() => {
                        setMenuOpen(false);
                        setLoppDropdownOpen(false);
                      }}
                      className="pl-3 py-3 hover:bg-gray-200"
                    >
                      <Link href="/barnLopp">Barnlopp</Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link href={'/afterRun'}>
                <li
                  onClick={() => {
                    setMenuOpen(false);
                    setLoppDropdownOpen(false);
                  }}
                  className="py-4 cursor-pointer"
                >
                  After Run
                </li>
              </Link>
              <Link href={'/find'}>
                <li
                  onClick={() => {
                    setMenuOpen(false);
                    setLoppDropdownOpen(false);
                  }}
                  className="py-4 cursor-pointer"
                >
                  Hitta hit
                </li>
              </Link>

              <Link href="mailto:info@hemanovarvet.se">
                <li
                  onClick={() => {
                    setMenuOpen(false);
                    setLoppDropdownOpen(false);
                  }}
                  className="py-4 cursor-pointer"
                >
                  Kontakt
                </li>
              </Link>
              <Link href={'/terms'}>
                <li
                  onClick={() => {
                    setMenuOpen(false);
                    setLoppDropdownOpen(false);
                  }}
                  className="py-4 cursor-pointer"
                >
                  Allmänna villkor
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center pt-0">
            <div className="flex flex-row ">
              <a href="https://www.facebook.com/hermanovarvet/">
                <FaFacebookSquare
                  size={50}
                  className="cursor-pointer text-blue-600 mx-5"
                />
              </a>
              <a href="https://www.instagram.com/hermanovarvet/">
                <FaInstagramSquare
                  size={50}
                  className="cursor-pointer text-orange-600 mx-5"
                />
              </a>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="https://viktoramattsson.github.io/images/logo.png"
                  alt="logo"
                  width={120}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
