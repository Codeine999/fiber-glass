import Header from "@/components/Header";

import { Check } from "lucide-react";
import Album from "@/app/album/Album";
import { Topic, EndPoint } from "@/components/Components";
import Faq from "@/components/Faq";
import Blogs from "@/app/blogs/page"
import MapClientWrapper from "@/components/Mapclient";


export default function Home() {
  return (
    <div className="">

      <Header />

      <section id="service">
        <div className="mt-10 flex justify-center">
          <h1 className="md:text-[30px] text-[25px] text-center md:w-full w-[290px]">
            รับผลิตชิ้นงานไฟเบอร์กลาสและอลูมิเนียมอัลลอย
          </h1>
        </div>
        <div className="mt-5 flex justify-center">
          <h2 className="text-gray-600 text-center xl:text-[20px] text-[18px] 
            xl:w-[700px] lg:w-[600px] md:w-[490px] w-[380px]"
          >
            เราเป็นผู้เชี่ยวชาญในการผลิตและให้บริการไฟเบอร์กลาสสำหรับงานทุกประเภทไม่ว่าจะเป็น
            โลโก้หน่วยงานราชการ, ศาลปกครอง, มหาวิทยาลัย, ตราประจำจังหวัด,
            การประปา, วัด, หรือ บริษัท ห้างร้านต่างๆ
            ทุกงานได้รับการออกแบบและผลิตด้วยความใส่ใจในทุกรายละเอียด
            ด้วยวัสดุที่มีความแข็งแรงสูง
          </h2>
        </div>
        <div className="mt-15 flex justify-center">
          <div className="bg-blue-900 w-[140px] h-[4px]" />
        </div>
      </section>

      <section id="about">
        <div className="md:mt-28 mt-18 xl:px-50 md:px-14 px-7 md:flex md:justify-between">
          <div>
            <Topic title="ทำไมถึงต้องเลือกเรา" />
            <p className="lg:w-[440px] w-[320px] lg:text-[16px] text-[13px]">
              เราเป็นผู้เชี่ยวชาญงานไฟเบอร์กลาสและปติมกรรมกว่า 20 ปี แม้เพิ่งเริ่มออนไลน์แต่เรายังคงรักษาคุณภาพงานและบริการที่ไว้วางใจได้
            </p>

            <div className="md:mt-8 mt-8">
              <div className="flex gap-4">
                <Check className="mt-3 text-green-600 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] " />
                <h4 className="-mx-2 lg:text-[22px] text-[18px]">
                  ประสบการณ์มากกว่า 20 ปี
                </h4>
              </div>
              <p className="md:px-12 px-10 -mt-3 md:w-[500px] w-[340px] lg:text-[14px] text-[12px]">
                เราผ่านงานที่ท้าทายและหลากหลายรูปแบบ ทำให้เราเข้าใจและตอบโจทย์ความต้องการของลูกค้าได้อย่างลึกซึ้งและครบถ้วน
              </p>
            </div>

            <div className="md:mt-8 mt-8">
              <div className="flex gap-4">
                <Check className="mt-3 text-green-600 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] " />
                <h4 className="-mx-2 lg:text-[22px] text-[18px]">
                  ประสบการณ์มากกว่า 20 ปี
                </h4>
              </div>
              <p className="md:px-12 px-10 -mt-3 md:w-[500px] w-[340px] lg:text-[14px] text-[12px]">
                เราผ่านงานที่ท้าทายและหลากหลายรูปแบบ ทำให้เราเข้าใจและตอบโจทย์ความต้องการของลูกค้าได้อย่างลึกซึ้งและครบถ้วน
              </p>
            </div>

            <div className="md:mt-8 mt-8">
              <div className="flex gap-4">
                <Check className="mt-3 text-green-600 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] " />
                <h4 className="-mx-2 lg:text-[22px] text-[18px]">
                  ประสบการณ์มากกว่า 20 ปี
                </h4>
              </div>
              <p className="md:px-12 px-10 -mt-3 md:w-[500px] w-[340px] lg:text-[14px] text-[12px]">
                เราผ่านงานที่ท้าทายและหลากหลายรูปแบบ ทำให้เราเข้าใจและตอบโจทย์ความต้องการของลูกค้าได้อย่างลึกซึ้งและครบถ้วน
              </p>
            </div>

          
          </div>

          <div className="md:mt-0 mt-12 bg-gray-800 lg:w-[400px] md:w-[340px] lg:h-[500px] h-[400px] rounded-2xl"></div>
        </div>
      </section>

      <EndPoint />

      <section id="album">
        <div className="mt-14 xl:px-40 md:px-14 px-7">
          <div className="flex justify-between items-center">
            <Topic title="งานที่ผ่านมา" />
            <p className="">ดูทั้งหมด</p>
          </div>

          <Album />
        </div>
      </section>

      <div className="-mt-20">
        <EndPoint/>
      </div>

      <div className="mt-10 h-[380px] w-full ">
        <div className="flex justify-center">
          <div className="mt-8 mb-5">
            <Topic title="คำค้นหาสินค้า" />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-15 gap-10 ">
            <div className="w-[200px] h-[40px] border-1 border-blue-900 rounded-4xl">
              <div className="text-center items-center mt-1.5 ">
                <h2 className="text-blue-900">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
              </div>
            </div>
            <div className="w-[200px] h-[40px] border-1 border-blue-900 rounded-4xl">
              <div className="text-center items-center mt-1.5 ">
                <h2 className="text-blue-900">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
              </div>
            </div>
            <div className="w-[200px] h-[40px] border-1 border-blue-900 rounded-4xl">
              <div className="text-center items-center mt-1.5 ">
                <h2 className="text-blue-900">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
              </div>
            </div>
            <div className="w-[200px] h-[40px] border-1 border-blue-900 rounded-4xl">
              <div className="text-center items-center mt-1.5 ">
                <h2 className="text-blue-900">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
              </div>
            </div>
            <div className="w-[200px] h-[40px] border-1 border-blue-900 rounded-4xl">
              <div className="text-center items-center mt-1.5 ">
                <h2 className="text-blue-900">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
              </div>
            </div>
            <div className="w-[200px] h-[40px] border-1 border-blue-900 rounded-4xl">
              <div className="text-center items-center mt-1.5 ">
                <h2 className="text-blue-900">ผลิตภัทฑ์ไฟเบอร์กลาส</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-25">
        <EndPoint />
      </div>
      

      <section id="blogs">
        <div className="mt-20 md:px-28 px-7">
          <div className="flex justify-between items-center">
            <Topic title="บทความ" />
            <p className="">ดูทั้งหมด</p>
          </div>
          <Blogs />
        </div>
      </section>

      <div className="-mt-25">
        <EndPoint />
      </div>
      <Faq />
      <MapClientWrapper />

      <section id="contact">
        <div className="w-full h-[320px] bg-[#1e3556]">
          <div className="flex justify-center">
            <h1 className="mt-8 md:w-full w-[300px] text-white md:text-[25px] text-[20px] text-center">
              รับผลิตชิ้นงานเรซิ่และไฟเบอร์กลาส - PETUNDA FIBERGLASS
            </h1>
          </div>
          <div className="flex justify-center">
            <h6 className="mt-2 md:w-[650px] w-[350px] text-white md:text-[20px] text-center">
              54/107 ต.เสาธงหิน อ.บางใหญ่ นนทบุรี 11140 เวลาทำการ 8:30 - 18:00 น
            </h6>
          </div>

          <p className="md:mt-15 mt-8 text-white text-center">Line </p>
          <p className="md:mt-15 mt-8 text-white text-center">
            อีเมล : Petunda911@gmail.com{" "}
          </p>
          <p className="mt-2 text-white text-center">โทรศัพท์ : 0830391282 </p>
        </div>
      </section>
    </div>
  );
}
