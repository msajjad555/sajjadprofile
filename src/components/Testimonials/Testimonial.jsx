import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile6.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'Sajjad Abbasi represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. Answers were clear and where necessary detailed enough for us to make informed decisions quickly.'
        
      },
    {
      img: profilePic2,
      review:
        "A fantastic person Sajjad Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.",
    },
    {
      img: profilePic3,
      review:
      "The service is smooth and straightforward from Sajjad. My advisor was helpful. I would recommend deal direct."
    },
    {
      img: profilePic4,
      review:
        " Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal."
      },
  ];

  return (
    <div className="container-fluid">
    <div className="row">
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </div>
    </div>
  );
};

export default Testimonial;
