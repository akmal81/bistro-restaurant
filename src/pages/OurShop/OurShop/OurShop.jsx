import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import useMenu from '../../../hooks/useMenu';
import FoodCards from '../../Shared/FoodCards/FoodCards';

const OurShop = () => {

    const [menu] = useMenu();
    console.log(menu)

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');



    return (
        <>
            <Cover title="our shop" subTitle='Whould you like to try a dish?' bgImage='bg-ourShopBanner' />
            <div className='w-8/12 mx-auto mt-32'>
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)} className='text-center'>
                    <TabList className='uppercase text-center decoration-4 transition duration-75'>
                        <Tab >salad</Tab>
                        <Tab >pizza</Tab>
                        <Tab >soups</Tab>
                        <Tab >desserts</Tab>
                        <Tab ></Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 mt-16 gap-8'>
                            {
                                salad.map(item => <FoodCards key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-3 mt-16 gap-8'>
                            {
                                pizza.map(item => <FoodCards key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-3 mt-16 gap-8'>
                            {
                                soup.map(item => <FoodCards key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-3 mt-16 gap-8'>
                            {
                                dessert.map(item => <FoodCards key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                  
                </Tabs>
            </div>
        </>
    );
};

export default OurShop;