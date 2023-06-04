import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/project1.png";
import Ecommerce from "../../img/project2.png";
// import HOC from "../../img/hoc.png";
import MusicApp from "../../img/project3.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const darkMode={
    background:'red'
  }
  return (
    <div className="container-fluid">
<div className="row">
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'purple': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://sajjadabbasi2.000webhostapp.com/' target='_blank'> 
          <img src={Sidebar} alt=""  style={{height:250}}/>
          <button className="btn btn-warning m-2 text-center">View Project</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='https://sajadabbasi.000webhostapp.com/' target='_blank'> 
          <img src={Ecommerce} alt=""  style={{height:250}}/>
          <button className="btn btn-warning m-2 text-center">View Project</button>
          </a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href='https://sajjadabbasi1.000webhostapp.com/' target='_blank'> 
          <img src={MusicApp} alt=""  style={{height:250}}/>
          <button className="btn btn-warning m-2 text-center">View Project</button>
          
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
    </div>
      </div>
  );
};

export default Portfolio;
