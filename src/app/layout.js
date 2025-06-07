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
  title: "เพชรอันดา ไฟเบอร์กลาส รับออกแบบและผลิตชิ้นงานไฟเบอร์กลาส",
  description: `รับผลิตชิ้นงานไฟเบอร์กลาสสำหรับหน่วยงานต่างๆ เช่นป้ายโลโก้
  หน่วยงานราชการ, เอกชน, บริษัท, โต๊ะ เก้าอี้ สระว่ายน้ำ ไฟเบอร์กลาสและงานประติมากรรม 
  โมเดลแม่พิมพ์หล่อปูนซิเมนต์ บริการครบวงจรฝ`,

  robots: {
    index: true,
    follow: true,
  },
  
  canonical: "http://www.petunda-fiberglass.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
