import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 w-full md:h-[70px] h-[100px]'>
      <div className='md:flex md:justify-between text-center md:pt-0 pt-1'>
        <div className='mt-4 xl:px-50 md:px-20 text-[12px] text-white'>
          <h5 className='whitespace-nowrap'>©2025 รับผลิตชิ้นงานไฟเบอร์กลาส - PETUNDA PAKSA</h5>
          <p>© 2025 Petunda Co., Ltd. All rights reserved.</p>
        </div>
        
        <div className='md:mt-6 mt-4 xl:px-50 md:px-20 text-[12px] text-white'>
          <h5>Dev by Codeine</h5>
        </div>

      </div>
    </div>
  )
}

export default Footer
