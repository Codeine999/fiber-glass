import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { blogs } from "@/data";

const Blogs = () => {
  const maxLength = () => 23;

  const cutText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "..";
  return (
    <div className="mt-14 overflow-hidden">
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
          768: { slidesPerView: 3, spaceBetween: -5 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {blogs.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[180px] mb-50">
              <Link href={`/blogs/${item.id}`}>
                <Image
                  src={item.image}
                  alt={item.id}
                  className="w-full md:h-[140px] h-[120px] object-cover"
                />
                <div className="p-2 flex flex-col">
                  <h3 className="text-[16px] whitespace-nowrap">
                    {cutText(item.title, maxLength())}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cutText(item.preContent, maxLength())}
                  </p>

                
                </div>
                
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
