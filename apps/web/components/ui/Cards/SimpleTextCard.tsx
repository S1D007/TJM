import React from "react";

export default function SimpleTextCard() {
  return (
    <React.Fragment>
      <div className="w-full relative max-w-xs">
        <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Why the Hell I am Thinking?
          </h1>

          <p className="font-normal text-base text-gray-400 mb-4 relative z-50">
            Sometimes I think and then I think some more and then I think why I
            am Thinking? I think I am thinking because I forgot to think about
            what I was thinking about.
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Read More
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
