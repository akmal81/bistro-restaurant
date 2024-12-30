import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div>
            <div className='w-fit mx-auto mt-20 mb-12 text-center'>
                <p className='text-xl text-primary italic '>---{subTitle}---</p>
                <h2 className='text-5xl text-black uppercase py-5 mt-4 border-t-2 border-b-2'>{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;