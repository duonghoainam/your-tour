import Hexagon from '@components/common/hexagon';
import HexagonImage from '@components/hexagon-image/hexagon-image';
import IconHexagonSmall from '@components/icons/ic-hexagon-small';
import IconKKFung from '@components/icons/ic-KK-Fund';
import MainLayout from '@components/layouts/main-layout';
import MoreLink from '@components/more-link/more-link';
import ScrollToTop from '@components/scroll-to-top/scroll-to-top';
import Head from 'next/head';
import { Swiper, SwiperSlide  } from 'swiper/react'
import SwiperButtonNext from './button-swiper-next';
import SwiperButtonPre from './button-swiper-pre'
import BookingForm from '@components/contact-form/booking-form';
import React, {useState} from 'react';

const Booking = () => {
   return (
      <>
         <Head>
            <title>YOURTOUR</title>
            <meta name="description" content="YOURTOUR" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main style={{ height: 'auto' }}>

            <div className="about-us-banner__container">
               <div className="about-us-banner__hexagon-container">
                  <div className="about-us-banner__hexagon__inner">
                     <div
                        className="about-us-banner__hexagon-group hexagon-group"
                        data-aos="zoom-in"
                     >
                        <Hexagon className="hex1" />
                        <Hexagon className="hex2" size="s" />
                        <Hexagon className="hex3" size="m" />
                     </div>
                     <div
                        className="about-us-banner__hexagon-group2 hexagon-group2"
                        data-aos="zoom-in"
                     >
                        <Hexagon className="hex1" size="s" />
                        <Hexagon className="hex2" size="m" />
                     </div>
                  </div>
               </div>
               <div className="container-full">
                  <div className="about-us-banner__inner">
                     <div className="about-us-banner__title" data-aos="fade-up">
                        <h2>Booking</h2>
                        <div className="icon">
                           <IconHexagonSmall width={28} height={32} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <BookingForm />
            
            <ScrollToTop></ScrollToTop>
         </main>
      </>
   );
};
Booking.Layout = MainLayout;

export default Booking;
