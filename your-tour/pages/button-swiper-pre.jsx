import { useSwiper } from 'swiper/react';

export default function SwiperButtonPre () {
   const swiper = useSwiper();
   return (
      <button
         className="arrow left"
         onClick={() => {
            swiper.slidePrev();

            const leftArrow = document.querySelector('.left  path');
            const rightArrow = document.querySelector('.right path');

            if (rightArrow && !swiper.isEnd) rightArrow.setAttribute('stroke', 'white');

            if (swiper.isBeginning) {
               if (leftArrow) leftArrow.setAttribute('stroke', 'gray');
            } else if (leftArrow) leftArrow.setAttribute('stroke', 'white');
         }}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
         >
            <path
               d="M15.625 2.5L2.125 16L15.625 29.5"
               stroke="gray"
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </button>
   );
};
