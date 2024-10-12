import React from 'react';
import logo from '../assets/background-home.png';

const HeroSection = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center', maxHeight: '90vh' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-start h-full px-4 text-white md:ml-20">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold md:text-6xl">Transforming Surplus <br /> into Support</h1>
                    <p className="mt-4 text-lg md:text-xl">
                        To fight food insecurity by leveraging the surplus <br />food from the hospitality industry.
                    </p>
                    <div className="mt-10 space-x-4">
                        <button className="px-3 py-2 md:px-8 md:py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400">
                            Eternal Merch
                        </button>
                        <button className="px-3 py-2 md:px-8 md:py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400">
                            Eternal Merch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
