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

const AboutUs = () => {
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
                        <h2>About Us</h2>
                        <div className="icon">
                           <IconHexagonSmall width={28} height={32} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <p className="intro"  
            style={{
               fontSize: '1em',
               fontWeight: 400,
               lineHeight: 1,
               letterSpacing: '-.003em',
               margin: '20px',
               overflowWrap: 'break-word',
               color: '#181760',
               padding: '22px 100px 22px',
               marginBottom: '40px',
               fontSize: '18px',
               lineHeight: '160%',

               letterSpacing: '0.01em',
            }}>
               We are passionate about travel and sharing the world`&#39;`s wonders on the leisure travel side, and providing corporate travelers hi-touch services to facilitate their business travel needs.
               The Service Professional customer oriented consultation providing hassle free travel. Email capabilities for convenience and prompt booking and information. Creative but persistent approach to search for the most appropriate travel arrangements and identifying the best possible value. Our travel consultants are friendly, professional, and experienced in accommodating both the seasoned traveler and those new to the world of travel. With our “ Know How “, and as a sales agent for almost all major international airlines in Jordan, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility. The Value With our “ Know How “, and as a sales agent for almost all major international airlines in Jordan, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility.
            </p>

            <iframe
               width={780}
               height={600}
               style={{margin: "20px auto", display: 'block'}}
               src={`https://www.youtube.com/embed/bjt1jZfTCBc`}
               // src={`https://www.youtube.com/v/${item.data.youtube_link}`}
               title={`https://www.youtube.com/embed/bjt1jZfTCBc`}
            ></iframe>
            
            <div className="about-us-content">
               <div className="about-us-content__container">
                  <div className="container-full">
                     <div className="about-us-content__inner">
                        <div className="title">
                           <pre data-aos="fade-down">Corporate</pre>
                           <p data-aos="fade-up">Profile</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="about-us-container-full">
               <div className="about-us-group-content">
                  <div className="CJIA" data-aos="fade-up">
                     <div className="CJIA-website"></div>
                     <a href={'https://cjtrade.net/'} target="_blank" rel="noreferrer">
                        <MoreLink text={'View Website'} />
                     </a>
                  </div>
                  <div className="web-intro" data-aos="fade-up">
                     <p className="intro">
                        CJ International Asia (“CJIA”) was established in 2006 to
                        strengthen purchasing competitiveness of CJ Group, the origin of
                        Samsung Group. CJIA has built up trading foundation by purchasing
                        raw sugar, grains, and the major agricultural commodities for and
                        on behalf of the affiliates of CJ Group. CJIA becomes is one of
                        Asia’s leading agricultural traders, thanks to its extensive
                        experience and skilled workforce. Total sales revenue of CJIA
                        reached USD $5.3B with 12.4M Metric Ton in 2021.
                     </p>
                     <p className="intro">
                        The core competency of CJIA is Marketing and Logistics. It is
                        achieved by optimizing the stable demand of CJ Group. Based on
                        this, CJIA has formed partnership and long-term contracts with
                        supplier to maximize mutual interest and achieve sustainable
                        growth.Meanwhile, CJIA has decided to set up a new investment
                        holdings company to invest in tech start-ups in Southeast Asia.
                        The company is looking for start-ups that have great growth
                        potential and trying to invest in them in the early stage.
                     </p>
                  </div>
               </div>
               <div className="about-us-hexagon-container">
                  <HexagonImage source={'/about-us-1.svg'} />
               </div>
               <div className="about-us-hexagon-container">
                  <HexagonImage source={'/black.svg'} />
               </div>
               <div className="about-us-group-content-final">
                  <div className="KKFung" data-aos="fade-up">
                     <IconKKFung></IconKKFung>
                     <h2 className="KKFung-Title">KK Fund Pte Ltd</h2>
                  </div>
                  <a href={'https://www.kkfund.co/'} target="_blank" rel="noreferrer">
                     <MoreLink
                        text={'View Website'}
                        data-aos="fade-up"
                        data-aos-anchor=".KKFung"
                     />
                  </a>
                  <div className="web-intro" data-aos="fade-up">
                     <p className="intro">
                        KK Fund is a venture capital investing in early-stage tech
                        startups operating in the mobile and internet technology space in
                        diverse industry sectors including Blockchain, Internet of Things,
                        Entertainment Tech, FinTech, EdTech, HRTech, Mobility and
                        Healthcare Tech, and Prop Tech and primarily based in Southeast
                        Asia, South Korea, Hong Kong and Taiwan.
                     </p>
                     <p className="intro">
                        KK Fund is an early-stage focused venture capital fund founded in
                        2015 by Kuan Hsu and Koichi Saito. They have a track record of
                        several exits and unicorn investment. Supported by successful
                        entrepreneurs, corporates, and family offices, KK Fund backs solid
                        founders early in their entrepreneurial journey and helps them
                        solve fundamental problems in Southeast Asia.
                     </p>
                  </div>
               </div>
            </div>
            <div className="about-us-social__wrapper">
               <Swiper 
                  onSlideChange={(swiper) => {
                     const leftArrow = document.querySelector(".left  path")
                     const rightArrow = document.querySelector(".right path")

                     if (leftArrow && !swiper.isBeginning) leftArrow.setAttribute("stroke", "white")
                     if (rightArrow && !swiper.isEnd) rightArrow.setAttribute(   "stroke", "white")

                  }}
                  onReachBeginning={() => {
                     const leftArrow = document.querySelector(".left  path")
                     if (leftArrow) leftArrow.setAttribute("stroke", "gray")
                  }} 
                  onReachEnd={() => {
                     const rightArrow = document.querySelector(".right path")
                     if (rightArrow) rightArrow.setAttribute("stroke", "gray")
                  }} 
                  className="carousel" 
                  slidesPerView={1} 
                  breakpoints={{
                     768: {
                        slidesPerView: 3
                     },
                     1024: {
                        slidesPerView: 4
                     },
                     1440: {
                        slidesPerView: 6
                     },
               }}>
                  <SwiperButtonPre/>
                  <SwiperButtonNext/>
                  <SwiperSlide className="card">
                     <div className="about-us-social__wrapper__item-swiper"></div>
                  </SwiperSlide>
                  <SwiperSlide className="card">
                     <div className="about-us-social__wrapper__item-swiper swiper2"></div>
                  </SwiperSlide>
                  <SwiperSlide className="card">
                     <div className="about-us-social__wrapper__item-swiper swiper3"></div>
                  </SwiperSlide>
                  <SwiperSlide className="card">
                     <div className="about-us-social__wrapper__item-swiper swiper4"></div>
                  </SwiperSlide>
                  <SwiperSlide className="card">
                     <div className="about-us-social__wrapper__item-swiper swiper5"></div>
                  </SwiperSlide>
                  <SwiperSlide className="card">
                     <div className="about-us-social__wrapper__item-swiper swiper6"></div>
                  </SwiperSlide>
               </Swiper>
            </div>
            <ScrollToTop></ScrollToTop>
         </main>
      </>
   );
};
AboutUs.Layout = MainLayout;

export default AboutUs;
