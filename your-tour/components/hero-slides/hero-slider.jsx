import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import IconChevronRight from '@components/icons/ic-chevron-right';
import Hexagon from '@components/common/hexagon';
import heroSliderImage1 from '../../assets/images/hero-slider-4.png';
import heroSliderImage2 from '../../assets/images/hero-slider-1.png';
import heroSliderImage3 from '../../assets/images/hero-slider-3.png';
import heroSliderImage4 from '../../assets/images/hero-slider-2.png';
import LogoLarge from '@components/icons/logo-large';

const IMAGES = [heroSliderImage1, heroSliderImage2, heroSliderImage3, heroSliderImage4];

const HeroSliderNavigation = () => (
   <div className="hero-slider__navigation">
      <div id="prev-btn" data-cursor-text="Prev">
         <IconChevronRight className="icon" />
      </div>
      <div id="next-btn" data-cursor-text="Next">
         <IconChevronRight className="icon" />
      </div>
   </div>
);

const HeroSliderPagination = () => <div className="hero-slider__pagination" />;

export default function HeroSlider() {
   const pagination = {
      el: '.hero-slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
         return '<a class="' + className + '">0' + (index + 1) + '</a>';
      },
   };

   return (
      <section className="hero-slider__container">
         <div className="hero-slider__hexagon-container">
            <div className="hero-slider__hexagon__inner">
               <div
                  className="hero-slider__hexagon-group hexagon-group"
                  data-aos="zoom-in"
               >
                  <Hexagon className="hex1" />
                  <Hexagon className="hex2" size="s" />
                  <Hexagon className="hex3" size="m" />
               </div>
               <div
                  className="hero-slider__hexagon-group2 hexagon-group2"
                  data-aos="zoom-in"
               >
                  <Hexagon className="hex1" size="s" />
                  <Hexagon className="hex2" size="m" />
               </div>
            </div>
         </div>
         <Swiper
            loop
            className="hero-slider"
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            pagination={pagination}
            navigation={{
               nextEl: '#next-btn',
               prevEl: '#prev-btn',
            }}
         >
            {IMAGES.map((img) => (
               <SwiperSlide key={img}>
                  <Image src={img} alt="" layout="fill" />
               </SwiperSlide>
            ))}
         </Swiper>

         <div className="hero-slider__content">
            <HeroSliderPagination />
            <h1 style={{
               width : '519px', 
               height: '133px',
               fontSize: '100px',
               alignItems: 'center',
               display: 'flex'
            }}
            >
               YOURTOUR
            </h1>
            {/* <LogoLarge data-aos="fade-up" data-aos-duration="500" className="logo" /> */}
            <p
               data-aos="fade-up"
               data-aos-anchor=".logo"
               data-aos-duration="500"
               data-aos-delay="100"
               className="subtitle textWrapper"
            >
               Go Every Where You Want
            </p>
         </div>
         <HeroSliderNavigation />
      </section>
   );
}
