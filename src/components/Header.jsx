import React from "react";
import { Button } from "./ui/button";

import Image from "next/image";
import Hero from "../../public/assets/header4.png"



const Header = () => {
    return (
        <div 
              className="-mt-15 w-full h-[585px] bg-cover bg-center relative object-cover"
                style={{ backgroundImage: `url(${Hero.src})` }}
        >
              <div
                className="absolute inset-0 md:block hidden"
                style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)',
                }}
            />
            <div className="md:hidden block w-full h-[585px] bg-black opacity-30 absolute" />
            <div className="p-10 xl:px-28 relative">
                <div className="flex md:justify-start justify-center">
                    <h2 className="text-white md:text-[35px] text-[28px] mt-24">
                        เพชรอันดาไฟเบอร์กลาส
                    </h2>
                </div>
                <div className="flex md:justify-start justify-center">
                    <h2 className="mt-1 text-white md:text-[24px] text-[22px]">
                        รับผลิตชิ้นงาน
                        <span className="text-yellow-500">
                            ไฟเบอร์กลาส
                        </span>ตามแบบ
                    </h2>
                </div>

                <div className="flex md:justify-start justify-center">
                    <h1 className="md:mt-4 mt-5 text-white shadow-2xl text-[16px] xl:w-[500px] md:w-[350px] 
                     md:text-left text-center"
                    >
                        รับออกแบบและผลิตชิ้นงานไฟเบอร์กลาสและอลูมิเนียม
                        สำหรับหน่วยงานราชการ, วัด, บริษัท ห้างร้าน รวมถึงงานตกแต่ง เช่น
                        โลโก้, โตํะ, เก้าอี้, สระว่ายน้ำ, บ่อน้ำ, งานสถาปัตยกรรม,
                        ประติมากรรม และโมเดลแม่พิมพ์หล่อปูนซิเมนต์
                        พร้อมบริการครบวงจรตามความต้องการ
                    </h1>
                </div>

                <div className="flex md:justify-start justify-center">
                    <Button className="mt-10 bg-blue-900 w-[150px] h-[44px] text-[16px]">
                        ติดต่อเรา
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
