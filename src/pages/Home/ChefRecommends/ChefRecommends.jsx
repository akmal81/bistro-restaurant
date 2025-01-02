import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import FoodCards from '../../Shared/FoodCards/FoodCards';

const ChefRecommends = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const ChefRecommends = data.filter(item => item.category === 'offered')
                setMenu(ChefRecommends)
            })
    }, [])
    console.log(menu)
    return (
        <scction>
            <SectionTitle title='chef recommends' subTitle={'Should Try'} />
            <div className='grid grid-cols-3 gap-6'>
                {
                    menu.slice(0,3).map(item => <FoodCards key={item._id} item={item} />)
                }
            </div>

        </scction>
    );
};
export default ChefRecommends;