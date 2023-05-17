import HexagonImage from '@components/hexagon-image/hexagon-image';
import MoreLink from '@components/more-link/more-link';
import React from 'react';

export default function MissionAndValue() {
   return (
      <div className="mission-value__container">
         <div className="container-full">
            <div className="mission-value__inner">
               <HexagonImage
                  source={
                     'https://c8.alamy.com/comp/W2AN38/summer-sale-social-media-banner-template-tropical-resort-travel-agency-advertising-poster-concept-palm-trees-flip-flops-umbrella-and-cocktails-flat-vector-illustration-with-typography-W2AN38.jpg'
                  }
               />
               <div className="mission-value__content">
                  <div className="mission-value__content-title">
                     <h3 className="section-title" data-aos="fade-up">
                        Sale
                     </h3>
                     <h4
                        className="section-subtitle color--blue"
                        data-aos="fade-up"
                        data-aos-delay="100"
                     >
                        Events and  <br/>& Offers
                     </h4>
                  </div>
                  <div
                     className="mission-value__content-details"
                     data-aos="fade-up"
                     data-aos-delay="100"
                  >
                     <p
                        className="section-description color--blue-grey"
                        style={{ marginTop: 32, marginBottom: 32 }}
                     >
                       Stay tuned for updates on festival information as well as regular promotions to have the best and most economical travel.
                     </p>
                     <MoreLink text={'Find Out More'} link='https://www.facebook.com/profile.php?id=100088668123825'/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
