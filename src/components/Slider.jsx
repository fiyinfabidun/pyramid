;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function Slider() {
  return (
    <>
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper flex"
      >
        <SwiperSlide className='bg1'></SwiperSlide>
        <SwiperSlide className='bg2 '></SwiperSlide>
        <SwiperSlide className='bg3'></SwiperSlide>
        <SwiperSlide className='bg4'></SwiperSlide>
        <SwiperSlide  className='bg5'></SwiperSlide>
        <SwiperSlide className='bg6'></SwiperSlide>

      </Swiper>
    </>

  )
}

export default Slider