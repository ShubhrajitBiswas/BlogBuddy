import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 my-16 sm:my-24 lg:my-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
          Never Miss a Blog!
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-between max-w-2xl w-full gap-3 sm:gap-0">
          <input
            className="w-full sm:w-auto flex-1 border border-gray-300 rounded-lg sm:rounded-r-none h-12 sm:h-14 outline-none px-4 text-gray-700 placeholder-gray-500 focus:border-primary transition-colors"
            type="email"
            placeholder="Enter your email id"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 h-12 sm:h-14 text-white bg-primary hover:bg-primary/90 transition-colors cursor-pointer rounded-lg sm:rounded-l-none font-medium text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
