import React from 'react';
import SectionTitle from '../../../../AllCommonDiv/SectionTitle';
import OrderOnlineSlide from '../../../AllSlide/OrderOnlineSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const OrderOnline = () => {
    const items = [
        { id: 1, imgLink: "https://i.ibb.co.com/ZfKS31J/slide1.jpg", title: "Salads" },
        { id: 2, imgLink: "https://i.ibb.co.com/SfDdKFd/slide2.jpg", title: "Soups" },
        { id: 3, imgLink: "https://i.ibb.co.com/GpSW1Qf/slide3.jpg", title: "pizzas" },
        { id: 4, imgLink: "https://i.ibb.co.com/YkcRMxH/slide4.jpg", title: "desserts" },
        { id: 5, imgLink: "https://i.ibb.co.com/ZfKS31J/slide1.jpg", title: "Salads" },
    ];
    return (
        <div className='max-w-[990px] px-5 xl:px-0 flex flex-col mx-auto'>
            <div className='flex mx-auto'>
                <SectionTitle title={"ORDER ONLINE"} subTitle={"From 11:00am to 10:00pm"}></SectionTitle>
            </div>
            <div className=''>
            <Swiper
                  spaceBetween={10}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  modules={[Pagination]}
                  className="mySwiper"
                  breakpoints={{
                    320: { slidesPerView: 1.2 },
                    576: {slidesPerView: 2},
                    768: { slidesPerView: 4 },
                  }}
                >
                    {
                        items.map(item => <SwiperSlide key={item.id}><OrderOnlineSlide image={item.imgLink} title={item.title}></OrderOnlineSlide></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;