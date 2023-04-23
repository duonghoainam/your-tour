import MainLayout from '@components/layouts/main-layout';
import Head from 'next/head';

const Home = () => {
   return (
      <>
         <Head>
            <title>YOURTOUR</title>
            <meta name="description" content="YOURTOUR" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>Welcome to Website</div>
      </>
   );
};
Home.Layout = MainLayout;

export default Home;
