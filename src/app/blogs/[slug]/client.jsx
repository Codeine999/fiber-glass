"use client";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar2";

import Header from "../../../../public/assets/header4.png";

const blog = ({ data }) => {


    if (!data) return <div className="h-screen"><Navbar /><p className="p-10">ไม่พบข้อมูลอัลบั้ม</p></div>;

  return (
    <div className="">
      <Navbar />
      <div className="p-10 md:px-42">
        <span className="text-sm">
          <Link href="/">หน้าหลัก /</Link>
          <Link href="/blogs"> บทความ /</Link>  
          {data.id}
          </span>
        <div className="mt-4">
          <h1 className="text-[30px]">{data.title}</h1>
          <div className="mt-4 flex flex-col justify-center gap-4">
            <div className="w-full h-[460px] bg-gray-300" />
              <p>{data.date}</p>

              <div className="grid grid-cols-[70%_30%]">

                <div className="md:w-[650px] w-[370px] flex flex-col md:gap-4 gap-2">
                  <h2 className="text-[16px] font-semibold">{data.preContent}</h2>
                  <p className="">{data.content}</p>
                  <p className="">{data.content2}</p>

                  <h2 className="mt-4 text-[16px] font-semibold">{data.title2}</h2>
                  <p className="">{data.content3}</p>
                  <p className="">{data.content4}</p>

                  <h2 className="mt-4 text-[16px] font-semibold">{data.title3}</h2>
                  <p className="">{data.content5}</p>
                  <p className="">{data.content6}</p>

                  <p className="mt-6">สรุป {data.conclusion}</p>
                  
                  <div className="mt-4 flex gap-2">
                  <span>Tag :</span>
                  <div className="bg-blue-900 w-[100px] h-[30px] rounded-md">
                    <div className="flex justify-center items-center">
                      <h2 className="mt-1 text-white text-[14px]">{data.tag}</h2>
                    </div>
                  </div>
                </div>
              </div>

                <div className="md:block hidden flex flex-col gap-">
                  <div className="border-1 border-gray-400 h-[400px]">
                    <div className="p-6 text-center">   
                      <p>บทความที่น่าสนใจ</p>
                    <div className="mt-4 border-[0.1px] border-gray-200" />
                  </div>
                </div>

                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
