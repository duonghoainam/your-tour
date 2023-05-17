import HexagonImage from '@components/hexagon-image/hexagon-image';
import IconHexagonSmall from '@components/icons/ic-hexagon-small';
import React from 'react';

export default function ContactInformation() {
   return (
      <section className="contact-info__container">
         <div className="container-full">
            <div className="contact-info__inner">
               <div className="contact-info__content">
                  <div className="title" data-aos="fade-up">
                     <h2>Contact</h2>
                     <div className="icon">
                        <IconHexagonSmall width={28} height={32} />
                     </div>
                  </div>

                  <div className="contact-info__details">
                     <div>Address</div>
                     <div>
                        20 Pasteur Street <br /> District 1 <br /> Ho Chi Minh City
                     </div>
                     <div>Phone</div>
                     <div>+12 3456 7890</div>
                     <div>Email</div>
                     <div>hoainamum@gmail.com</div>
                  </div>
               </div>

               <HexagonImage source={'/contact-banner.svg'} />
            </div>
         </div>
      </section>
   );
}
