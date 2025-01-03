import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ title, subTitle, body, bgImage }) => {
    return (
        <div className={`
        ${bgImage}
        bg-no-repeat 
        bg-cover 
        bg-center ${body ? 'min-h-[350px] lg:h-[700px]' : 'min-h-[400px] lg:h-[800px]'}
       `}>
            <div className='w-full h-full bg-black/0 backdrop-brightness-50 flex items-center justify-center'>
                <div
                    className='w-11/12 
            lg:w-8/12 
            mx-auto  
            bg-black/60 
            min-h-[300px] 
            lg:min-h-[450px] 
            flex flex-col 
            items-center 
            justify-center
            space-y-2'>
                    <h2 className='text-8xl font-cinzel text-white'>{title}</h2>
                    <p className={`
                    text-white 
                    text-center 
                    w-2/3 
                     ${body ? '' : 'font-cinzel text-2xl'}
                    `}>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;