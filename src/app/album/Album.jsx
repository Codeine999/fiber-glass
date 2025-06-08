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
    <div className="md:mt-14 mt-10 overflow-hidden">
      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        initialSlide={0}
        centeredSlides={false}
        slidesPerView={3}
        spaceBetween={80}
        speed={800}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: -5 },
          1024: { slidesPerView: 3, spaceBetween: -10 },
          1400: { slidesPerView: 3, spaceBetween: 5 },
        }}
      >
        {album.map((item, index) => (
          <SwiperSlide key={index} className="md:px-4 px-2 hover:scale-102">
            <motion.div 
                  initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }} 
      transition={{ duration: 0.2 }}
            className="shadow-md w-full md:h-[440px] h-[450px] mb-50 rounded-sm">
              <Image
                src={item.image[0] || "/assets/bts.png" }
                alt={item.name}
                width={500}
                height={300}
                className="w-full h-[320px] p-2 object-cover rounded-xl"
              />

              <div className="px-3 flex-col flex gap-1">
                <h2 className="text-[20px]">{item.name}</h2>
                <p className="w-[260px] text-[13px] text-gray-600">
                  {cutText(item.detail, maxLength())}
                </p>
              </div>

              <div className="mt-2.5 flex justify-between px-4 items-center">
                <div className="flex gap-2 ">
                  <Tag className="w-4 h-4 text-[#0d1652]" />
                  <h1 className="text-[10px] text-[#0d1652]">
                    ผลิตโดยเพชรอันดาไฟเบอร์กลาส
                  </h1>
                </div>

                <Link href={`/album/${item.id}`}>
                  <Button
                    className="md:mt-0 mt-1 md:w-16 md:h-6 w-18 h-6.5 text-[10px] bg-blue-900 hover:bg-blue-700 
                      cursor-pointer"
                  >
                    ดูรายละเอียด
                  </Button>
                </Link>
              </div>
            </motion.div >
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
