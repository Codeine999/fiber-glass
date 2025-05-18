'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { blogs } from '@/data';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';


const blog = () => {
  return (
    <div className='mt-20 mb-20  overflow-hidden'>
        <Swiper 
          modules={[Pagination]} 
          grabCursor={true}
          initialSlide={0}
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={30} 
          speed={800}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
          breakpoints={{
            400: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
      >
        {blogs.map((item, index) => (

            <SwiperSlide key={index} >
              <div className='w-[250px] h-[250px]'>
                <Image src={item.image} alt={item.id} className='w-[250px] h-[180px]' />
                <h3 className='mt-2 text-[16px]'>{item.title}</h3>
                <p>{item.content}</p>
              </div>
             
  
            </SwiperSlide>

          ))}





    </Swiper>


    </div>
  )
}

export default blog
