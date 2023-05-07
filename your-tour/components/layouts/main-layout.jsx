import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import MouseFollower from '@components/mouse-follower/mouse-follower';
import gsap from 'gsap';
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
      
      MouseFollower.registerGSAP(gsap);
      const cursor = new MouseFollower({});
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
