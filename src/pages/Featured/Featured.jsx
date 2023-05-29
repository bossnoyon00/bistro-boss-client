import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featured from '../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item  bg-fixed text-white pt-8 my-10">
            <SectionTitle subHeading={"Check it Out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pt-12 pb-20 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:m-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis quod. Adipisci quaerat facilis veritatis suscipit fuga rerum veniam saepe. Beatae recusandae blanditiis nihil voluptates ex, sed rerum officiis voluptatem minus vel odit provident fugiat explicabo laudantium expedita delectus voluptas accusantium molestias totam labore iure debitis. Voluptates repellendus quae similique.</p>

                    <button className="btn mt-4 border-0 border-b-4 btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;