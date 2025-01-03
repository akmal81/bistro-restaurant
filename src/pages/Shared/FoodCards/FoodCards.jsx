import React from 'react';
import SecondaryBtn from '../../../components/Button/SecondaryBtn';

const FoodCards = ({ item }) => {
    return (
        <div className='bg-dark7 flex flex-col justify-between relative'>

            <img src={item.image} className='w-full' alt="" />
            <p className='absolute right-4 top-4 bg-black text-white py-2 px-4'> {item.price} $ </p>
            <div className='p-8  flex-grow flex flex-col'>

                <h3 className='text-center text-2xl font-semibold'>{item.name}</h3>
                <p className='text-center'>{item.recipe}</p>
                <div className='mt-auto'>
                    <SecondaryBtn btnLabel='add to cart' />
                </div>
            </div>
        </div>
    );
};

export default FoodCards;