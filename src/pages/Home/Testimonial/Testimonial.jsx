import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading={"What Our Client Say"} heading={"Testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide review={review} key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h2 className="text-2xl text-orange-500">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonial;