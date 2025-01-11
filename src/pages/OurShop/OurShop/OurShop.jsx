import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import useMenu from '../../../hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const OurShop = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');



    return (
        <><Helmet><title>Our Shop || Bistro Boss</title></Helmet>
            <Cover title="our shop" subTitle='Whould you like to try a dish?' bgImage='bg-ourShopBanner' />
            <div className='w-8/12 mx-auto mt-32'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='text-center'>
                    <TabList className='uppercase text-center decoration-4 transition duration-75'>
                        <Tab >salad</Tab>
                        <Tab >pizza</Tab>
                        <Tab >soups</Tab>
                        <Tab >desserts</Tab>
                        <Tab >drinks</Tab>
                        <Tab ></Tab>
                    </TabList>
                    <TabPanel>
                       <OrderTabs items={salad}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabs items={pizza}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabs items={soup}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabs items={dessert}/>
                    </TabPanel>
                    <TabPanel>
                    <OrderTabs items={drinks}/>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default OurShop;