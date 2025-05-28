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

import Header from "../../../../public/assets/header4.png";
import { album } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Page = () => {
  const { slug } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeScroll, setActiveScroll] = useState(0);

  const swiperRef = useRef(null);

  const data = album.find((item) => item.id === slug);

  if (!data) return <div>ไม่พบข้อมูลอัลบั้มนี้</div>;

  return (
    <div className="w-full mb-30">
      <div className="relative h-[300px]">
        <Image
          src={Header}
          alt="Header"
          fill
          style={{ objectFit: "cover" }}
          className="-mt-15 absolute"
        />

        <div className="-mt-15 absolute h-[300px] inset-0 bg-black opacity-50" />

        <div className="mt-18 absolute inset-0 flex justify-center">
          <p className="text-white text-[30px]">ผลงานที่ผ่านมา</p>
        </div>
      </div>

        <div className="px-6">
    <div
        className="-mt-5 flex flex-col md:flex-row justify-center md:items-start xl:gap-28
        lg:gap-12 md:gap-8"
    >
        <div className="relative max-w-[500px] w-full flex-shrink-0">
          <button className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 text-blue-600">
            <ChevronLeft className="w-8 h-8 text-gray-300" />
          </button>
          <Swiper
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            spaceBetween={10}
            className="w-[360px] "
            onSlideChange={(swiper) => setActiveScroll(swiper.realIndex)}
          >
            {album.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={data.id}
                  className="w-[400px] h-[440px] rounded object-cover mt-8"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 text-blue-600">
            <ChevronRight className="w-8 h-8 text-gray-300" />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <p className="text-[30px]">งาน : {data.name}</p>
          <p className="text-[14px] text-gray-600">11/10/2024</p>
          <p className="text-[16px] md:w-[330px]">{data.detail}</p>

          <div className="mt-54 flex">
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
                      activeScroll === index ? "border-2 border-gray-600" : ""
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
        </div>
      </div>



      <div className="mt-26 md:px-20">
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
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: -20 },
          }}
        >
          {album.map((item, index) => (
            <SwiperSlide key={index} className="mt-10 md:px-10">
              <Link href={`/album/${item.id}`}>
                <div className="shadow-md  md:w-[240px] md:h-[200px] mb-50 rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-[180px] md:h-[250px] h-[200px] p-2 object-cover rounded-xl"
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
  );
};

export default Page;
