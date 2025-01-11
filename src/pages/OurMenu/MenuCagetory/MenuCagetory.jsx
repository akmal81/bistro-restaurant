import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/Button/PrimaryBtn';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCagetory= ({items, banner, title, bgImage}) => {
  
    return (
        <>
        {
            banner=== true ?
            <div className='my-12'>

                <Cover 
                bgImage={`${bgImage}` }
                title={title} 
                subTitle= 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                body={true}/>
            </div>
            :''
        }
        <div className='w-8/12 mx-auto grid grid-cols-2 gap-6'>
            {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <Link to={`/ourShop/${title}`}>
        <PrimaryBtn btnLabel='ORDER YOUR FAVOURITE FOOD'/>
        </Link>
            </>
    );
};

export default MenuCagetory;