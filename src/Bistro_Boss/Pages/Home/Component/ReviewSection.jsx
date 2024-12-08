import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';
import ReviewSlide from '../../../AllSlide/ReviewSlide';
import SectionTitle from '../../../AllCommonDiv/SectionTitle';

const ReviewSection = () => {
    return (
        <div className='mt-[97px] max-w-[990px] px-5 xl:px-0 mx-auto'>
            <div className='flex flex-col items-center'>
                <SectionTitle title={"TESTIMONIALS"} subTitle={"What Our Clients Say"}></SectionTitle>
            </div>
            <div className='mt-9'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    476: {slidesPerView: 1.5},
                    768: { slidesPerView: 2 },
                  }}
                >
                  <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
                  <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
                  <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
                  <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewSection;