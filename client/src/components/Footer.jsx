import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-primary/5 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 py-8 sm:py-12 border-b border-gray-300/30 text-gray-600">
          <div className="w-full lg:w-1/3">
            <img src={assets.logo} alt="logo" className="w-28 sm:w-36 lg:w-44" />
            <p className="max-w-md mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
              quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
            </p>
          </div>

          <div className="flex flex-wrap justify-between w-full lg:w-2/3 gap-6 sm:gap-8 lg:gap-12">
            {footer_data.map((section, index) => (
              <div key={index} className="min-w-[120px] sm:min-w-[150px]">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-3 sm:mb-5">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="py-4 sm:py-6 text-center text-sm sm:text-base text-gray-500">
          Copyright © 2025 BlogBuddy. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
