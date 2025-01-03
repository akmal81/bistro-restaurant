import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle';
import Category from '../Category/Category';
import BistroBossIntro from '../BistroBossIntro/BistroBossIntro';
import PopularMenu from '../PopularMenu/PopularMenu';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home || Bistro Boss</title>
            </Helmet>
            <Banner />
            <main >
                <section className='lg:w-8/12 mx-auto'>
                    <Category />
                    <BistroBossIntro />
                    <PopularMenu />
                    <PhoneNumber />
                    <ChefRecommends />
                </section>
                <Featured />
                <section className='lg:w-8/12 mx-auto'>
                    <Testimonials />
                </section>
            </main>
        </>
    );
};

export default Home;