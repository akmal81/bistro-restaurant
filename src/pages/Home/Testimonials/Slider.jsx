import React from 'react';
import { Rating } from '@smastrom/react-rating'

import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'

const Slider = ({ review }) => {

    console.log(review)
    return (
        <div className='w-10/12 mx-auto text-center flex flex-col gap-5 items-center space-y-6 justify-center'>
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                
                readOnly
            />
            <p className='text-6xl'><FaQuoteLeft /></p>
            <p>{review.details}</p>
            <p className='text-primary mt-2 uppercase text-xl'>{review.name}</p>
        </div>
    );
};

export default Slider;