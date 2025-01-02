import React from 'react';

const SectionTitle = ({ title, subTitle, color }) => {
    return (
        <div>
            <div className={`w-fit mx-auto ${color?'mt-0':'mt-20'} mb-12 text-center`}>
                <p className='text-xl text-primary italic '>---{subTitle}---</p>
                <h2 className={`text-5xl ${color?' text-white': 'text-black'}  uppercase py-5 mt-4 border-t-2 border-b-2`}>{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;