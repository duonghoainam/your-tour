import MoreLink from '@components/more-link/more-link';
import Counter from '@components/counter/counter';
import React, {useState, useEffect}  from 'react';
import BookingInput from './contact-form-input';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosClient from '@components/api-client/axios-client';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Paypal from '@components/paypal/paypal';
import Link from 'next/link';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const schema = yup.object({
   fullName: yup
      .string()
      .max(255)
      .matches(/^[A-Za-z\s]*$/, 'Only alphabets are allowed for this field')
      .required()
      .label('Name'),
   email: yup.string().email().matches(/^[a-zA-Z0-9\.\@]+$/).max(500).required().label('Email'),
   phoneNumber: yup
      .string()
      .matches(
         /^[\+\-\(\)\d\s]{3,30}$/,
         // /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
         // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
         'Phone number is not valid'
      )
      .max(255)
      .required()
      .label('Phone number'),
   message: yup.string().max(1000).required().label('Message'),
});
export default function BookingForm() {
   const [scriptLoaded, setScriptLoaded] = useState(false)
   // const hiven = useSelector((x) => x.hiven.data);
   // useEffect(() => {
   //    // console.log(window.paypal)
   //    // if (window.paypal){
   //    //    setScriptLoaded(true)
   //    //    return;
   //    // }
   //    const script = document.createElement('script');
    
   //    script.src = "https://www.paypal.com/sdk/js?client-id=AUZuKoBcDY6wWoMFE0YI2rIoNyJvK5nOqYDGVOedplccy3nSmp2Gv9cnGF3ZLhV260NIvvWPft3lYLPy";
   //    script.async = true;
   //    script.onload = () => setScriptLoaded(true)
   //    document.body.appendChild(script);
  
   //    return () => {
   //      document.body.removeChild(script);
   //    }
   //  }, []);
   const [agree, setAgree] = useState(false);
   const checkboxHandler = () => {
       setAgree(!agree);
   }

   const formMethods = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         fullName: '',
         email: '',
         phoneNumber: '',
         message: '',
      },
   });

   const {
      formState: { isSubmitting },
      handleSubmit,
      reset,
   } = formMethods;

   const onSubmit = handleSubmit(async (data) => {
      // console.log(data)
      // const receiveEmail = "hoanamum@gmail.com"//hiven.attributes.contact_form_email_receive;
      // if (!receiveEmail) {
      //    toast.error('Something has error, please try again later.');
      //    return;
      // }

      // try {
      //    const formData = {
      //       name: data.fullName,
      //       email: data.email,
      //       receiveEmail: receiveEmail,
      //       phoneNumber: data.phoneNumber,
      //       message: data.message,
      //    };
      //    const res = await axiosClient.post(`/hello`, formData);

      //    toast.success(
      //       'Your submission has been sent, we will contact you as soon as possible.',
      //       {
      //          autoClose: 8000,
      //       }
      //    );
      //    reset();
      // } catch (error) {
      //    toast.error('Something has error, please try again later.');
      // }
      // AUZuKoBcDY6wWoMFE0YI2rIoNyJvK5nOqYDGVOedplccy3nSmp2Gv9cnGF3ZLhV260NIvvWPft3lYLPyAUZuKoBcDY6wWoMFE0YI2rIoNyJvK5nOqYDGVOedplccy3nSmp2Gv9cnGF3ZLhV260NIvvWPft3lYLPy
   });

   return (
      <div className="contact-form booking-form">
         <div className="container-full booking-container-full">
            <div className="contact-form__inner" style={{width: "70%"}}>
               <div className="contact-form__title">
                  <h3 data-aos="fade-up">Customer info</h3>
               </div>
               <div className="contact-form__container">
                  <FormProvider {...formMethods}>
                     <form onSubmit={onSubmit}>
                        <BookingInput
                           label="Your Name"
                           name="fullName"
                           disabled={isSubmitting}
                        />
                        <BookingInput
                           label="EMAIL ADDRESS"
                           name="email"
                           disabled={isSubmitting}
                        />
                        <BookingInput
                           label="Phone Number"
                           name="phoneNumber"
                           disabled={isSubmitting}
                        />
                        <BookingInput
                           label="Message"
                           name="message"
                           multiline={true}
                           disabled={isSubmitting}
                        />

                        {/* <div className={styles.counter}>
                           <button counter onClick={handleClickSubtract}>
                              -
                           </button>
                           <input
                              className='counterInput'
                              type="number"
                              min={min}
                              max={max}
                              value={count}
                              width="80px"
                              onChange={handleClick}
                           />
                           <button counter onClick={handleClickAdd}>
                              +
                           </button>
                        </div> */}
                        <div className="tour-row members-of-tour">
                           <div className="tour-row members-of-tour-group">
                              <h2>Adults</h2>
                              <Counter></Counter>
                           </div>
                           <div className="tour-row members-of-tour-group">
                              <h2>Children</h2>
                              <Counter></Counter>
                           </div>

                        </div>
                          
                        <div className='term-and-condition-box'>
                           <h1>Terms and Conditions</h1>
                           <h2>Welcome to our website</h2>
                           <p>These terms and conditions outline the rules and regulations for the use of our company.</p>
                           <p>
                              By accessing this website we assume you accept these terms and conditions. Do not continue to use our website
                              if you do not agree to take all of the terms and conditions stated on this page.
                           </p>
                           <p>
                              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
                              all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the
                              Company&apos;s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
                              “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance
                              and consideration of payment necessary to undertake the process of our assistance to the Client in the most
                              appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of provision of the
                              Company&apos;s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the
                              above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as
                              interchangeable and therefore as referring to same.
                           </p>
                           <h2>Cookies</h2>
                           <p>
                              We employ the use of cookies. By accessing our website, you agreed to use cookies in agreement with our
                              company&apos;s Privacy Policy.
                           </p>
                           <p>
                              Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used
                              by our website to enable the functionality of certain areas to make it easier for people visiting our website.
                              Some of our affiliate/advertising partners may also use cookies.
                           </p>
                           <h2>License</h2>
                           <p>
                              Unless otherwise stated, LOPYI and its licensors own the intellectual property rights for all material on our
                              website. All intellectual property rights are reserved. You may access this from our website for your own
                              personal use subjected to restrictions set in these terms and conditions.
                           </p>
                           <p>You must not:</p>
                           <ul>
                              <li>Republish material from our website</li>
                              <li>Sell, rent or sub-license material from our website</li>
                              <li>Reproduce, duplicate or copy material from our website</li>
                              <li>Redistribute content from our website</li>
                           </ul>
                           <p>This Agreement shall begin on the date hereof.</p>
                           <p>
                              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain
                              areas of the website. LOPYI does not filter, edit, publish or review Comments prior to their presence on the
                              website. Comments do not reflect the views and opinions of LOPYI,its agents and/or affiliates. Comments
                              reflect the views and opinions of the person who post their views and opinions. To the extent permitted by
                              applicable laws, LOPYI shall not be liable for the Comments or for any liability, damages or expenses caused
                              and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                           </p>
                           <p>
                              LOPYI reserves the right to monitor all Comments and to remove any Comments which can be considered
                              inappropriate, offensive or causes breach of these Terms and Conditions.
                           </p>
                           <p>You warrant and represent that:</p>
                           <ul>
                              <li>
                                 You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                              </li>
                              <li>
                                 The Comments do not invade any intellectual property right, including without limitation copyright, patent
                                 or trademark of any third party;
                              </li>
                              <li>
                                 The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material
                                 which is an invasion of privacy
                              </li>
                              <li>
                                 The Comments will not be used to solicit or promote business or custom or present commercial activities or
                                 unlawful activity.
                              </li>
                           </ul>
                           <p>
                              You hereby grant LOPYI a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce
                              and edit any of your Comments in any and all forms, formats or media.
                           </p>
                           <h2>Hyperlinking to our Content</h2>
                           <p>The following organizations may link to our website without prior written approval:</p>
                           <ul>
                              <li>Government agencies;</li>
                              <li>Search engines;</li>
                              <li>News organizations;</li>
                              <li>
                                 Online directory distributors may link to our website in the same manner as they hyperlink to the websites
                                 of other listed businesses; and
                              </li>
                              <li>
                                 System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and
                                 charity fundraising groups which may not hyperlink to our Web site.
                              </li>
                           </ul>
                           <p>
                              These organizations may link to our home page, to publications or to other website information so long as the
                              link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the
                              linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.
                           </p>
                           <p>We may consider and approve other link requests from the following types of organizations:</p>
                           <ul>
                              <li>commonly-known consumer and/or business information sources;</li>
                              <li>dot.com community sites;</li>
                              <li>associations or other groups representing charities;</li>
                              <li>online directory distributors;</li>
                              <li>internet portals;</li>
                              <li>accounting, law and consulting firms; and</li>
                              <li>ducational institutions and trade associations.</li>
                           </ul>
                           <p>
                              We will approve link requests from these organizations if we decide that: (a) the link would not make us look
                              unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative
                              records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of LOPYI;
                              and (d) the link is in the context of general resource information.
                           </p>
                           <p>
                              These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does
                              not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and
                              (c) fits within the context of the linking party&apos;s site.
                           </p>
                           <p>
                              If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website,
                              you must inform us by sending an e-mail to our company. Please include your name, your organization name,
                              contact information as well as the URL of your site, a list of any URLs from which you intend to link to our
                              website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                           </p>
                           <p>Approved organizations may hyperlink to our website as follows:</p>
                           <ul>
                              <li>By use of our corporate name; or</li>
                              <li>By use of the uniform resource locator being linked to; or</li>
                              <li>
                                 By use of any other description of our website being linked to that makes sense within the context and
                                 format of content on the linking party&apos;s site.
                              </li>
                              <li>
                                 No use of our company&apos;s logo or other artwork will be allowed for linking absent a trademark license
                                 agreement.
                              </li>
                           </ul>
                           <h2>iFrames</h2>
                           <p>
                              Without prior approval and written permission, you may not create frames around our Webpages that alter in any
                              way the visual presentation or appearance of our website.
                           </p>
                           <h2>Content Liability</h2>
                           <p>
                              We shall not be hold responsible for any content that appears on your website. You agree to protect and defend
                              us against all claims that is rising on your website. No link(s) should appear on any website that may be
                              interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the
                              infringement or other violation of, any third party rights.
                           </p>
                           <h2>Reservation of Rights</h2>
                           <p>
                              We reserve the right to request that you remove all links or any particular link to our website. You approve
                              to immediately remove all links to our website upon request. We also reserve the right to amen these terms and
                              conditions and it&apos;s linking policy at any time. By continuously linking to our website, you agree to be bound
                              to and follow these linking terms and conditions.
                           </p>
                           <h2>Removal of links from our website</h2>
                           <p>
                              If you find any link on our website that is offensive for any reason, you are free to contact and inform us
                              any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you
                              directly.
                           </p>
                           <p>
                              We do not ensure that the information on this website is correct, we do not warrant its completeness or
                              accuracy; nor do we promise to ensure that the website remains available or that the material on the website
                              is kept up to date.
                           </p>
                           <h2>Disclaimer</h2>
                           <p>
                              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions
                              relating to our website and the use of this website. Nothing in this disclaimer will:
                           </p>
                           <ul>
                              <li>limit or exclude our or your liability for death or personal injury;</li>
                              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                           </ul>
                           <p>
                              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are
                              subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including
                              liabilities arising in contract, in tort and for breach of statutory duty.
                           </p>
                           <p id="last">
                              As long as the website and the information and services on the website are provided free of charge, we will
                              not be liable for any loss or damage of any nature.
                           </p>
                        </div>

                        <div>
                           <input type="checkbox" id="agree" onChange={checkboxHandler} />
                           <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
                        </div>

                        {/* <button disabled={isSubmitting} type="submit" id="submit-btn">
                           <MoreLink
                              disabled={isSubmitting}
                              text={`${isSubmitting ? 'CONNECTING TO PAYPAL ...' : 'PAY NOW'} `}
                              padding
                              light
                           />
                        </button> */}
                        <PayPalScriptProvider
                           options={{
                              "client-id": "AUZuKoBcDY6wWoMFE0YI2rIoNyJvK5nOqYDGVOedplccy3nSmp2Gv9cnGF3ZLhV260NIvvWPft3lYLPy",
                           }}
                        >
                           <PayPalButtons
                              // forceReRender={[amount, currency, style]}
                              createOrder={(data, actions) => {
                                 return actions.order
                                       .create({
                                          purchase_units: [
                                             {
                                                   amount: {
                                                      value: "2.00",
                                                   },
                                             },
                                          ],
                                       })
                                       // .then((orderId) => {
                                       //    // Your code here after create the order
                                       //    return orderId;
                                       // });
                              }}
                              // onApprove={function (data, actions) {
                              //    return actions.order.capture().then(function () {
                              //          // Your code here after capture the order
                              //    });
                              // }}
                           />
                        </PayPalScriptProvider>
                        {/* <div id="paypal"></div> */}
                        {/* {scriptLoaded? <Paypal>scriptLoaded</Paypal> : <>scriptLoaded!!!!!</>} */}
                     </form>
                  </FormProvider>
               </div>
            </div>
            <div className='bookDetailsInfo'>
               <img className='booking-detail-image' rel="" src="https://www.bruneitourism.com/wp-content/uploads/2022/10/labiheader-1.jpg" title="Lalak Forest" alt="Lalak Forest"/>
               <div className="infoArea">
                  <Link target="_blank" href="/tour/1"><h1>Lalak Forest</h1></Link>
                  <ul className="list-unstyled">
                     <li><i className="fa fa-barcode" aria-hidden="true"></i>Code
                           <b> STN084-2023-00151</b></li>
                     <li><i className="fa fa-calendar-minus-o" aria-hidden="true"></i>Start date:
                           <b> 02-01-2023</b></li>
                     <li><i className="fa fa-calendar-plus-o" aria-hidden="true"></i>End date:
                           <b> 07-01-2023</b></li>
                     <li><i className="fa fa-calendar" aria-hidden="true"></i>Time:
                           <b> 6 days 5 nights</b></li>
                     {/* <li id="liAdult" className="display-hidden" style="display: list-item;"><i className="fa fa-user-secret" aria-hidden="true"></i>Giá Người lớn
                           :
                           <span><strong>10.979.000</strong> đ</span><span id="adult"> X 3</span></li>
                     <li id="liChild" className="display-hidden" style="display: none;"><i className="fa fa-child" aria-hidden="true"></i>Giá trẻ em
                           :
                           <span><strong>7.000.000</strong> đ</span><span id="child"></span></li>
                     <li id="liInfant" className="display-hidden" style="display: none;"><i className="fa fa-user-times" aria-hidden="true"></i>Giá em bé
                           :
                           <span><strong>3.650.000</strong> đ</span><span id="infant"></span></li>
                     <li id="liExtraServices" className="display-hidden" style="display: list-item;"><i className="fa fa-cart-plus" aria-hidden="true"></i>Dịch vụ cộng thêm
                           :
                           <span><strong id="priceExtraServices">8.000.000</strong> đ</span></li>
                     <li id="liPromotion" className="display-hidden" style="display: none;"><i className="fa fa-minus-square" aria-hidden="true"></i>Mã khuyến mãi
                           :
                           <span><strong id="promotionPrice"></strong> đ</span></li>
                     <li id="liPaymentFee" className="display-hidden">
                           <i className="fa fa-plus-square" aria-hidden="true"></i>Phí thanh toán online
                           :
                           <span><strong id="pricePaymentFee"></strong> đ</span></li> */}
                  </ul>
                  <div className="priceTotal">
                     <h2>Total: <span id="total-price">40.937.000</span>
                           <span style={{fontSize: "16px",
                           color: "#000",
                           fontWeight: 500,
                           lineHeight: "21px",
                           textTransform: "lowercase"}}> đ</span></h2>
                  </div>
                  {/* <div id="prepayment-total" className="prepayment-total display-hidden" style="display: none;">
                     <div className="prepayment-total-title">Thanh toán</div>
                     <div className="prepayment-total-description">Bạn đã chọn hình thức <strong> Đặt cọc 50%</strong></div>
                     <div className="prepayment-total-price">Cần thanh toán:
                           <span id="prepayment-total-price" className="price-amount">20.468.500</span>
                           <span className="price-label"> đ</span>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   );
}
