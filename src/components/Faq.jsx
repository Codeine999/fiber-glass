"use client";
import { useState } from "react";

import { faqs } from "@/data";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:px-28 md:px-10 ">
      <div className="md:flex md:justify-between md:text-left text-center">
        <p className="md:mt-32 mt-12 px-10 lg:text-[35px] md:text-[30px] text-[25px] font-bold text-gray-800">
          คำถามที่พบบ่อย (FAQ)
        </p>
        <div className="md:mt-14 mt-8 md:space-y-6 space-y-4 md:px-0 px-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 xl:w-[550px] lg:w-[420px] md:w-[380px] w-full">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full text-left lg:text-[20px] md:text-[18px] text-[16px] text-gray-900 py-4 px-6 hover:bg-gray-100
                  transform duration-300 focus:outline-none cursor-pointer"
                >
                  {faq.question}
                </button>
                <span className="text-2xl  text-gray-600 cursor-pointer">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="px-6 py-2 text-gray-700 text-left">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
