import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle';

const Home = () => {
    return (
        <>
            <Banner />
            <main className='lg:w-8/12 mx-auto'>
                <SectionTitle title='order online' subTitle='From 11:00am to 10:00pm' />
            </main>
        </>
    );
};

export default Home;