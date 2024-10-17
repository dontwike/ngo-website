import React from "react";
import SecPageComponents from "../components/ImageText";
import { Button } from "@material-tailwind/react";
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'

const GetInvolved = () => {
  const data = {
    heading: "Get Involved",
    image1:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title1: "Join Us",
    secPage_ParaData1:
      "Whether you're a restaurant with surplus food or an NGO fighting food insecurity, your participation can make a big difference. Get involved today by signing up on Shareplate and be part of the movement for good.",

    title2: "Contact Us",
    secPage_ParaData2:
      "We’re here to help! Reach out to our team for more information on how Shareplate can help you fight food insecurity in your community.",
  };

  return (
    <section className="pt-16 px-4 md:px-16 lg:px-32">
        <h1 className="font-bold text-6xl flex items-center justify-center mb-16">
          {data.heading}
        </h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Section Image left and Text Right  */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{data.title1}</h2>
          <p className="text-gray-700 mb-6 text-lg">{data.secPage_ParaData1}</p>
          <div className="flex ">
          <Button className="flex items-center gap-3">
            Join as food provider
          </Button>
          <Button className="flex items-center gap-3 ml-3">
            Join as NGO
          </Button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg h-48 md:h-80 overflow-hidden">
          <img src={img10} alt="Description of image" className='w-full h-full object-cover' />
        </div>

        {/* Section Image Right and Text Left */}
        <div className="bg-gray-200 rounded-lg h-48 md:h-80 overflow-hidden">
          <img src={img9} alt="Description of image" className='w-full h-full object-cover' />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">{data.title2}</h2>
          <h2 className="text-2xl font-bold mb-2">Have Questions?</h2>
          <p className="text-gray-700 mb-2 text-lg">{data.secPage_ParaData2}</p>
          <h2 className="text-2xl font-bold mb-2">Reach Us</h2>
          <p className="text-gray-700 mb-1"><span>Email: </span>info@gmail.com</p>
          <p className="text-gray-700 "><span>Phone:</span> XXXX-XXXX-XX</p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
