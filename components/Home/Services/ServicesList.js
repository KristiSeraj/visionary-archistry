import React from 'react';
import ServicesFeatures from './ServicesFeatures';
import { services } from '@/lib/services';

const ServicesList = () => {
    const baseClass = "relative flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-[#818181] border-solid rounded-lg"
    const baseButton = "inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center no-underline border rounded-md cursor-pointer hover:text-white focus-within:text-white sm:text-base md:text-lg";

    return (
        <div id="pricing" className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            {services.map(item => (
                <div key={item.id} className={`${baseClass} ${item.id === 1 ? 'z-10 lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8' : item.id === 3 ? 'z-10 lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8' : 'border-4 bg-white z-20 sm:p-6 md:px-8 md:py-16'}`}>
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        {item.name}
                    </h3>
                    <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            ${item.price}
                        </p>
                        <p className="box-border m-0 border-solid" style={{ borderImage: 'initial' }}>
                            / month
                        </p>
                    </div>
                    <ServicesFeatures features={item.features} />
                    <a href="#" className={`${baseButton} ${item.id === 2 ? 'bg-[#818181] text-white hover:bg-[#5b5b5b] hover:border-[#5b5b5b] focus-within:bg-[#5b5b5b] focus-within:border-[#5b5b5b]' : 'bg-transparent text-[#818181] border-[#818181] hover:bg-[#818181] hover:border-[#818181] focus-within:bg-[#818181] focus-within:border-[#818181]'}`}>
                        Start Now
                    </a>
                </div>
            ))}
        </div>
        
    );
}
 
export default ServicesList;