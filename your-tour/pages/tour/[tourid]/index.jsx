import { TourDetailsCard } from '@components/admin/news/news-details';
import { DashboardLayout } from '@components/layouts/dashboard-layout';
import MainLayout from '@components/layouts/main-layout';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import ScrollToTop from '@components/scroll-to-top/scroll-to-top';
import Hexagon from '@components/common/hexagon';
import HexagonImage from '@components/hexagon-image/hexagon-image';
import SomeTour from '@components/search-tour/some-tour';
import Link from 'next/link';
import IconHexagonSmall from '@components/icons/ic-hexagon-small';
import { useEffect, useState } from 'react';
import mockApiIoInstance from 'config/mockapi-io';

const TourDetail = () => {
   const router = useRouter();
   const { tourid } = router.query;
   const [tour, setTour] = useState({});

   useEffect(() => { 
      async function fetchData() {
         const res = await mockApiIoInstance.get(`/tours/${tourid}`,{
         });
         const data = res.data
         console.log("Tour", data)
         setTour(data)
         const banner = document.querySelector(".tour-banner__container")
         banner.style.backgroundImage = `url(${data.banner})`
       }
       fetchData();      
   }, [tourid]);
   return (
    <>
         <div className="news-banner__container tour-banner__container">
               <div className="about-us-banner__hexagon-container">
                  <div className="news-banner__hexagon__inner">
                     <div
                        className="news-banner__hexagon-group hexagon-group"
                        data-aos="zoom-in"
                     >
                        <Hexagon className="hex1" />
                        <Hexagon className="hex2" size="s" />
                        <Hexagon className="hex3" size="m" />
                     </div>
                     <div
                        className="news-banner__hexagon-group2 hexagon-group2"
                        data-aos="zoom-in"
                     >
                        <Hexagon className="hex1" size="s" />
                        <Hexagon className="hex2" size="m" />
                     </div>
                  </div>
               </div>
               <div className="container-full">
                  <div className="news-banner__inner">
                     <div className="news-banner__title" data-aos="fade-up">
                        <h2 data-aos-delay="500"></h2>
                        <div className="icon">
                           <IconHexagonSmall width={28} height={32} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="news">
               <div className="container-full">
                  <div className="news__inner">
                     <div className="news__title">
                        <h3>
                           <div className="wordContainer">
                              <div className="word">
                                 <p>{tour?.destination}</p>
                              </div>
                           </div>
                        </h3>
                     </div>
                    </div>
                </div>
            </div>
            <div className="tour-info">
               <div className='tour-row'>
                  <div className="blog-detail-text">Time: <b> {tour?.time}</b></div>
                  <div className="blog-detail-text">Vehicle: <b>{tour?.vehicle}</b></div>
               </div>
               <div className='tour-row'>
                  <div className="blog-detail-text">Departure Place: <b> {tour?.departurePlace}</b></div>
                  <div className="blog-detail-text">Destination: <b>{tour?.name}</b></div>
               </div>
               <div className='tour-bill-table'>
                  <div className='row tour-table-header'>
                     <div className='tour-table-text'><b>DATE</b></div>
                     <div className='tour-table-text'><b>TOUR CODE</b></div>
                     <div className='tour-table-text'><b>ADULT PRICE</b></div>
                     <div className='tour-table-text'><b>CHILD PRICE</b></div>
                     <div className='tour-table-text'></div>
                  </div>
                  <br></br>

                  <hr styled={{borderTop: "3px dashed #bbb"}}></hr>
                  <br></br>
                  <div className='row tour-list-item'>
                     <h2 className='tour-table-text'>02/01/2023</h2>
                     <h2 className='tour-table-text'>STN084-2023-00151</h2>
                     <h2 className='tour-table-text'>10.979.000</h2>
                     <h2 className='tour-table-text'>7.000.000</h2>
                     <Link href='/booking'><button className='tour-table-button'>BOOK NOW</button></Link>
                  </div>
                  <br></br>
                  <div className='row tour-list-item'>
                     <h2 className='tour-table-text'>02/01/2023</h2>
                     <h2 className='tour-table-text'>STN084-2023-00151</h2>
                     <h2 className='tour-table-text'>10.979.000</h2>
                     <h2 className='tour-table-text'>7.000.000</h2>
                     <Link href='/booking'><button className='tour-table-button'>BOOK NOW</button></Link>
                  </div>
                  <br></br>
                  <div className='row tour-list-item'>
                     <h2 className='tour-table-text'>02/01/2023</h2>
                     <h2 className='tour-table-text'>STN084-2023-00151</h2>
                     <h2 className='tour-table-text'>10.979.000</h2>
                     <h2 className='tour-table-text'>7.000.000</h2>
                     <Link href='/booking'><button className='tour-table-button'>BOOK NOW</button></Link>
                  </div>
               </div>
               <div className='blog-detail-text'>
                  <b>What&apos;s good about this tour</b>,<br/>
                   - Departure (Monday): 2, 9/1; 6, 13, 20, 27/2; 6, 13, 20, 27/3/2023 <br/>
                   - Admire Thien Cung cave, Dinh Huong islands - Trong Mai (Ga Choi) - Dog stone.<br/>
                   - Visit Trang An tourist area - which has a spectacular landscape with a system of rivers and streams flowing in the valleys, caves through hydrodynamics and limestone mountains.
                   - Visit border landmarks and Lao Cai international border gate.
               </div>
            </div>

            <iframe
               className='blog-detail-video'
               width={780}
               height={600}
               style={{margin: "20px auto", display: 'block'}}
               src={`https://www.youtube.com/embed/diO662cf_Go`}
               // src={`https://www.youtube.com/v/${item.data.youtube_link}`}
               title={`https://www.youtube.com/embed/bjt1jZfTCBc`}
            ></iframe>

            <p className="blog-detail-text">
            <b>DAY 01: TP. HCM - HANOI - NINH BINH (Lunch, Afternoon)</b>
             In the morning, you gather at Gate D1 - Domestic station - SB.Tan Son Nhat. Saigontourist Travel HDV welcomes you and assists with procedures. <b>Depart for Hanoi (flight VN240 at 7am or 8:30am)</b>. Landing at Noi Bai airport, the car takes the group along the highway to Ninh Binh, visit Bai Dinh pagoda, visit <b> Trang An tourist area</b> - has a spectacular landscape with a system of rivers and streams flowing. overflowing in valleys, trans-water caves, and overlapping limestone mountains. The tourist site is located in the Trang An landscape complex that has been recognized by UNESCO as the first mixed heritage of Vietnam and the Southeast Asian region (meeting both cultural and natural criteria). In the evening, the group is free to explore <b>Hoa Lu&apos;s old town</b>, watching <b>Silver Pagoda&apos;s tower</b> shimmering with lights reflecting on <b>Ky Lan Lake</b>. Overnight in Ninh Binh.
             </p>1

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/Ninhbinh/Trang-An-Ninh-Binh-Vietnam_333452378.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>
            
            <p className="blog-detail-text">
            <b>DAY 02 : NINH BINH - HA LONG (Breakfast, lunch, dinner)</b>
            <br/>In the morning, depart for Hai Phong, continue along the highway to Ha Long. You get on a boat to visit Ha Long Bay - one of the new 7 natural wonders of the world, admire Thien Cung cave, Dinh Huong - Trong Mai (Ga Choi) - Da dog.
             <br/>- Option (at your own expense for travel & sightseeing): Visit Sun World Ha Long Park Tourism - Entertainment Complex, including 2 amusement parks along Bai Chay beach and on Ba Deo mountain. <br/> - Connected by the Queen&apos;s sea-crossing cable car system with 2 world records (the cabin has the largest capacity in the world and the cable car has the world&apos;s tallest pillar above the ground).  <br/>Experience the adventure game, Sun Wheel - one of the tallest wheels in the world,...{tourid}
             </p>
            
            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/Halong/Ha%20Long%20bay_561711448.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>
            
            <p className="blog-detail-text">
            <b>DAY 03 : HA LONG - HANOI (Breakfast, lunch, dinner)</b>
             In the morning, the car takes a stroll around the new coastal route of Ha Long - from <b>Sunworld&apos;s artificial beach</b> to the Hon Gai area temple, looking at the urban area with modern works: Planning Palace - fairs - exhibitions, visit Quang Ninh Museum, ... Depart for Hanoi, visit Thang Long Imperial Citadel, admire Hanoi flagpole. In the evening, the group is free to walk around Hoan Kiem Lake, visit the 36 streets - the old town with typical and traditional occupations of the residents of the Capital. Overnight in Hanoi.
             </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/Hanoi/HaNoi_HoangThanhThangLong_514162882.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>DAY 04 : HANOI - SAPA (Breakfast, lunch, dinner)</b>
             In the morning, the group visited <b>Uncle&apos;s Mausoleum</b>. Depart for Sapa, the group is free to visit <b>stone church, walk around Sapa market</b>... Overnight in Sapa.
             </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/mienbac/sapa/Sapa-City_619336676.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>DAY 05: SAPA - FANSIPAN - LAO CAI (Breakfast, lunch, dinner)</b>
             In the morning, the group arrives at the cable car station <b>Fansipan</b>, you are free to visit the flower garden area, the market...
             - Option (at your own expense): Experience the modern 3-wire cable car system with the feeling of going among the sea of clouds. Visit the Fanpsian spiritual area, overcome nearly 600 steps, conquer the &quot;Roof of Indochina&quot; - Fansipan peak 3,143m.
             In the afternoon, visit the Heaven Gate Tourism Area. Pick up the delegation to Lao Cai. Overnight in Lao Cai.
             </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/mienbac/Lao-cai/Vietnam-International-borders-in-Lao-Cai_654848203.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>DAY 06: LAO CAI - HUNG Temple - NOI BAI - HCMC (Breakfast, Lunch)</b>
             Visit the border landmarks and Lao Cai international border gate. Depart for Phu Tho, visit the monument <b>Hung Temple</b> - visit the Lower Temple, the Middle Temple, the Upper Temple, the Hung King&apos;s Tomb. The car took the group to Noi Bai SB, back to the city. Ho Chi Minh (flight VN219 at 19:00). End program .
             </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/mienbac/Phu-tho/Hung-King-Temple-Phu-Tho-Province_617054405.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>Note:</b><br/>
             - 5K compliance. Apply the regulations of vaccination & COVID TEST RESULTS according to the current regulations of each locality.<br/>
             - In case there is a suspected case or infection with covid 19 in the group, you are responsible for coordinating with Saigontourist and local authorities to implement isolation or treatment measures as prescribed.<br/>
             - Expenses incurred during isolation and treatment, will not be included in the cost of the tour, you will be responsible for the costs incurred<br/>
             - Attractions can be rearranged accordingly while ensuring the full content of each program.<br/>
             - Flight time is subject to change by airline
             </p>

            
            <ScrollToTop></ScrollToTop>
            <h2 style={{margin:20}}>More tours</h2>
            <SomeTour/>
    </>
   );
};
TourDetail.Layout = MainLayout;
export default TourDetail;
