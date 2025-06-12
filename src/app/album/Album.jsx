"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { album } from "@/data";
import { Button } from "../../components/ui/button";
import { Tag } from "lucide-react";

export default function Slider() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const maxLength = () =>
    windowWidth < 768
      ? 86
      : windowWidth < 1000
        ? 86
        : windowWidth <= 1100
          ? 86
          : 86;

  const cutText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "..";

  return (
    <div className="md:mt-14 mt-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {album.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="xl:px-4 px-2 hover:scale-102">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="shadow-md w-full h-[436px] mb-8 rounded-sm"
            >
              <Link href={`/album/${item.id}`}>
                <Image
                  src={item.image[0] || "/assets/bts.png"}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="w-full h-[340px] p-2 object-cover rounded-xl"
                />
              </Link>

              <div className="px-3 py-1 flex-col flex gap-1">
                <h2 className="text-[20px]">{item.name}</h2>
              </div>

              <div className="mt-1 flex justify-between px-4 items-center">
                <div className="flex gap-2 ">
                  <Tag className="w-4 h-4 text-[#0d1652]" />
                  <h1 className="text-[10px] text-[#0d1652]">
                    ผลิตโดยเพชรอันดาไฟเบอร์กลาส
                  </h1>
                </div>

                <Link href={`/album/${item.id}`}>
                  <Button
                    className="md:mt-0 mt-1 md:w-20 md:h-7 w-22 h-7 text-[10px] bg-blue-900 hover:bg-blue-700 
                      cursor-pointer"
                  >
                    ดูรายละเอียด
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}

      </div>
      <div className="flex justify-center md:py-16 py-10">
        <button
          onClick={handleLoadMore}
          className="text-lg  px-6 py-2 shadow-sm rounded-2xl">
          แสดงเพิ่มเติม
        </button>
      </div>
    </div>
  );
}
