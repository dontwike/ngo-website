import React from 'react';
import img2 from '../assets/img2.jpg'
import img1 from '../assets/img1.png'
import img5 from '../assets/img5.jpg'
import img3 from '../assets/img3.jpg'
import ImageSec from '../components/ImageSec';

const HowShareplateWorks = () => {

    const data = {
        para1 : 'Restaurants, cafes, and other hospitality businesses create profiles on our platform, indicating the types and quantities of surplus food they generate.',

        para2 : 'NGOs and food distribution organizations sign up to become part of the Shareplate network, providing details on the communities they serve and their logistics for food ,redistribution.',

        para3 : 'When surplus food is available, our platform automatically matches it with NGOs that can redistribute it to communities in need. The entire process is streamlined, ensuring efficient coordination and minimal food waste.',

        para4: 'Both food providers and NGOs can track the food journey, ensuring transparency and accountability from surplus to recipient.',
    }

    return (
        <section className="bg-white pt-14 mt-14">
            <div className="container mx-auto lg:px-14">
                <h2 className="text-4xl font-bold text-center mb-10">How Shareplate Works</h2>

                <div className="">

                    <ImageSec image={img2} no="1" subhead="Food Providers Sign Up" para={data.para1}/>
                    <ImageSec image={img1} no="2" subhead="NGOs Join the Network" para={data.para2}/>
                    <ImageSec image={img5} no="3" subhead="Seamless Matchmaking" para={data.para3}/>
                    <ImageSec image={img3} no="4" subhead="Real-Time Tracking" para={data.para4}/>

                </div>
            </div>
        </section>
    );
};

export default HowShareplateWorks;
