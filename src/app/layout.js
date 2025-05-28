import "./globals.css";
import Footer from "@/components/Footer";
import { Kanit } from 'next/font/google'
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Navbar";



const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], 
  style: ['normal'],
  variable: '--font-kanit', 
})

export const metadata = {
  title: "Petunda Fiberglass",
  description: ` 
    รับออกแบบและผลิตชิ้นงานไฟเบอร์กลาสและอลูมิเนียมคุณภาพสูงสำหรับหน่วยงานราชการ
    บริษัท ห้างร้าน โลโก้ Logo โต๊ะ เก้าอี้ สระว่ายน้ำ ประติมากรรม โมเดลแม่พิมพ์หล่อปูนซิเมนต์
    บริการครบวงจรวัสดุแข็งแรง`,

  robots: {
    index: true,
    follow: true,
  },
  
  canonical: "http://www.petunda-fiberglass.com",
  
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
