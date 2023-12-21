import React from "react";
import "./testimonials2.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./tstyles2.css";
import { EffectCards } from "swiper/modules";
import { useSelector } from "react-redux"; // Fix the import

const Testimonials2 = () => {
  const { testimonial } = useSelector((state) => state.template2); // Use correct state property name

  return (
    <section id="testimonials2">
      <h5>Review from Clients</h5>
      <h2>{testimonial.title}</h2> {/* Use correct property name for title */}
      <Swiper
        className="container testimonials2__container"
        // install Swiper modules
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {testimonial.cards.map((testimonial, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={testimonial.avatar} alt="" />
            </div>

            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials2;
