
import Link from 'next/link'; 
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FiHome, FiShoppingBag, FiGrid,FcServices } from 'react-icons/fi';
import CollectionsPage from './CollectionsPage';
import { IconContext } from 'react-icons'; // Import IconContext
import { GrServices } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";

// const navLinks = [
//   { name: t('home'), href: '/' },
//   { name: t('categories'), href: '/collections', collapsible: true },
//   { name: t('ourServicePartner'), href: '/#servicepartner' },
//   { name: t('services'), href: '/#services' },
//   { name: t('testimonial'), href: '/#testimonial' },
//   { name: t('gallery'), href: '/gallery' },
//   { name: t('Feedback'), href: '/feedback' },

 
  
// ];

const BottomNavigation = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState('');
  console.log("currentTab778",currentTab);
  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('categories'), href: '/collections', collapsible: true },
    // { name: t('ourServicePartner'), href: '/#servicepartner' },
    // { name: t('services'), href: '/#services' },
    // { name: t('testimonial'), href: '/#testimonial' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('Feedback'), href: '/feedback' },
  
   
    
  ];

  const bottomTabs = [
    { title:  t('home'), url: '/', Icon: FiHome },
    { title: t('mob_head.s8'), url: '/#collections', Icon: FiGrid },  // Note the URL with a hash
    { title: t('services'), url: '/#services', Icon: GrServices },
    { title: t('servicePartner'), url: '/#servicepartner',Icon:FaHandshake },

    // { title: 'Services', url: '/#services', Icon: FiShoppingBag },
  ];

  

  const handleTabClick = (url) => {

    // console.log("gssbTBA",url);
    // console.log(`Navigating to: ${url}`); // Log the URL to the console
    setCurrentTab(url); // Update currentTab state
  };

  return (
    <>
      

<div className="fixed bottom-0 left-0 right-0 z-[9999] h-18 bg-white-500 drop-shadow-[0_-15px_20px_rgba(0,0,0,0.10)] lg:hidden p-4">
    
      <ul className="flex h-full">
        {bottomTabs.map((tab, index) => (
          <li key={index} className="flex-1">
            <Link href={tab.url}>
              <a
                className={`flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                  currentTab === tab.url ? 'text-violet-700' : ''
                }`}
                onClick={() => handleTabClick(tab.url)}
              >
                <IconContext.Provider
                  value={{ color: currentTab === tab.url ? 'blue' : 'red', size: '1.2rem' }}
                >
                  <div className="flex flex-col items-center">
                    <tab.Icon />
                    <span className="mt-1">{tab.title}</span>
                  </div>
                </IconContext.Provider>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  

      {currentTab === '/#collections' && (  // Using the hash for 'collections'
        <CollectionsPage
          navLinks={navLinks}
          onPageClose={() => setCurrentTab('')}
        />
      )}
    </>
  );
};

export default BottomNavigation;
