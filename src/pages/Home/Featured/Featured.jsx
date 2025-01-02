import SectionTitle from "../../../components/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import SecondaryBtn from "../../../components/Button/SecondaryBtn";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";

const Featured = () => {
    return (
        <section className="mt-32 bg-featured bg-no-repeat bg-cover bg-fixed bg-center">
            <div className="w-full h-full backdrop-brightness-50 bg-black/25 py-32">
                <div className="w-11/12 lg:w-8/12 mx-auto">
                    <SectionTitle title='from our menue' subTitle='Check it out' color='white' />
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                        <div className=" w-2/3 lg:w-1/2">
                            <img src={featuredImage} alt="" />
                        </div>
                        <div className="text-white  w-2/3 lg:w-1/2">
                            <p className="text-2xl">March 20, 2023</p>
                            <p className="text-2xl uppercase">WHERE CAN I GET SOME?</p>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <PrimaryBtn btnLabel='Read more' color='white' />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Featured;