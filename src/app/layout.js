import "./globals.css";
import Footer from "@/components/Footer";
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], // กำหนดน้ำหนักที่ต้องการใช้
  style: ['normal'],
  variable: '--font-kanit', // ตั้งชื่อ CSS variable (ถ้าต้องการ)
})

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
