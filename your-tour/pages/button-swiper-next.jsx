import { useSwiper } from 'swiper/react';

export default function SwiperButtonNext() {
   const swiper = useSwiper();
   return (
      <button
         className="arrow right"
         onClick={() => {
            swiper.slideNext();

            const leftArrow = document.querySelector('.left  path');
            const rightArrow = document.querySelector('.right path');

            if (leftArrow && !swiper.isBeginning)
               leftArrow.setAttribute('stroke', 'white');

            if (swiper.isEnd) {
               if (rightArrow) rightArrow.setAttribute('stroke', 'gray');
            } else if (rightArrow) rightArrow.setAttribute('stroke', 'white');
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
               d="M2.375 29.5L15.875 16L2.375 2.5"
               stroke="white"
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </button>
   );
};
