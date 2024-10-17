import React from "react";
import SecPageComponents from "../components/ImageText";
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.webp'

const Our_Mission_Data = {
  secPage_ParaData1:
    "At Shareplate, our mission is to combat food insecurity by redistributing surplus food from restaurants, cafes, and other hospitality establishments to NGOs that help feed communities in need. By creating an easy-to-use platform that connects these food providers with organizations addressing hunger, we aim to make sure that no meal goes to waste.",

  title2: "The Problem",
  secPage_ParaData2:
    "Every day, the hospitality industry generates a significant amount of leftover food. Yet, much of this food ends up being wasted due to the lack of coordination between food providers and NGOs. Without a centralized platform to facilitate communication and logistics, a valuable resource that could help feed countless individuals is often lost.",
};

const OurMission = () => {
  return (
    <>
      <SecPageComponents
        image1={img12}
        image2={img11}
        title1={Our_Mission_Data.title1}
        title2={Our_Mission_Data.title2}
        para1={Our_Mission_Data.secPage_ParaData1}
        para2={Our_Mission_Data.secPage_ParaData2}
        button2="false"
        button1_text="JOIN AS FOOD PROVIDER"
      />
    </>
  );
};

export default OurMission;
