import React from "react";
import { porto1, porto2, porto3, porto4, porto5, porto6 } from "../assets";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-600">Work</p>
          <p className="py-6">Check Out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Grid Item */}
          <div className="shadow-md shadow-[#040c16] relative text-center group hover:scale-110 duration-500 rounded-md">
            <div className="grayscale filter brightness-50 group-hover:grayscale-0 group-hover:filter-none duration-500">
            <img className="w-full mx-auto mb-3 rounded-md duration-500" src={porto1} alt="Tradeindo Website" />
            </div>
              <span className="text-xl font-bold text-white tracking-wider">Tradeindo Website (Laravel, SCSS, Bootstrap)</span><br />
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Demo</button>
                </a>
                <a href="https://github.com/ichsanrchmn/web-tradeindo" target="_blank" rel="noopener noreferrer">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Code</button>
                </a>
            </div>
          {/* Grid Item */}
          <div className="shadow-md shadow-[#040c16] relative text-center group hover:scale-110 duration-500 rounded-md">
          <div className="grayscale filter brightness-50 group-hover:grayscale-0 group-hover:filter-none duration-500">
            <img className="w-full mx-auto mb-3 rounded-md duration-500" src={porto2} alt="PAMM Fibox Page" />
          </div>
              <span className="text-xl font-bold text-white tracking-wider">PAMM Fibox Page<br/>(React+Vite, Tailwind)</span><br />
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Demo</button>
                </a>
                <a href="https://github.com/ichsanrchmn/pamm-fibox-lp" target="_blank" rel="noopener noreferrer">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Code</button>
                </a>
            </div>
          {/* Grid Item */}
          <div className="shadow-md shadow-[#040c16] relative text-center group hover:scale-110 duration-500 rounded-md">
          <div className="grayscale filter brightness-50 group-hover:grayscale-0 group-hover:filter-none duration-500">
            <img className="w-full mx-auto mb-3 rounded-md duration-500" src={porto3} alt="PAMM Fibox Page 2" />
          </div>
              <span className="text-xl font-bold text-white tracking-wider">PAMM Fibox Second Page (React, Tailwind)</span><br />
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Demo</button>
                </a>
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Code</button>
                </a>
            </div>
          {/* Grid Item */}
          <div className="shadow-md shadow-[#040c16] relative text-center group hover:scale-110 duration-500 rounded-md">
          <div className="grayscale filter brightness-50 group-hover:grayscale-0 group-hover:filter-none duration-500">
            <img className="w-full mx-auto mb-3 rounded-md duration-500" src={porto4} alt="Orion System Page" />
          </div>
              <span className="text-xl font-bold text-white tracking-wider">Orion System Page<br />(SCSS, Bootstrap)</span><br />
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Demo</button>
                </a>
                <a href="https://github.com/ichsanrchmn/oriongold-lp" target="_blank" rel="noopener noreferrer">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Code</button>
                </a>
            </div>
          {/* Grid Item */}
          <div className="shadow-md shadow-[#040c16] relative text-center group hover:scale-110 duration-500 rounded-md">
          <div className="grayscale filter brightness-50 group-hover:grayscale-0 group-hover:filter-none duration-500">
            <img className="w-full mx-auto mb-3 rounded-md duration-500" src={porto5} alt="TradeVibes Website" />
          </div>
              <span className="text-xl font-bold text-white tracking-wider">TraderVibes Website (Laravel, SCSS, Bootstrap)</span><br />
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Demo</button>
                </a>
                <a href="https://github.com/ichsanrchmn/web-tradervibes" target="_blank" rel="noopener noreferrer">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Code</button>
                </a>
            </div>
          {/* Grid Item */}
          <div className="shadow-md shadow-[#040c16] relative text-center group hover:scale-110 duration-500 rounded-md">
          <div className="grayscale filter brightness-50 group-hover:grayscale-0 group-hover:filter-none duration-500">
            <img className="w-full mx-auto mb-3 rounded-md duration-500" src={porto6} alt="TradeVibes Website" />
          </div>
              <span className="text-xl font-bold text-white tracking-wider">My Portfolio Page (ReactJS, Tailwind)</span><br />
                <a href="/">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Demo</button>
                </a>
                <a href="https://github.com/ichsanrchmn/my-portfolio" target="_blank" rel="noopener noreferrer">
                  <button className="my-6 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#d8b963] hover:text-white duration-300">Code</button>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
