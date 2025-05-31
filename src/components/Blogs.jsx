import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "@/data";

const Blogs = () => {
    const maxLength = () => 19;

    const cutText = (text, maxLength) =>
        text.length <= maxLength ? text : text.slice(0, maxLength) + "..";
    return (
        <div className="mt-14 grid md:grid-cols-4 grid-cols-2 gap-4 overflow-hidde mb-50">
            {blogs.slice(0, 2).map((item, index) => (
                <div key={index} className="md:w-full md:h-[290px]">
                    <Link href={`/blogs/${item.id}`}>
                        <Image
                            src={item.image}
                            alt={item.id}
                            className="w-full md:h-[150px] h-[150px] object-cover"
                        />
                        <h3 className='p-2 text-[18px]'>{cutText(item.title, maxLength())}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blogs
