import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value.trim());
  };

  const onClear = () => {
    setInput("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-40 -left-8 -right-8 z-0 opacity-60 w-auto h-auto max-w-none"
      />

      {/* Header Content */}
      <div className="text-center mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-12 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-xs sm:text-sm text-primary">
          <p>Introducing: Smart Content Generator</p>
          <img src={assets.star_icon} className="w-2.5" alt="Star" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-gray-700 px-4">
          Write smarter with <span className="text-primary">AI-driven</span>
          <br className="hidden sm:block" />
          blogging tools.
        </h1>

        {/* Subtext */}
        <p className="my-4 sm:my-6 lg:my-8 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 px-4">
          Generate compelling blog posts, brainstorm creative ideas, and
          structure your content in seconds-all powered by cutting-edge AI.
          It's time to focus on ideas while we handle the rest.
        </p>

        {/* Search Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg mx-auto border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            className="w-full pl-4 pr-2 py-3 outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 sm:px-8 py-3 m-1 rounded-md hover:bg-primary/90 transition-colors cursor-pointer text-sm sm:text-base"
          >
            Search
          </button>
        </form>

        {/* Clear Button */}
        {input && (
          <div className="mt-3">
            <button
              onClick={onClear}
              className="border border-gray-300 text-gray-600 font-light text-xs py-1 px-3 rounded shadow-sm hover:bg-gray-50 transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
