import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <section>
           <SectionTitle title='order online' subTitle='From 11:00am to 10:00pm' />
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
               

                <img src={slide1} alt="" className='w-full'/>
                <h4 className='text-5xl text-black text-center -mt-24'>Salad</h4>

            </SwiperSlide>
            
            <SwiperSlide>
                <img src={slide2} alt="" className='w-full'/>
                <h4 className='text-5xl text-black text-center -mt-24'>Salad</h4>
            </SwiperSlide>

            <SwiperSlide>
                <img src={slide3} alt="" className='w-full'/>
                <h4 className='text-5xl text-black text-center -mt-24'>Salad</h4>
            </SwiperSlide>

            <SwiperSlide>
                <img src={slide4} alt="" className='w-full'/>
                <h4 className='text-5xl text-black text-center -mt-24'>Salad</h4>
            </SwiperSlide>

            <SwiperSlide>
                <img src={slide5} alt="" className='w-full'/>
                <h4 className='text-5xl text-black text-center -mt-24'>Salad</h4>
            </SwiperSlide>
        </Swiper>
       </section>
    );
};

export default Category;