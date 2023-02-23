import React from 'react';
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper'

// Import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import electrical from '../assets/electrical.png'
import profile from '../assets/profile.jpeg'
import {cards} from '../data/data.js'
import CatCard from './CatCard';



const SlideShow = () => (
  <div className='pt-10 pb-20 bg-blue-300'>
    <div className="container mx-auto">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={6}
        autoplay={true}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='flex justify-between'
        >
          {
            cards.map(card => (
              <SwiperSlide>
                  <CatCard item={card} key={card.id}/>
              </SwiperSlide>
              
              ))
          }
          
            {/*} <SwiperSlide>
               <Image src={profile} alt='category1' className='w-60 h-60 object-contain'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={profile} alt='category1' className='w-60 h-60 object-contain'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={profile} alt='category1' className='w-60 h-60 object-contain'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={profile} alt='category1' className='w-60 h-60 object-contain'/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={profile} alt='category1' className='w-60 h-60 object-contain'/>
            </SwiperSlide>  */}
           
        </Swiper>
        
    </div>    
  </div>

);

export default SlideShow;
