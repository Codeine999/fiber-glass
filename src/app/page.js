"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Album from "@/app/album/Album";
import Faq from "@/components/Faq";
import Blogs from "@/components/Blogs";
import MapClientWrapper from "@/components/Mapclient";
import { Topic, EndPoint } from "@/components/Components";
import { Button } from "@/components/ui/button";

import Brig from "../../public/assets/brig.JPG";
import Dolphine from "@/assets/dolphine.png";
import Pu from "../../public/assets/pu.JPG";

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", inView);
  }, [inView]);

  return (
    <div className="">

      <Navbar />
      <Header />

      <section id="service">
        <div className="mt-10 flex justify-center ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.4 }, y: { duration: 0.4, ease: 'easeOut' } }}
            className="text-black md:text-[30px] text-[25px] text-center md:w-full w-[290px]"
          >
            รับผลิตชิ้นงานไฟเบอร์กลาสและอลูมิเนียมอัลลอย
          </motion.h1>
        </div>
        <div className="mt-5 flex justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ opacity: { duration: 0.5 }, y: { duration: 0.4, ease: 'easeOut' } }}
            className="md:block hidden text-gray-600 text-center xl:text-[20px] text-[18px] 
            xl:w-[700px] lg:w-[600px] md:w-[490px] w-[340px]"
          >
            เราเป็นผู้เชี่ยวชาญในการผลิตและให้บริการไฟเบอร์กลาสสำหรับงานทุกประเภทไม่ว่าจะเป็น
            โลโก้หน่วยงานราชการ, ศาลปกครอง, มหาวิทยาลัย, ตราประจำจังหวัด,
            การประปา, วัด, หรือ บริษัท ห้างร้านต่างๆ
            ทุกงานได้รับการออกแบบและผลิตด้วยความใส่ใจในทุกรายละเอียด
            ด้วยวัสดุที่มีความแข็งแรงสูง
          </motion.h2>

          <h2
            className="md:hidden block text-gray-600 text-center xl:text-[20px] text-[18px] 
            xl:w-[700px] lg:w-[600px] md:w-[490px] w-[340px]"
          >
            เราเป็นผู้เชี่ยวชาญในการผลิตไฟเบอร์กลาสและงานปะติมากรรมทุกประเภท
            เช่น ป้ายโลโก้หน่วยงาน ไม่ว่าจะเป็น ราชการ, เอกชน, มหาวิทยาลัย,
            ตราประจำจังหวัด, วัด, บริษัท ห้างร้านต่างๆ
          </h2>
        </div>

        <div className="mt-15 flex justify-center">
          <div className="bg-blue-900 w-[140px] h-[4px]" />
        </div>
      </section>
      {/* แม้เพิ่งเริ่มให้บริการออนไลน์ แต่ประสบการณ์ที่เรามีสามารถตอบโจทย์ลูกค้าได้ */}
      <section id="about">
        <div className="md:mt-20 mt-18 xl:px-36 lg:px-14 md:px-12 px-4 lg:flex lg:justify-between">
          <motion.div
            initial={{ scale: 1, opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.01 }} 
            className="border-1 border-gray-200 xl:px-10 lg:px-8 md:px-14 px-6 py-4 shadow-sm rounded-2xl"
          >
            <div className="mt-4">
              <motion.div
                ref={ref}
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: inView ? 1 : 0, y: 0 }}
                // transition={{ duration: 0.3 }}
                className="-mx-2 lg:text-[22px] text-[20px]"
              >
                <Topic title="ทำไมถึงต้องเลือกเรา" />
              </motion.div>
              <p className="mt-1 -mx-2 lg:w-[400px] font- md:w-[400px] w-full text-[16px] text-gray-600">
                เรามีประสบการณ์ในงานไฟเบอร์กลาสและงานปะติมากรรมมากกว่า 20 ปี
                ผลิตงานโดยตรงจากช่าง
                <span className="text-gray-1000">ไม่ผ่านนายหน้า</span>
              </p>

              <div className="lg:mt-8 md:mt-4 mt-6">
                <div className="-mx-4 flex gap-4">
                  <Check className="text-green-600 lg:w-[40px] lg:h-[40px] md:w-[30px] w-[32px] h-[32px]" />
                  <h4 className="-mx-2 lg:text-[22px] text-[20px]">
                    ประสบการณ์มากกว่า 20 ปี
                  </h4>
                </div>
              </div>

              <div className="md:mt-4 mt-6">
                <div className="-mx-4 flex gap-4">
                  <Check className="text-green-600 lg:w-[40px] lg:h-[40px] md:w-[30px] w-[32px] h-[32px]" />
                  <h4 className="-mx-2 lg:text-[22px] text-[20px]">
                    มีโรงงานผลิตครบวงจร
                  </h4>
                </div>
              </div>

              <div className=" md:mt-4 mt-6">
                <div className="-mx-4 flex gap-4">
                  <Check className="text-green-600 lg:w-[40px] lg:h-[40px] md:w-[30px] w-[32px] h-[32px]" />
                  <motion.h4
                    ref={ref}
                    // initial={{ opacity: 0, y: 90 }}
                    // animate={{ opacity: inView ? 1 : 0, y: 0 }}
                    // transition={{ duration: 0.3 }}
                    className="-mx-2 lg:text-[22px] text-[20px]"
                  >
                    ผลิตตรงไม่ผ่านนายหน้า
                  </motion.h4>
                </div>
                <div className="mt-6">
                  <div className="lg:w-[360px] md:w-[400px]">
                    <p className="text-gray-600">
                      ผลิตกับเราโดยตรงไม่ผ่านนายหน้าสามารถช่วยลดต้นทุนที่ไม่จำเป็นทำให้ลูกค้าได้ราคายุติธรรม
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full">
                    <div className="grid grid-cols-2 gap-2.5">

                      <a href="https://line.me/ti/p/9EhMYc_54F" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-blue-900 w-full h-[40px] shadow-md hover:bg-blue-700">
                          ติดต่อเรา
                        </Button>
                      </a>

                      <Button
                        className="bg-gray-200 w-full text-black h-[40px] shadow-xs shadow-gray-400
                     hover:bg-gray-300"
                      >
                        ขอใบเสนอราคา <Layers className="!h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1, opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.4 }}
            className="lg:mt-0 mt-12 lg:w-[500px] w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center">
                <Image
                  src={Pu}
                  alt="Nike Sneaker 1"
                  className="w-full lg:h-[200px] h-[220px] rounded-lg object-cover border-1  border-gray-200"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={Dolphine}
                  alt="Nike Sneaker 2"
                  className="w-full lg:h-[200px] h-[220px] rounded-lg object-cover border-1  border-gray-200"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-center">
              <Image
                src={Brig}
                alt="Nike Sneaker 3"
                className="w-full md:h-[250px] h-[220px] rounded-lg object-cover border-1  border-gray-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <EndPoint />

      <section id="album">
        <div className="mt-14 xl:px-42 md:px-12 px-7">
          <div className="flex justify-between items-center">
            <Topic title="งานที่ผ่านมา" />
            <p className="">ดูทั้งหมด</p>
          </div>
        </div>
        <div className="xl:px-38 md:px-8 px-7">
          <Album />
        </div>
      </section>

      <div className="-mt-20">
        <EndPoint />
      </div>

      <div className="mt-10 h-[380px] w-full">
        <div className="flex justify-center">
          <div className="mt-8 mb-5">
            <Topic title="คำค้นหาบริการ" />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-15 gap-x-10 gap-y-8">

            <Button variant="outline" size="butt">
              <h2 className="text-blue-900 text-md">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
            </Button>
            <Button variant="outline" className="h-[40px]">
              <h2 className="text-blue-900 text-md">ผลิตโมเดลแม่พิมพ์</h2>
            </Button>
            <Button variant="outline" className="h-[40px]">
              <h2 className="text-blue-900 text-md">งานหน่วยงานราชการ</h2>
            </Button>
            <Button variant="outline" className="h-[40px]">
              <h2 className="text-blue-900 text-md">งานหล่อปูนซิเมนต์</h2>
            </Button>
            <Button variant="outline" className="h-[40px]">
              <h2 className="text-blue-900 text-md">งานโต๊ะ เก้าอี้ สระว่ายน้ำ</h2>
            </Button>
            <Button variant="outline" className="h-[40px]">
              <h2 className="text-blue-900 text-md">งานสถาปัตยกรรม</h2>
            </Button>

          </div>
        </div>
      </div>

      <div className="-mt-25">
        <EndPoint />
      </div>

      <section id="blogs">
        <div className="mt-20 xl:px-40 md:px-14 px-7">
          <div className="flex justify-between items-center">
            <Topic title="บทความ" />
            <Link href="/blogs" className="cursor-pointer">
              ดูทั้งหมด
            </Link>
          </div>
          <Blogs />
        </div>
      </section>

      <div className="-mt-25">
        <EndPoint />
      </div>
      <Faq />
      <EndPoint />
      <MapClientWrapper />

      <section id="contact">
        <div className="w-full h-[350px] bg-[#1e3556] relative">
          {/* <Image
            src={Mark}
            alt="watermark"
            className="absolute top-0 h-[360px] opacity-15 z-10 object-cover"
          /> */}
          <div className="flex justify-center z-50">
            <h1 className="mt-12 md:w-full w-[300px] text-white md:text-[25px] text-[20px] text-center">
              รับผลิตชิ้นงานเรซิ่และไฟเบอร์กลาส - PETUNDA FIBERGLASS
            </h1>
          </div>
          <div className="flex justify-center">
            <h6 className="mt-2 md:w-[490px] w-[350px] text-white md:text-[20px] text-center">
              54/107 บางใหญ่ซิตี้ ต.เสาธงหิน อ.บางใหญ่ นนทบุรี 11140 เวลาทำการ
              8:30 - 18:00 น
            </h6>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/fb.png"
                alt="line"
                width={50}
                height={50}
                className="hover:scale-105 cursor-pointer" 
              />
            </a>
            <a href="https://line.me/ti/p/9EhMYc_54F" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/assets/line.svg.png"
                alt="line"
                width={30}
                height={30}
                className="mt-2.5 hover:scale-105 cursor-pointer" 
              />
            </a>
          </div>
          <p className="md:mt-10 mt-8 text-white text-center">
            อีเมล : Petunda911@gmail.com{" "}
          </p>
          <p className="mt-2 text-white text-center">โทรศัพท์ : 0830391282 </p>
        </div>
      </section>
    </div>
  );
}
