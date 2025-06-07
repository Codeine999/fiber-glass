import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import Mark from "../../public/assets/mark.png";

import Hero from "../../public/assets/header4.png";

const Header = () => {
  return (
    <div
      className="-mt-15 w-full h-[620px] bg-cover bg-center relative object-cover"
      style={{ backgroundImage: `url(${Hero.src})` }}
    >
      <div
        className="absolute inset-0 md:block hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="md:hidden block w-full h-[620px] bg-black opacity-30 absolute" />
      {/* <Image 
            src={Mark}
            alt="watermark"
            className="absolute top-0 left-0 w-full opacity-10 pointer-events-none select-none"
            style={{ maxWidth: '100%', height: 'auto' }}
        /> */}
      <div className="p-10 xl:px-28 relative">
        <div className="flex md:justify-start justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white md:text-[35px] text-[28px] mt-24"
          >
            เพชรอันดาไฟเบอร์กลาส
          </motion.h2>
        </div>
        <div className="flex md:justify-start justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mt-1 text-white whitespace-nowrap md:text-[24px] text-[22px]"
          >
            รับผลิตชิ้นงาน
            <span className="text-yellow-500">ไฟเบอร์กลาส</span>ตามแบบ
          </motion.h2>
        </div>

        <div className="flex md:justify-start justify-center">
          <div className="mt-6 text-[16px] xl:w-[400px] md:w-[350px] md:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-white shadow-lg"
            >
              รับผลิตชิ้นงานไฟเบอร์กลาสตามแบบ สำหรับงานราชการ วัด บริษัท
              ห้างร้าน และงานตกแต่ง เช่น โลโก้ โต๊ะ เก้าอี้ สระว่ายน้ำ ฯลฯ
              พร้อมผลิตตามความต้องการ
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="flex md:justify-start justify-center"
        >
          <Button className="md:mt-28 mt-34 bg-blue-900 hover:bg-blue-800 w-[180px] h-[44px] text-[16px]">
            ติดต่อเรา
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
