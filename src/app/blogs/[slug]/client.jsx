"use client";
import Image from "next/image";
import Link from "next/link";

import Navbar2 from "@/components/Navbar2";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { blogs } from "@/data/index"
import Header from "../../../../public/assets/header4.png";

const blog = ({ data }) => {


  if (!data) return <div className="h-screen"><Navbar2 /><p className="p-10">ไม่พบข้อมูลอัลบั้ม</p></div>;
  console.log(data)
  return (
    <div className="mb-55">
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

      {data.map((item, i) => (
        <div key={i} className="xl:px-46 lg:px-30 md:px-20 px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{item.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <div className="flex flex-col justify-center gap-4">
              <div className="mt-6 flex flex-col gap-4">
                <h1 className="text-2xl">{item.title}</h1>
                <div className="flex justify-center xl:px-22 px-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full xl:h-[380px] md:h-[300px] object-cover rounded-md"
                  />

                </div>
              </div>

              <div className="grid lg:grid-cols-[70%_30%] lg:gap-0 md:gap-56">
                <div className="md:p-6 pt-8 md:w-[600px] md:h-[500px] h-[950px]">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-xl">{item.subTitle}</h2>

                    <div className="flex flex-col gap-1">
                      <p className="text-md font-semibold">{item.headMenu}</p>
                      <p className="text-md">{item.content}</p>
                      <p className="text-md">{item.content1}</p>

                      <div className="mt-3 flex flex-col">
                        <p className="text-md font-semibold">{item.headMenu2}</p>
                        <p className="text-md">{item.content2}</p>
                        <p className="text-md">{item.content3}</p>
                        <p className="text-md">{item.content4}</p>
                      </div>

                      <div className="mt-3 flex flex-col">
                        <p className="text-md font-semibold">{item.headMenu3}</p>
                        <p className="text-md">{item.content5}</p>
                        <p className="text-md">{item.content6}</p>
                        <p className="text-md">{item.content7}</p>
                      </div>

                      <div className="mt-4 mb-40 flex flex-col">
                        <p>{item.conclusion}</p>
                        <div className="mt-12 flex gap-2">
                          <span>Tag :</span>
                          <div className="bg-blue-900 w-[100px] h-[30px] rounded-md">
                            <div className="flex justify-center items-center">
                              <h2 className="mt-1 text-white text-[14px]">{item.tag}</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-12 border-1 rounded-md h-[500px] w-full">
                  <div className="p-4 flex justify-center">
                    <p className="text-lg">บทความที่น่าสนใจ</p>
                  </div>

                  <div className="p-4 flex flex-col gap-6">
                    {blogs.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-14 rounded-md"
                        />
                        <div className="mt-2">
                          <p>{item.title}</p>
                          <p className="mt-1 text-xs">{item.title}</p>
                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default blog;
