import React from 'react';

const ServicesFeatures = ({ features }) => {

    return (
        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
            {features.map((feature, index) => (
                        <li key={index} className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-[#818181] sm:h-5 sm:w-5 md:h-6 md:w-6"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            {feature}
                        </li>
            ))}

        </ul>
    );
}
 
export default ServicesFeatures;