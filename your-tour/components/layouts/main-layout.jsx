import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { useEffect } from 'react';

export default function MainLayout({ children }) {
   useEffect(() => {
      (async () => {
      })();

      const userAgent = navigator.userAgent.toLowerCase();

      const isMobile = /iPhone|Android/i.test(navigator.userAgent);
      const isTablet =
         /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
            userAgent
         );

      if (isMobile || isTablet) return;
      return () => {
         cursor.destroy();
      };
   }, []);

   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}
