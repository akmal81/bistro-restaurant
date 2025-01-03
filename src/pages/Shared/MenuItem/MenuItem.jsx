import React from 'react';

const MenuItem = ({ item }) => {

    return (
        <div className='flex justify-center items-center gap-6'>

            
                <img src={item?.image} className=' w-[140px] h-[104px] rounded-r-full rounded-b-full' alt="" />
           
            <div>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-cinzel uppercase'>{item?.name}--------</h2>
                    <p className='text-primary text-xl'>{item?.price}</p>
                </div>
                <p>{item?.recipe}</p>

            </div>

        </div>
    );
};

export default MenuItem;