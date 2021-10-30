import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";

// Import Swiper styles
// import "swiper/css";
import "swiper/swiper-bundle.css";
import "./styles.css";
// import "swiper/swiper.min.css";
// import styles from "./styles.less";

const SwiperExample = () => {
  SwiperCore.use([EffectFade, Autoplay, Pagination]);
  const cus = {
    ...{
      params: {
        pagination: {
          clickable: true,
          totalClass: "swiper-pagination-total",
          type: "bullets",
        },
      },
    },
  };
  console.log("Pagination", Pagination);
  return (
    <Swiper
      // autoplay={{
      //   delay: 1000,
      //   disableOnInteraction: false,
      // }}
      effect="fade"
      loop
      pagination={Pagination}
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <SwiperSlide>
        <p style={{ background: "blue", color: "#fff" }}>Slide 1</p>
      </SwiperSlide>
      <SwiperSlide>
        <p style={{ background: "red", color: "#fff" }}>Slide 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <p style={{ background: "green", color: "#fff" }}>Slide 3</p>
      </SwiperSlide>
      <SwiperSlide>
        <p style={{ background: "purple", color: "#fff" }}>Slide 4</p>
      </SwiperSlide>
      <SwiperSlide>
        <p style={{ background: "blue", color: "#fff" }}>Slide 5</p>
      </SwiperSlide>
      <SwiperSlide>
        <p style={{ background: "blue", color: "#fff" }}>Slide 6</p>
      </SwiperSlide>
      <SwiperSlide>
        <p style={{ background: "blue", color: "#fff" }}>Slide 7</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperExample;
