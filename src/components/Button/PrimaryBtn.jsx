import React from 'react';

const PrimaryBtn = ({ btnLabel, color }) => {
    return (
        <div className={`${color?'text-left':'text-center'} mt-12`}>
            <button
                className={`
                uppercase 
            text-xl 
            py-4 px-8
            border-b-4
            ${color ? 'text-white border-white hover:bg-white'
                        : 'text-black border-black hover:bg-black'}
            rounded-lg 
            hover:text-primary
            transition
            duration-200
            `}
            >{btnLabel}</button>
        </div>
    );
};

export default PrimaryBtn;