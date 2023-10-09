import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[80vh] mb-28"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/WD9Y68h/istockphoto-1334542509-170667a.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg text-[#FF477E]">
          <h1 className="mb-5 text-5xl md:text-6xl lg:text-6xl font-bold">Wedding Planner</h1>
          <p className="mb-5 text-2xl">
            We Will Make Your Dream Wedding Come True
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
