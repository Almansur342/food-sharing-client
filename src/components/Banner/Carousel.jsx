// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bgimg1 from '../../assets/img1.jpg'
import bgimg2 from '../../assets/img2.jpg'
import bgimg3 from '../../assets/img3.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className=' container px-4 py-10 mx-auto rounded-lg'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded-lg'>
          <Slide
            image={bgimg1}
            text="Give a small! Change a lot.
            Give a helping hand to those who need it!"></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg2} text=
          {
            <>
                We Are{' '}
                <span className='text-[#ffb606]'>Be aHand</span>{' '}
                We Are a Helping Hand.
            </>
        }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg3} text='Build a Beautiful  World.Charity organizations.Your Help Turn Into Smiles.'></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
