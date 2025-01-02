import React from 'react';

const SecondaryBtn = ({ btnLabel }) => {
    return (
        <div className='text-center mt-6  flex-grow'>
        <button
            className='
            uppercase 
        text-xl 
        border-b-4
        bg-dark6
        text-primary
        py-4 px-8
        rounded-lg 
        border-primary
        hover:bg-black
        hover:text-primary
        transition
        duration-200
        '
        >{btnLabel}</button>
    </div>
    );
};

export default SecondaryBtn;