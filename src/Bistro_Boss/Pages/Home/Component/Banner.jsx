import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Pagination, Autoplay, Thumbs } from "swiper/modules";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const items = [
    { id: 1, imgLink: "https://i.ibb.co/N1PftDQ/01.jpg" },
    { id: 2, imgLink: "https://i.ibb.co/x6kHvbp/02.jpg" },
    { id: 3, imgLink: "https://i.ibb.co/HVyT9Lh/03.png" },
    { id: 4, imgLink: "https://i.ibb.co/xfSCF23/04.jpg" },
    { id: 5, imgLink: "https://i.ibb.co/8mwM8MB/05.png" },
    { id: 6, imgLink: "https://i.ibb.co/JCyTk71/06.png" },
  ];

  return (
    <div className="absolute top-0 w-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{delay: 2500, disableOnInteraction: true}}
        pagination={{  clickable: true,  dynamicBullets: true}}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Pagination, Autoplay, Thumbs]}
        className="w-full h-[400px] md:h-[700px]"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img  src={item.imgLink}  alt={`Slide ${item.id}`}  className="w-full h-full object-fill md:object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={2}
        breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            976: {
                slidesPerView: 6,
                spaceBetween: 20,
            }
        }}
        spaceBetween={10}
        watchSlidesProgress
        modules={[Thumbs]}
        className="mySwiper mt-4 max-w-[600px] mx-auto"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="group">
            <img
              src={item.imgLink}
              alt={`Thumbnail ${item.id}`}
              className="w-full h-[56px] object-cover border cursor-pointer brightness-50 group-[.swiper-slide-thumb-active]:brightness-100 transition ease-in-out duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;