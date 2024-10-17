import { Button } from "@material-tailwind/react";
import React from "react";

const ImageText = (props) => {
  return (
    <section className="pt-16 px-4 md:px-16 lg:px-32">
      {props.heading == null ? (
        ""
      ) : (
        <h1 className="font-bold text-6xl flex items-center justify-center mb-16">
          {props.heading}
        </h1>
      )}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Section Image left and Text Right  */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold mb-4">{props.title1}</h2>
          <p className="text-gray-700 mb-6 text-lg">{props.para1}</p>
          {props.button1 == "false" ? (
            ""
          ) : (
            <Button className="flex items-center gap-3">
              {props.button1_text}
            </Button>
          )}
        </div>
        <div className="bg-gray-200 rounded-lg h-48 md:h-80 overflow-hidden">
          <img src={props.image1} alt="Description of image" className='w-full h-full object-cover' />
        </div>

        {/* Section Image Right and Text Left */}
        <div className="bg-gray-200 rounded-lg h-48 md:h-80 overflow-hidden">
          <img src={props.image2} alt="Description of image" className='w-full h-full object-cover' />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold mb-4">{props.title2}</h2>
          <p className="text-gray-700 mb-6 text-lg">{props.para1}</p>
          {props.button2 == "false" ? (
            ""
          ) : (
            <Button className="flex items-center gap-3">
              {props.button2_text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageText;
