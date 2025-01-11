import React from 'react';
import FoodCards from '../../Shared/FoodCards/FoodCards';

const OrderTabs = ({ items }) => {
    return (
        <div className='grid lg:grid-cols-3 mt-16 gap-8'>
            {
                items.map(item => <FoodCards key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTabs;