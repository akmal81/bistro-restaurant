import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../../assets/home/01.jpg';
import slide2 from '../../../assets/home/02.jpg';
import slide3 from '../../../assets/home/03.png';
import slide4 from '../../../assets/home/04.jpg';
import slide5 from '../../../assets/home/05.png';
import slide6 from '../../../assets/home/06.png';

const Banner = () => {
    return (
        <Carousel
        autoPlay={true}>
            <div className=''>
                <img className='object-bottom' src={slide1} />

            </div>
            <div className=''>
                <img className='object-bottom' src={slide2} />

            </div>
            <div className=''>
                <img className='object-bottom' src={slide3} />

            </div>
            <div className=''>
                <img className='object-bottom' src={slide4} />

            </div>
            <div className=''>
                <img className='object-bottom' src={slide5} />

            </div>
            <div className=''>
                <img className='object-bottom' src={slide6} />

            </div>
        </Carousel>
    );
};

export default Banner;