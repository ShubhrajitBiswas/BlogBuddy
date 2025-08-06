import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-40 -left-8 -right-8 z-0 opacity-60 w-auto h-auto max-w-none"
      />
      <div className="text-center mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-12 relative z-10">
        <div className="inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-xs sm:text-sm text-primary">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="" />
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight sm:leading-tight lg:leading-tight text-gray-700 px-4">
          Your own <span className="text-primary">blogging</span> <br className="hidden sm:block" />
          platform.
        </h1>
        <p className="my-4 sm:my-6 lg:my-8 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 px-4">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        <form className="flex justify-between max-w-lg mx-auto border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 pr-2 py-3 outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 sm:px-8 py-3 m-1 rounded-md hover:bg-primary/90 transition-colors cursor-pointer text-sm sm:text-base"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
