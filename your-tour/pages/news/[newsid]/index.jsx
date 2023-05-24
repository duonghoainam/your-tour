import { NewsDetailsCard } from '@components/admin/news/news-details';
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
import IconHexagonSmall from '@components/icons/ic-hexagon-small';
const NewsDetail = () => {
   const router = useRouter();
   const { newsid } = router.query;

   return (
    <>
         <div className="news-banner__container">
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
                        <h2 data-aos-delay="500">13/06/2022</h2>
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
                                 <p>Lalak Forest</p>
                              </div>
                           </div>
                        </h3>
                     </div>
                    </div>
                </div>
            </div>
            <p className="blog-detail-text">
               A dark-water swamp nestled in the Labi Hills Forest Park beckons hikers and nature-lovers to stop and wonder at its landscape and what lies beneath the still waters speckled with clumps of waving weeds. Luagan Lalak, mysterious and imposing, is a placid habitat for a collection of fauna and flora, and a photographers’ muse.
               The Luagan Lalak Forest Recreation Park is in the Belait District, about 25 kilometres on the Labi road after the turnoff from the highway. The park covers an area of 270 hectares within the Labi Hills Forest Reserve. Access to the park is from the car park by the roadside, down a concrete stairway. It is a quiet location but not deserted, as there is an office for the park supervisor across the park entrance with clean restrooms attached.
            </p>

            <iframe
               className='blog-detail-video'
               width={780}
               height={600}
               style={{margin: "20px auto", display: 'block'}}
               src={`https://www.youtube.com/embed/GFAVHcQJA9A`}
               // src={`https://www.youtube.com/v/${item.data.youtube_link}`}
               title={`https://www.youtube.com/embed/bjt1jZfTCBc`}
            ></iframe>

            <p className="blog-detail-text">
               If you have never been to Luagan Lalak, a trip before sunrise is a good start. The cool morning air, the tranquility of the location, and the possibility of having the whole place to yourself, is an experience to aim for.  At 6 a.m. in early August, the sun is not out yet and the sky is a shade of royal blue that turns lighter as the minutes pass. With the help of the light from a phone, you can make your way down the steps to the beginning of a walkway that leads to a solid gazebo with wooden benches. The path branches into 2 paths midway, both ending in bellies of gazebos too. This is the network of walkways that were once wooden planks and dilapidated but now replaced by a sturdy concrete structure fashioned to look like a wooden bridge. At this hour, the place is still and silent, save for the calls of wild birds and the occasional ‘plonk’ of fish jumping in the water. Within 15 minutes, the sky will brighten enough to reveal the full view of these structures on Luagan Lalak.
               {newsid}
            </p>
            
            <img className='blog-detail-image' rel="" src="https://wiki-travel.com.vn/uploads/picture/camnhi-221501111520-Cong-vien-Quoc-gia-Ulu-Temburong.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>
            
            <p className="blog-detail-text">
            The park is part of the Labi Hills Forest Reserve, a pristine and protected site for its nature, plants, and animals. At the centre of this park is Luagan Lalak, an alluvial freshwater swamp filled by rain water. ‘Luagan’ means ‘non-flowing body of water’ in the Malay language. The water is a breeding ground for the Striped snakehead fish, a species valued and eaten by the locals as they believe it is good for healing wounds, healthy skin and joints, and anti-inflammatory benefits. These waters, however, are not safe for swimming or boating, and there are enough signages warning against doing so, as its calm surface occasionally hides a saltwater crocodile or two, moving surreptitiously in search of food in these waters rich with organisms.<br/><br/>
            You can walk along the banks surrounding the lake and if you’re lucky, you might spot some of the land mammals which are normally shy and elusive but have been seen in this park. The Sunda pangolin, the red langur or red leaf monkey, the colugo or flying lemur and the Horsfield’s tarsier, are all known to inhabit this lush, undisturbed forest. Birdwatchers often descend onto this lake to observe and capture images of the endemic and migratory birds that stopover. It is a quiet, birding world where one can spot such beautiful species as Black-and-yellow Broadbill, Black-and-red Broadbill, Green Broadbill, Yellow-rumped Flowerpecker, Garnet Pitta, Argus Pheasant, Storm Stork, Bornean Bristlehead, Trogons, Rhinoceros Hornbill, Slaty Woodpecker, Crested Fireback, Red-billed Malkoha, Common Kingfisher, Buffy Fish Owl and more. On a fine sunny day, the gazebos provide much-needed shelter from the heat and it won’t be a bad idea to park yourself there in the late afternoon when it is cooler with some snacks and drinks, watch the birds flutter and forage, and just enjoy the peaceful scene while you wait for the sun to set.<br/><br/>
            Photographers will find Luagan Lalak an intriguing landscape with many moods. In the early morning before sunrise, thick fog rolls in towards the centre of the lake, giving it an ethereal, otherworldly aesthetic. In the drier months, the water recedes drastically – revealing islands of Lepironia sedges or purun, as they are known locally, a prolific reed with multiple uses – and the place looks more like a field with pools of water than a lake. During the wet season, rain fills up the swamp and covers all the vegetation, creating a dark-water lake so still that it mirrors everything above the water. Visiting at different times of the year will give different sceneries. In the darkness of the night, the park has another winning side. As it is located a good distance from populated areas, the wide, open space over the lake and the lack of light is an advantage for stargazing. Between March and September, the Milky Way’s core is visible in the night sky, tempting stargazers with great views of the constellations and fantastic opportunities for starry photographs.        
            </p>
            
            <img className='blog-detail-image' rel="" src="https://www.bruneitourism.com/wp-content/uploads/2022/10/labiheader-1.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            Recent upgrades to the park include 72 new signages installed throughout the area, some of which are useful guidelines to help visitors navigate and use the park, and others have informative data to enlighten visitors on the wild inhabitants and vegetation of the park. These new signs are part of the Forestry Department’s goal to make visits to Luagan Lalak educational as well as entertaining, and foster an understanding of the flora and fauna that are part of our rainforest’s eco-system.<br/><br/>
            As you walk along the paths, look out for the ground signages. If you are wondering about some of the vegetation and lifeforms that you will encounter along the walking trails on the banks of the lake, these helpful signs on the ground with the common and scientific names can help you identify them along with some general information. One can learn about ferns, termites and various local plants such as tongkat ali, rengas, kulimpapa and simpur, Brunei’s national flower.<br/><br/>
            There are 15 signages affixed onto the handrails of the walkways which carry interesting bits of information about the commonly-spotted animals and birds in the area: regions where they can normally be found, their diet, their habitat, characteristics, features, skills and the calls they make to communicate. One can learn that the red leaf monkey is also known as a cikok in Brunei and their diet consists of fruits, seeds, leaves and flowers, and that they spend most of their time in the canopy of dipterocarp trees; and flying lemurs don’t actually fly but they glide with their patagium (the membrane between their limbs) for up to 200 metres between trees. The bird signages even include the specific sounds that the birds make so you can listen out for their calls and try to identify their species. One can certainly learn a great deal on a walkabout around the lake.<br/><br/>    
            As with all protected places, enjoying these spaces must come with responsibility – a mentality vital for the conservation of the environment and the inhabitants of this park. Some important signages are erected to remind visitors of the simple ways in which they can help. Litter, in particular single-use plastics, discarded randomly, doesn’t just ruin the park’s natural beauty but causes harm to the animals too, and make conservation harder for the park authorities.
            </p>

            <ScrollToTop></ScrollToTop>
            <h2 style={{margin:20}}>More blogs</h2>
            <SomeTour/>
    </>
   );
};
NewsDetail.Layout = MainLayout;
export default NewsDetail;
