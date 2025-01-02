import React from 'react';

const MenuItem = ({ item }) => {

    return (
        <div className='flex w-full gap-6 justify-center items-center'>

            <div className='w-[118px] h-[104px]'>
                <img src={item.image} className='object-cover w-full h-full rounded-r-full rounded-b-full' alt="" />
            </div>
            <div>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-cinzel uppercase'>{item.name}------------------</h2>
                    <p className='text-primary text-xl'>{item.price}</p>
                </div>
                <p>{item.recipe}</p>

            </div>

        </div>
    );
};

export default MenuItem;