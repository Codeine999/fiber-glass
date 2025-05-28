'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { blogs } from '@/data';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';


const blog = () => {

  const maxLength = () => 28

  const cutText = (text, maxLength) => (
    text.length <= maxLength ? text : text.slice(0, maxLength) + '..'
  )
  
  return (
    <div className='mt-14 overflow-hidden'>
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
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
      >
        {blogs.map((item, index) => (

            <SwiperSlide key={index} >
              <div className='md:w-[250px] md:h-[180px] mx-auto mb-60'>
                <Image src={item.image} alt={item.id} className='w-full md:h-[150px] h-[150px] object-cover' />
                <h3 className='px-2 mt-2 text-[18px]'>{cutText(item.title, maxLength())}</h3>
                <p className='px-2 text-[15px]'>{cutText(item.content, maxLength())}</p>
              </div>
             
  
            </SwiperSlide>

          ))}





    </Swiper>


    </div>
  )
}

export default blog
