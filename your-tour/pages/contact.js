import ContactForm from '@components/contact-form/contact-form';
import ContactInformation from '@components/contact-information/contact-information';
import MainLayout from '@components/layouts/main-layout';
import Head from 'next/head';
import React from 'react';

const Contact = () => {
   return (
      <>
         <Head>
            <title>YOURTOUR</title>
            <meta name="description" content="YOURTOUR" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <ContactInformation />
         <ContactForm />
         
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.719095821047!2d106.65464575801121!3d10.777712232976931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec6fe14f3d9%3A0x39e5ae54610ac84b!2zMzE5IEzDvSBUaMaw4budbmcgS2nhu4d0LCBwaMaw4budbmcgMTUsIFF14bqtbiAxMSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1519274540266"
            width="100%"
            height="450"
         ></iframe>
      </>
   );
};
Contact.Layout = MainLayout;

export default Contact;
