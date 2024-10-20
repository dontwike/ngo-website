import React from "react";

const ImageSec = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-start p-8 md:px-12 bg-white max-w-4xl mx-auto rounded-lg">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={props.image}
          alt="Food Providers Sign Up"
          className="rounded-lg w-full h-64 object-cover"
        />
      </div>
      
      {/* Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 md:text-left">
        <h3 className="text-2xl font-bold text-black mb-1">Step {props.no}</h3>
        <p className="text-xl font-semibold text-black mb-3">{props.subhead}</p>
        <p className="text-gray-600 text-base leading-relaxed">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default ImageSec;
