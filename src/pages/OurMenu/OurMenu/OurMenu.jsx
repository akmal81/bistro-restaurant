
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCagetory from '../MenuCagetory/MenuCagetory';

const OurMenu = () => {

    const [menu] = useMenu();
  
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

  

    return (
        <>
            <Helmet>
                <title>Our Menu || Bistro Boss</title>
            </Helmet>
            <Cover title='our menu' subTitle={'Would you like to try a dish?'} bgImage='bg-ourMenuBanner' body={false} />
            <SectionTitle title="today's offer" subTitle="Don't miss it" />
            <MenuCagetory items={offered} />
            <MenuCagetory items={dessert.slice(0, 6)} banner={true}  bgImage='bg-intro'/>
            <MenuCagetory items={soup.slice(0, 6)} banner={true}  bgImage='bg-intro'/>
            <MenuCagetory items={salad.slice(0, 6)} banner={true}  bgImage='bg-intro'/>
            <MenuCagetory items={pizza.slice(0, 6)} banner={true}  bgImage='bg-intro'/>
        </>
    );
};

export default OurMenu;