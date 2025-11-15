import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import ratingStars from "../../../assets/images/rating.svg"


import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    text:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    text:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. Their items are trendy and well-made.",
  },
  {
    id: 4,
    name: "Mooen",
    rating: 5,
    text:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__wrap">
          <h2 className="testimonials__title">OUR HAPPY CUSTOMERS</h2>

          <div className="swiper-arrows">
            <button className="custom-prev"><ArrowLeft/></button>
            <button className="custom-next"><ArrowRight/></button>
          </div>
        </div>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop
          className="testimonials__slider"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <img src={ratingStars} alt="rating"  className="testimonial-card__rating"/>
                <span className="testimonial-card__name">{item.name} <CircleCheck className="verified"/></span>

                <p className="testimonial-card__text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
