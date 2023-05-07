/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import IconLogo from '@components/icons/logo';
import ActiveLink from '@components/active-link/active-link';
import IconNext from '@components/icons/ic-next';
import IconLogoRight from '@components/icons/ic-logo-white';
import IconFacebook from '@components/icons/ic-fb';
import IconTwitter from '@components/icons/ic-twitter';
import IconLinkedIn from '@components/icons/ic-linkedin';
import ContactWithUs from '@components/contact-with-us/contact-with-us';

export default function Footer() {
   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   };

   return (
      <footer className="footer-container">
         <div className="footer-content-container" data-cursor="-inverse">
            <div className="row footer-content">
               <div className="Hiven-info">
               <Link href="/">
                  <a
                     className="logo"
                  >
                     <IconLogo />
                     <h2>YOURTOUR</h2>
                  </a>
               </Link>
                  <h3>20 Pasteur Street</h3>
                  <h3>District 1</h3>
                  <h3>Ho Chi Minh City</h3>
               </div>

               <div className="link-group">
                  <div className="quick-link">
                     <h6>QUICKLINK</h6>
                     <ul className="footer-links">
                        <li>
                           <a
                              href="/"
                              className="translate-btn"
                              data-text="Home"
                              data-cursor="-opaque"
                           >
                              <span>Home</span>
                           </a>
                        </li>
                        <li>
                           <a
                              href="/contact"
                              className="translate-btn"
                              data-text="Contact"
                              data-cursor="-opaque"
                           >
                              <span>Contact</span>
                           </a>
                        </li>
                        <li>
                           <a
                              href="/about-us"
                              className="translate-btn"
                              data-text="About Us"
                              data-cursor="-opaque"
                           >
                              <span>About</span>
                           </a>
                        </li>
                        <li>
                           <a
                              href="/news"
                              className="translate-btn"
                              data-text="New"
                              data-cursor="-opaque"
                           >
                              <span>Blog</span>
                           </a>
                        </li>
                        <li>
                           <a
                              href="/tour"
                              className="translate-btn"
                              data-text="Tour"
                              data-cursor="-opaque"
                           >
                              <span>Travel</span>
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div className="contact">
                     <h6>CONTACT</h6>
                     <ul className="footer-links">
                        <li>
                           <a
                              href="tel:+12 3456 7890"
                              className="translate-btn"
                              data-text="+65 6645 3838"
                              data-cursor="-opaque"
                           >
                              <span>+12 3456 7890</span>
                           </a>
                        </li>
                        <li>
                           <a
                              href="mailto:hoainamum@gmail.com"
                              className="translate-btn"
                              data-text="hoainamum@gmail.com"
                              data-cursor="-opaque"
                           >
                              <span>hoainamum@gmail.com</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="row copy-right-Social">
               <a href="#" className="copyright-text">
                  @ Copyright 2022
               </a>

               <div className="social">
                  <p>Social Media</p>
                  <a
                     href="https://www.facebook.com/"
                     className="social-icon"
                     data-cursor="-opaque"
                  >
                     <IconFacebook />
                  </a>
                  <a
                     href="https://twitter.com/"
                     className="social-icon"
                     data-cursor="-opaque"
                  >
                     <IconTwitter />
                  </a>
                  <a
                     href="https://www.linkedin.com/"
                     className="social-icon"
                     data-cursor="-opaque"
                  >
                     <IconLinkedIn />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
