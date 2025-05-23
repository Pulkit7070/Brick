import React, { useState } from 'react';
import DI from "../assets/DI.jpg";
import FT from "../assets/FT.jpg";
import SD from "../assets/SD.jpg";


const OM = () => {
    const [activeOption, setActiveOption] = useState(1);
    const options = [
        { 
            id: 1, 
            title: "AI-Driven Solutions", 
            img: DI,
            content: "A decentralized marketplace transforming real estate into liquid assets, allowing seamless transactions, investment diversification, and smart contract-driven security. Investors can easily trade property-backed tokens and diversify their portfolios."
        },
        { 
            id: 2, 
            title: "Decentralized Innovation", 
            img: FT,
            content: "Empowering individuals to invest in real estate through tokenized assets, enabling fractional ownership and reducing the entry barrier for investors. This innovation democratizes real estate investment, providing liquidity and transparency."
        },
        { 
            id: 3, 
            title: "Smart Automation", 
            img: SD,
            content: "Leveraging AI and blockchain to optimize property management, ensuring efficiency, security, and automation in real estate operations. Smart contracts enable automated lease agreements, reducing disputes and enhancing trust."
        }
    ];

    return (
        <div className='min-h-screen w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 flex flex-col items-center p-4 sm:p-8 gap-12'>
            <div className='text-center space-y-4 sm:space-y-6 max-w-4xl'>
                <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 font-montserrat tracking-tighter'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>
                        Our 
                    </span>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 ml-2 sm:ml-4'>
                        Mission
                    </span>
                </h2>
                <p className='text-gray-300 text-base sm:text-xl md:text-2xl font-light leading-relaxed'>
                Revolutionizing real estate through <span className='bg-purple-500/20 px-1 sm:px-2 mx-1 rounded -lg'
                >blockchain</span>, enabling fractional ownership via <span className='bg-purple-500/20 px-1 sm:px-2 mx-1 rounded -lg'
                >NFT-backed liquid tokens.</span>
                Our platform empowers individuals to invest in property without the need for , and accessibility for all.<span className='bg-blue-500/20 px-1 sm:px-2 mx-1 rounded-lg'
                >large capital, ensuring transparency,security</span>, and accessibility for all.
                </p>
            </div>

            {/* Main Content */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full flex-grow'>
                {/* Clickable Options */}
                <div className='flex flex-row md:flex-col gap-2 order-2 md:order-1'>
                    {options.map(option => (
                        <button
                            key={option.id}
                            onClick={() => setActiveOption(option.id)}
                            className={`p-2 sm:p-4 rounded-2xl transition-all duration-300 ${
                                activeOption === option.id
                                    ? "bg-gradient-to-br from-purple-500 to-blue-500 scale-105 shadow-xl"
                                    : "bg-black/20 hover:bg-purple-500/20 hover:scale-95"
                            }`}
                        >
                            <span className={`text-sm sm:text-xl font-bold ${
                                activeOption === option.id ? "text-white" : "text-gray-300"
                            }`}>
                                {option.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Center Content */}
                <div className='relative max-w-2xl text-center z-10 order-1 md:order-2'>
                    <div className='absolute inset-4 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-30 rounded-3xl'/>
                    <div className='relative bg-black/40 backdrop-blur-xl rounded-3xl p-4 sm:p-8 md:p-12 border border-white/10'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                            {options.find(o => o.id === activeOption)?.title}
                        </h1>
                        <p className='text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4 sm:mb-8'>
                            {options.find(o => o.id === activeOption)?.content}
                        </p>
                        <button className='bg-gradient-to-r from-purple-500 to-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30'>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className='relative w-full sm:w-4/5 md:w-2/3 lg:w-96 order-3'>
                    <div className='relative bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden'>
                        <img
                            src={options.find(o => o.id === activeOption)?.img}
                            alt="Features"
                            className='w-full h-auto object-cover transform transition-all duration-500 hover:scale-110'
                        />
                        <div className='absolute bottom-2 left-2 right-2 bg-black/40 p-2 sm:p-4 rounded-xl backdrop-blur-sm'>
                            <h3 className='text-white font-bold text-sm sm:text-xl'>
                                {options.find(o => o.id === activeOption)?.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OM;