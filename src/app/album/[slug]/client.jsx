"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

import Navbar2 from "@/components/Navbar2";
import Header from "../../../../public/assets/header4.png";
import { album } from "@/data";
import { 
    ChevronLeft,
    ChevronRight, 
    Layers, 
  } from "lucide-react";
import { EndPoint } from "@/components/Components"
import { Button } from "@/components/ui/button";



const Page = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeScroll, setActiveScroll] = useState(0);

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
      ? 20
      : windowWidth < 1000
      ? 40
      : windowWidth <= 1100
      ? 40
      : 40;

  const cutText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "..";

  if (!data) return <div className="h-screen"><Navbar2 /><p className="p-10">ไม่พบข้อมูลอัลบั้ม</p></div>;

  return (
    <div className="w-full">
      <Navbar2 />
      <div>
        <div className="relative md:h-[260px] h-[200px]">
          <Image
            src={Header}
            alt="Header"
            fill
            className="-mt-15 absolute object-cover"
          />

          <div className="-mt-15 absolute md:h-[260px] h-[200px] inset-0 bg-black opacity-50" />

          <div className="md:mt-18 mt-8 absolute inset-0 flex justify-center">
            <p className="text-white text-[30px]">ผลงานที่ผ่านมา</p>
          </div>
        </div>

        <div className="md:px-10 md:-mt-10 -mt-12">
          <div className="flex flex-col lg:flex-row justify-center md:items-start xl:gap-28 lg:gap-4">
            <div className="relative lg:max-w-[550px] w-full flex-shrink-0">
              <button className="absolute top-1/2 md:-left-6 -left-1  transform -translate-y-1/2 z-10 text-blue-600">
                <ChevronLeft className="w-8 h-8 text-gray-300" />
              </button>
              <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                spaceBetween={10}
                className="w-full"
                onSlideChange={(swiper) => setActiveScroll(swiper.realIndex)}
              >
               {data.image.map((item, index) => (
                  <SwiperSlide key={index} className="md:px-6 px-9">
                    <Image
                    src={item}
                    alt={`image ${index + 1}`}
                    className="md:w-full md:h-[440px] w-[370px] h-[390px] rounded-sm object-cover mt-8"
                    />
                  </SwiperSlide>
               ))}
              </Swiper>

              <button className="absolute top-1/2 md:-right-6 -right-0.5  transform -translate-y-1/2 z-10 text-blue-600">
                <ChevronRight className="w-8 h-8 text-gray-300" />
              </button>
            </div>

            <div className="p-6 lg:px-0 md:px-30 flex flex-col gap-2">
              <p className="text-[30px]">ชื่องาน {data.name}</p>
              <p className="text-[14px] text-gray-600">11/10/2024</p>

              <div className="mt-2 flex">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  spaceBetween={-120}
                  watchSlidesProgress
                  className="mt-4 w-full max-w-md"
                >
                  {data.image.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`w-[45px] h-[45px] overflow-hidden rounded-md transition-all
                        cursor-pointer ${
                          activeScroll === index
                            ? "border-1 border-blue-900"
                            : "border-1 border-gray-100"
                        }`}
                      >
                        <Image
                          src={item}
                         alt={`image ${index + 1} `}
                         width={100}
                         height={100}
                        className="w-30 h-30 rounded-md object-cover transition-all"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="mt-8">
                <div className="md:w-[400px] w-full">
                  <div className="grid grid-cols-1 gap-2.5">
                    <a href="https://line.me/ti/p/9EhMYc_54F" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-900 hover:bg-blue-700 w-full h-[40px] shadow-md">
                        ติดต่อเรา
                      </Button>                   
                    </a>

                    <Button className="bg-gray-200 hover:bg-gray-300 w-full text-black h-[40px] shadow-xs shadow-gray-400">
                      ขอใบเสนอราคา <Layers className="!h-4" />
                    </Button>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
          

          <EndPoint />

          <div className="mt-14 xl:px-20 md:px-0 px-6">
            <p className="text-[25px]">งานที่คล้ายกัน</p>

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
                0: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: -10 },
              }}
            >
              {album.map((item, index) => (
                <SwiperSlide key={index} className="mt-10 xl:px-10 mb-56">
                  <Link href={`/album/${item.id}`}>
                    <div className="w-full md:h-[250px] h-[200px] rounded-sm">
                      <Image
                        src={item.image[0] || "/assets/bts.png" }
                        alt={`image ${index + 1} `}
                        className="w-full md:h-[250px] h-[200px] p-2 object-cover rounded-xl"
                      />
                      <div className="px-2">
                        <h2 className="text-[16px]">{cutText(item.name, maxLength(windowWidth))}</h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
