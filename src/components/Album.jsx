'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { album } from '@/data';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Slider() {


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
            400: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
      >
        {album.map((item, index) => (

            <SwiperSlide key={index} className='px-2' >
              <Link href="/">
                <div className='shadow-md md:w-full w-[340px] h-[405px] mb-50 rounded-sm'>
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    className='w-full h-[320px] p-2 object-cover rounded-xl' 
                  />
                  <div className='px-3'>
                    <h2 className='text-[20px]'>{item.name}</h2>
                    <p className='w-[280px] text-[13px]'>{item.detail}</p>
                  </div>
                </div>
              </Link>
  
            </SwiperSlide>

          ))}





    </Swiper>


    </div>
  )
}


