'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Hamburger from 'hamburger-react'



const Navbar = () => {
    const [isOpen, setOpen] = useState(false)


  return (
  <div 
    className={`sticky top-0 w-full h-[60px] z-50  transition-colors duration-300 `}
  >
  <div className="flex justify-between xl:px-28 md:p-4 md:px-10 px-5">
    <div className='md:mt-0 mt-4 md:px-0 px-2'>
      <h1 className="text-white text-[20px]">Fiber</h1>
    </div>
    {/* เมนู desktop */}
    <div className="md:block hidden">
      <ul className="text-white flex gap-4 text-[15px]">
        <li><Link href="/">หน้าแรก</Link></li>
        <li><a href="#service">บริการ</a></li>
        <li><a href="#about">เกี่ยวกับเรา</a></li>
        <li><a href="#album">งานที่ผ่านมา</a></li>
        <li><a href="/blog">บทความ</a></li>
        <li><a href="#contact">ติดต่อเรา</a></li>
      </ul>
    </div>

    {/* hamburger + เมนูมือถือ */}
    <div className="md:hidden block relative mt-2 text-white">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    
    </div>
  </div>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white w-full z-50 p-4 px-">
          <ul className="text-black flex flex-col gap-4">
            <li><a href="/">หน้าแรก</a></li>
            <li><a href="#service">บริการ</a></li>
            <li><a href="#about">เกี่ยวกับเรา</a></li>
            <li><a href="#album">งานที่ผ่านมา</a></li>
            <li><a href="/blog">บทความ</a></li>
            <li><a href="#contact">ติดต่อเรา</a></li>
          </ul>
        </div>
      )}
</div>
  );
};

export default Navbar;
