
import React from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react'
import NewsCard from '@components/news-card/news-card';
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);
export default function SomeTour() {
   return (      
        <div className="some-tour__wrapper">
            <Swiper 
            spaceBetween={20}
            className="carousel" 
            slidesPerView={1}
            pagination={{
              clickable: true
            }}
            breakpoints={{
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                },
                1440: {
                    slidesPerView: 3
                },
                1920: {
                    slidesPerView: 4
                }
            }}>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/0"
                    banner={
                        'https://www.bruneitourism.com/wp-content/uploads/2022/10/labiheader-1.jpg'
                    }
                    date="13/06/2022"
                    title="Lalak Forest"
                    description="A dark-water swamp nestled in the Labi Hills Forest Park beckons hikers and nature-lovers to stop and wonder at its landscape and what lies beneath the still waters speckled with clumps of waving weeds. Luagan Lalak, mysterious and imposing, is a placid habitat for a collection of fauna and flora, and a photographers’ muse. The Luagan Lalak Forest Recreation Park is in the Belait District, about 25 kilometres on the Labi road after the turnoff from the highway. The park covers an area of 270 hectares within the Labi Hills Forest Reserve. Access to the park is from the car park by the roadside, down a concrete stairway. It is a quiet location but not deserted, as there is an office for the park supervisor across the park entrance with clean restrooms attached."
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/1"
                    banner={
                        'https://wiki-travel.com.vn/uploads/picture/camnhi-221501111520-Cong-vien-Quoc-gia-Ulu-Temburong.jpg'
                    }
                    date="19/12/2022"
                    title="Temburong Park"
                    description="Temburong National Park is the first national park to be established in Brunei, protected since 1991. The park is in Temburong District in eastern Brunei, and covers about 40% of the district in the south at 550 square kilometres (210 sq mi). It is within the Batu Apoi Forest Reserve. The park contains unspoiled jungle and is known as the Green Jewel of Brunei, described as the finest example of the sultanate's successful forest protection policy. The principal rivers are the Temburong and Belalong Rivers. It is an important ecotourism centre in Brunei and hosts the Ulu Ulu Resort. The Peradayan Forest Reserve is also located in the district."
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/2"
                    banner={
                        'https://saigontourist.net/uploads/destination/TrongNuoc/Ninhbinh/Trang-An-Ninh-Binh-Vietnam_333452378.jpg'
                    }
                    date="21/12/2022"
                    title="Tri An Lake"
                    description="Located in the Southern part of Dong Nai Province, Tri An Lake is basically a hidden spot that only mostly the locals know about and only a few tourists have heard of. A man-made lake but exuding with natural beauty with its spectacular display of the sun, sky and wind, it could very well pass off as a work of nature."
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/3"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                    date="22/12/2022"
                    title="Thanh An Island"
                    description="Thanh An Island has long been known as a pristine small island near the magnificent Ho Chi Minh City. The island is one of the best places to escape from Ho Chi Minh City where you can experience the pure beauty and find a surprisingly peaceful spot not far from Saigon."
                
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/4"
                    banner={
                        'https://statics.vinpearl.com/hinh-anh-du-lich-nui-ba-den-tay-ninh-4.jpg'
                    }
                    date="23/12/2022"
                    title="Black Virgin Mountain"
                    description="The Mekong Delta is generally a flat region with the exception of the Black Virgin Mountain. The mountain commands everything in its sight and was therefore a strategic location for both sides during the war. In May 1964 the mountain top was assaulted by the Special Forces 3rd MIKE Force and the peak was held by American forces with the 121st Signal Battalion establishing a radio relay station, callsign Granite Romeo Tango, there in February 1966."
                
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/5"
                    banner={
                        'https://media.mia.vn/uploads/blog-du-lich/dua-nhau-di-tron-o-thung-lung-tinh-yeu-tai-da-lat-1634482736.jpg'
                    }
                    date="24/12/2022"
                    title="Valley of Love"
                    description="Just as true love has to surpass several obstacles, the Valley of Love in Dalat had to surpass many challenges in the past in order to gain its rightful name today. In the beginning, the valley was called Vallée D’amour (Valley of Love) by the French before being renamed The Valley of Piece. In 1935, its beauty and captivation persuaded people to once again name it after the most wonderful thing in the world: Love. Thanks to being the honeymoon destination of newly-married couples, this valley is even regarded as Niagara Fall of Vietnam. The Valley of Love today is located 4 miles away from the center of Dalat, the little Paris, on Phu Dong Thien Vuong St."
                
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/6"
                    banner={
                        'https://statics.vinpearl.com/dong-phong-nha-0_1624024966.jpg'
                    }
                    date="27/12/2022"
                    title="Phong Nha Cave"
                    description="You will certainly be impressed with the view inside Phong Nha Cave. This cave is the longest wet cave or river cave in the world. The extremely large subterranean river system is running through the entire cave, however, there are some large dry chambers in the cave which the water doesn’t reach anymore.  The cave is divided into three different sections which are The Entrance Zone, The Twilight Zone and The Dark Zone. Each section is home to different animal species and there is a big difference in temperature."
                
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="/tour/7"
                    banner={
                        'https://fastly.4sqi.net/img/general/1116x400/10819764_Rl424eqBCTFGUSBYFgManD-sSHN0HmmU33iRmdKs1bA.jpg'
                    }
                    date="31/12/2022"
                    title="Tra Su Cajuput Forest"
                    description="Tra Su Forest is an ecosystem of cajuput trees that line dusty dirt paths and home to a large variety of birds and other wildlife. Tra Su Forest, also referred to as Tra Su Flooded Forest, Tra Su Mangrove Forest, Tra Su Bird Sanctuary or Tra Su Melaleuca Forest, Tra Su Cajuput Forest is located in Van Giao Commune, Tinh Bien District, An Giang Province, just about 10km from Cambodian border. For those who love the beauty of wild nature, Tra Su is an ideal place to explore the typical ecosystem of Mekong Delta. In flood season, the forest is dressed up with the appealing look of the green carpet of duckweed covering the whole large area."
                
                />
            </SwiperSlide>
            </Swiper>
            </div>
   );
}
