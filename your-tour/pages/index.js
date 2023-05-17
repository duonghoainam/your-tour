import BusinessArea from '@components/business-area/business-area';
import HeroSlider from '@components/hero-slides/hero-slider';
import InvestmentRegion from '@components/investment-region/investment-region';
import MainLayout from '@components/layouts/main-layout';
import MissionAndValue from '@components/mission-value/mission-value';
import SearchTourHome from '@components/search-tour-home/search-tour-home';
import SomeTour from '@components/search-tour/some-tour';
import Head from 'next/head';

const Home = () => {
   return (
      <>
         <Head>
            <title>YOURTOUR</title>
            <meta name="description" content="YOURTOUR" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <HeroSlider />
         <SearchTourHome />
         <SomeTour />
         <MissionAndValue />
         <BusinessArea />
         <InvestmentRegion />
      </>
   );
};
Home.Layout = MainLayout;

export default Home;
