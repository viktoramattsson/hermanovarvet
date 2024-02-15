import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../../public/logo.png';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';

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
      <nav className="fixed w-full h-24 shadow-xl bg-white rounded-b-lg z-10">
        <div className="flex justify-between items-center h-full w-full px-8 2xl: px16">
          <Link href="/">
            <Image src={logo} alt="logo" width={120} height={120} />
          </Link>
          <div className="hidden lg:flex">
            <ul className="hidden lg:flex">
              <Link href="/register">
                <li className="ml-10 hover:border-b text-l">Anmälan</li>
              </Link>
              <li
                className="ml-10 hover:border-b text-l cursor-pointer"
                onClick={toggleLoppDropdown}
              >
                Lopp
                {loppDropdownOpen && (
                  <ul className="absolute mt-2 bg-white border border-gray-300">
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/hermanovarvet">Hermanövarvet</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/lopp2">Hermanövarvet Trail</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200">
                      <Link href="/lopp3">Hermanövarvet Barnloppet</Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link href="/afterRun">
                <li className="ml-10 hover:border-b text-l">After Run</li>
              </Link>
              <Link href="/find">
                <li className="ml-10 hover:border-b text-l">Hitta hit</li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 hover:border-b text-l">Kontakt</li>
              </Link>
              <Link href="/terms">
                <li className="ml-10 hover:border-b text-l">
                  Ammlänna villkor
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={35} />
          </div>
        </div>
        <div
          className={`fixed top-0 w-[75%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={35} />
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
                      <Link href="/trail">Hermanövarvet Trail</Link>
                    </li>
                    <li
                      onClick={() => {
                        setMenuOpen(false);
                        setLoppDropdownOpen(false);
                      }}
                      className="pl-3 py-3 hover:bg-gray-200"
                    >
                      <Link href="/barn">Barnloppet</Link>
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

              <Link href={'/contact'}>
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
          <div className="flex flex-col items-center pt-10">
            <div className="flex flex-row justify-between w-24 mb-4">
              <AiOutlineFacebook size={40} className="cursor-pointer" />
              <AiOutlineInstagram size={40} className="cursor-pointer" />
            </div>

            <div>
              <Link href="/">
                <Image src={logo} alt="logo" width={100} height={100} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
