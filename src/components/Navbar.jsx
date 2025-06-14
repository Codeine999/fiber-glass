"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

const menuHamburger = [
  {
    name: "หน้าแรก",
    url: "/",
  },
  {
    name: "บริการ",
    url: "#service",
  },
  {
    name: "เกี่ยวกับเรา",
    url: "#about",
  },
  {
    name: "งานที่ผ่านมา",
    url: "#album",
  },
  {
    name: "บทความ",
    url: "/blogs",
  },
  {
    name: "ติดต่อเรา",
    url: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div
  className={`sticky  top-0 left-0 right-0 w-full h-[60px] z-999 transition-all duration-500 ${
    scrolled
      ? "h-[62px] bg-gray-900 bg-opacity-95 shadow-md px-1 d"
      : "bg-transparent"
  }`}
>
      <div className="flex justify-between xl:px-28 md:p-4 md:px-10 px-5">
        <div className="md:mt-0 mt-4 md:px-0 px-2">
          <h1 className="text-white text-[20px]">FG</h1>
        </div>
        {/* เมนู desktop */}
        <div className="md:block hidden">
          <ul className="text-white flex gap-4 text-[15px]">
            <li>
              <Link href="/">หน้าแรก</Link>
            </li>
            <li>
              <a href="#service">บริการ</a>
            </li>
            <li>
              <a href="#about">เกี่ยวกับเรา</a>
            </li>
            <li>
              <a href="#album">งานที่ผ่านมา</a>
            </li>
            <li>
              <a href="/blog">บทความ</a>
            </li>
            <li>
              <a href="#contact">ติดต่อเรา</a>
            </li>
          </ul>
        </div>

        {/* hamburger + เมนูมือถือ */}
        <div className="md:hidden block relative mt-2 text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="absolute top-full left-0 bg-gray-800 bg-opacity-95 w-full z-50 p-4"
        >
          <ul className="text-black flex flex-col text-center gap-4">
            {menuHamburger.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className="text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
