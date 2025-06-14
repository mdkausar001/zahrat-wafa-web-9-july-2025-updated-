import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { FaBeer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { MdReviews } from "react-icons/md";

import { AiOutlineProduct } from "react-icons/ai";

// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";
import Logo from "../../public/assets/zahra/logo.png";
//
import { useFormPopup } from "../FormPopUpContext";
import LanguageSwitcher from "../Arabicswitch/arabic";

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const { openPopup } = useFormPopup();
  //
  const router = useRouter();
  const { pathname } = router;


  const { t } = useTranslation();

  console.log("activeLink", activeLink)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <Logo className="h-8 w-auto" /> */}
            <a href="/">

              <Image
                src={Logo}
                width={100}
                height={60}
                alt="Zahrat"
              />
            </a>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
          {/* <Link href={'/home'}   */}
                    <a href="/"

           onSetActive={() => {
            setActiveLink("about");
          }}
          className={
            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "about"
              ? " text-orange-250 animation-active "
              : " text-black-500 hover:text-orange-250 a")
          }
          >

          {/* <a href="/"> */}

            {/* <LinkScroll
              activeClass="active"
              // to="about"
              // spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 a")
              }
            >
              {/* Home */}

              {/* {t('home')}
            </LinkScroll> */} 

                          {t('home')}

            </a>
            {/* </Link> */}
            {/* <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 ")
              }
            >
              
              feature
            </LinkScroll> */}
                        <Link href={'/#services'}>

            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 ")
              }
            >
              {t('services')}
            </LinkScroll>
            </Link>

            <Link href={'/#testimonial'}>
            <LinkScroll
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 ")
              }
            >
              {/* Testimonial */}
              {t('testimonial')}

            </LinkScroll>
            </Link>
            <Link href={'/#servicepartner'}>

<LinkScroll
              activeClass="active"
              // to="client"
              // spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("client");
              }}

              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "client"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 ")
              }
            >
              
              {t('ourServicePartner')}

              </LinkScroll>
            </Link>

            {/* href="/gallery */}
            <Link href="/gallery">

            <LinkScroll
              activeClass="active"
              to="/gallery"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "client"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 ")
              }
            >
              
              {t('gallery')}

            </LinkScroll>
            </Link>
            
            
           
            


          </ul>  
          {/* <div className="col-start-10 col-end-12 font-medium flex  items-center">
            <LanguageSwitcher/>
          </div> */}
          
          {/* <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
           
           
           <a onClick={() => openPopup('https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Services1/formperma/5XiOnmrh038r-XfsyYmZxfEbrlAw_0uyUeWGuSFwcek')
            }>
             
              <ButtonOutline>Book Now</ButtonOutline> </a>
          </div> */}
            <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
      <a
        onClick={() =>
          openPopup(
            "https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Services1/formperma/5XiOnmrh038r-XfsyYmZxfEbrlAw_0uyUeWGuSFwcek"
          )
        }
      >
        <ButtonOutline>{t('bookNow')}</ButtonOutline>{" "}
        
      </a>
      <div className="mx-4">
      <LanguageSwitcher />
      </div>

    </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden  left-0 right-0 z-20 px-0 sm:px-12 shadow-t " style={{bottom:"-1px"}}>
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500 h-16">
            {/* <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-250 text-orange-250"
                  : " border-transparent")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
              {/* <FaHome/> */}
              {/* {t('home')} */}

            {/* </LinkScroll> */} 
            <a href="/"

           onSetActive={() => {
            setActiveLink("about");
          }}
          className={
            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "about"
              ? " text-orange-250 animation-active "
              : " text-black-500 hover:text-orange-250 a")
          }
          >

          {/* <a href="/"> */}

            {/* <LinkScroll
              activeClass="active"
              // to="about"
              // spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 a")
              }
            >
              {/* Home */}

              {/* {t('home')}
            </LinkScroll> */} 

                                        <FaHome/>

                          {t('home')}

            </a>
            {/* <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-250 text-orange-250"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </LinkScroll> */}

            {/* //servcies/ */}

            
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-250 text-orange-250"
                  : " border-transparent ")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}

             <FcServices/>
                {t('services')}
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="client"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("client");
              }}
              // className={
              //   "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              //   (activeLink === "client"
              //     ? " text-orange-250 animation-active "
              //     : " text-black-500 hover:text-orange-250 ")
              // }

              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "client"
                  ? "  border-orange-250 text-orange-250"
                  : " border-transparent")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-5 6v-1a3 3 0 0 1 6 0v1m-6-9c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z"
                />
              </svg> */}
             
<AiOutlineProduct/>
              {/* Client */}
              {t('ourServicePartner')}

            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              // className={
              //   "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              //   (activeLink === "testimoni"
              //     ? "  border-orange-250 text-orange-250"
              //     : " border-transparent ")
              // }

              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-250 text-orange-250"
                  : " border-transparent")
              }
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg> */}
               <MdReviews/>
              {/* Testimonial */}
              {t('testimonial')}
            </LinkScroll>
            {/* <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? "  border-orange-250 text-orange-250"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {/* Testimonial */}
              {/* {t('gallery')}
            </LinkScroll> */}
          </ul> 
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
