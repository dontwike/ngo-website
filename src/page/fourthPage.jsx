import React from "react";
import SecPageComponents from "../components/ImageText";

const fourthPage = () => {
  const data = {
    heading: "Why join Shareplate?",
    image1:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title1: "For Food Providers",
    secPage_ParaData1:
      "Reduce Food Waste: Shareplate helps you turn excess food into a valuable resource for the community.Social Impact: Be part of the movement to reduce hunger and food insecurity. Sustainability: Your participation contributes to a more sustainable, environmentally-friendly hospitality industry.",

    image2:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title2: "For NGOs",
    secPage_ParaData2:
      "Easy Access to Surplus Food: Gain access to regular donations from local food providers. \nStreamlined Coordination: Save time with an efficient system that reduces manual coordination efforts.Expand Your Reach: Serve more people and make a greater impact in your community.",
  };

  return (
    <>
      <SecPageComponents
        heading={data.heading}
        image1={data.image1}
        image2={data.image2}
        title1={data.title1}
        title2={data.title2}
        para1={data.secPage_ParaData1}
        para2={data.secPage_ParaData2}
        button1_text="JOIN AS FOOD PROVIDER"
        button2_text="JOIN AS NGO"
      />
    </>
  );
};

export default fourthPage;
