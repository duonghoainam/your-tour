/* eslint-disable @next/next/no-html-link-for-pages */
import IconLogo from '@components/icons/logo';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   };

   return (
      <footer>
         <div>
           Footer
         </div>
      </footer>
   );
}
