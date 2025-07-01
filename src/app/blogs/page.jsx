"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "@/data";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Navbar2 from "@/components/Navbar2";
import Header from "../../../public/assets/header4.png";

const blog = () => {
  const maxLength = () => 35;

  const cutText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "..";

  return (
    <div className="h-screen">
      <Navbar2 />
      <div className="relative md:h-[260px] h-[200px]">
        <Image
          src={Header}
          alt="Header"
          fill
          className="-mt-15 absolute object-cover"
        />

        <div className="-mt-15 absolute md:h-[260px] h-[200px] inset-0 bg-black opacity-50" />

        <div className="md:mt-18 mt-8 absolute inset-0 flex justify-center">
          <p className="text-white text-[30px]">บทความ</p>
        </div>
      </div>
      <div className="px-10 grid md:grid-cols-4 grid-cols-2 gap-4 overflow-hidden">
        {blogs.map((item, index) => (
          <div key={index} className="md:w-[250px] md:h-[290px] mx-auto ">
            <Link href={`/blogs/${item.id}`}>
              <Image
                src={item.image}
                alt={item.id}
                className="w-full md:h-[150px] h-[150px] object-cover rounded-sm"
              />
              <h3 className='px-2 mt-2 text-[18px]'>{cutText(item.title, maxLength())}</h3>
              <p className="px-2 text-[15px]">
                {cutText(item.content, maxLength())}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blog;
