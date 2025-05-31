'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { album } from '@/data';
import { Button } from '../../components/ui/button';
import { Tag } from 'lucide-react';



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
      ? 120
      : windowWidth < 1000
        ? 86
        : windowWidth <= 1100
          ? 86
          : 86;

  const cutText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "..";


  return (
    <div className='md:mt-20 mt-14  overflow-hidden'>
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
          0: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: -5 },
          1024: { slidesPerView: 3, spaceBetween: -10 },
          1400: { slidesPerView: 3, spaceBetween: 10 },
        }}
      >
        {album.map((item, index) => (

          <SwiperSlide key={index} className='px-4' >

            <div className='shadow-md md:w-full w-[340px] md:h-[440px] h-[460px] mb-50 rounded-sm'>
              <Image
                src={item.image}
                alt={item.name}
                className='w-full h-[320px] p-2 object-cover rounded-xl'
              />
              <Link href={`/album/${item.id}`}>
                <div className='px-3'>
                  <h2 className='text-[20px]'>{item.name}</h2>
                  <p className='w-[260px] text-[13px]'>{cutText(item.detail, maxLength())}</p>
                </div>
                <div className='mt-4 flex justify-between px-4'>
                  <div className='flex gap-2 '>
                    <Tag className='w-4 h-4 text-[#0d1652]' />
                    <h1 className='text-[10px] text-[#0d1652]'>ผลิตโดยเพชรอันดาไฟเบอร์กลาส</h1>
                  </div>

                  <Button className="-mt-1 w-16 h-6 text-[10px] bg-blue-900">
                    ดูรายละเอียด
                  </Button>
                </div>
              </Link>
            </div>

          </SwiperSlide>

        ))}





      </Swiper>


    </div>
  )
}


