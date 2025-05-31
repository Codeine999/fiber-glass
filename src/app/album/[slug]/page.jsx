"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
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

const Page = () => {
  const { slug } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeScroll, setActiveScroll] = useState(0);

  const swiperRef = useRef(null);

  const data = album.find((item) => item.id === slug);

  if (!data) return <div>ไม่พบข้อมูลอัลบั้มนี้</div>;

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
              <button className="absolute top-1/2 md:-left-6 -left-0  transform -translate-y-1/2 z-10 text-blue-600">
                <ChevronLeft className="w-8 h-8 text-gray-300" />
              </button>
              <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                spaceBetween={10}
                className="md:w-[450px] w-[400px]"
                onSlideChange={(swiper) => setActiveScroll(swiper.realIndex)}
              >
                {album.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={item.image}
                      alt={data.id}
                      className="w-full h-[440px] rounded-sm object-cover mt-8"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="absolute top-1/2 md:-right-6 -right-0  transform -translate-y-1/2 z-10 text-blue-600">
                <ChevronRight className="w-8 h-8 text-gray-300" />
              </button>
            </div>

            <div className="p-6 lg:px-0 md:px-30 flex flex-col gap-2">
              <p className="text-[30px]">งาน : {data.name}</p>
              <p className="text-[14px] text-gray-600">11/10/2024</p>
              <p className="text-[16px] px-2 md:w-[330px] text-gray-800">{data.detail}</p>
              

              <div className="mt-21 flex">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  spaceBetween={-90}
                  watchSlidesProgress
                  className="mt-4 w-full max-w-md"
                >
                  {album.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`w-[30px] h-[30px] overflow-hidden rounded-md border transition-all
                        cursor-pointer ${
                          activeScroll === index
                            ? "border-2 border-gray-600"
                            : ""
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={data.id}
                          className="w-30 h-30 rounded-md object-cover border border-gray-300 hover:border-red-500 transition-all"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

                <div className="mt-8">
                  <div className="md:w-[400px] w-full">
                <div className="grid grid-cols-1 gap-2.5">
                    <Button className="bg-blue-900 w-full h-[40px] shadow-md">
                      ติดต่อเรา
                    </Button>

                    <Button className="bg-gray-200 w-full text-black h-[40px] shadow-xs shadow-gray-400">
                      ขอใบเสนอราคา <Layers className="!h-4" />
                    </Button>
                    
                  </div>

                </div>
              </div>

            </div>
          </div>
          

          <EndPoint />

          <div className="mt-14 xl:px-20 md:px-0 px-10">
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
                        src={item.image}
                        alt={item.name}
                        className="w-full md:h-[250px] h-[200px] p-2 object-cover rounded-xl"
                      />
                      <div className="px-3">
                        <h2 className="text-[20px]">{item.name}</h2>
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
