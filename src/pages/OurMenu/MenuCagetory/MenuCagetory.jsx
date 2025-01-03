import PrimaryBtn from '../../../components/Button/PrimaryBtn';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCagetory= ({items, banner, bgImage}) => {
  
    return (
        <>
        {
            banner=== true ?
            <div className='my-12'>

                <Cover 
                bgImage={`${bgImage}` }
                title='desserts' 
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
        <PrimaryBtn btnLabel='ORDER YOUR FAVOURITE FOOD'/>
            </>
    );
};

export default MenuCagetory;