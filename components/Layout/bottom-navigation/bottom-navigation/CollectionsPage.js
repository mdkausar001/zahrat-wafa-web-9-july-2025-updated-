// // import Link from 'next/link';
// // import { useTranslation } from 'next-i18next';
// // import { FiX } from 'react-icons/fi';
// // // import { Collections } from '@/types';
// // import { NavLink } from '@/components';
// // import { Accordion } from '@/components/ui';




// // interface Props {
// //   navLinks: NavLink[];
// //   // collections: Collections;
// //   onPageClose: () => void;
// // }

// // export const CollectionsPage = ({
// //   navLinks,
// //   collections,
// //   onPageClose,
// // }: Props) => {
// //   const { t } = useTranslation();

// //   return (
// //     <div className="fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
// //       <div className="flex justify-between">
// //         <h2 className="text-xl font-medium">{t('common:collections')}</h2>
// //         <FiX
// //           className="cursor-pointer"
// //           size="1.5rem"
// //           data-testid="close"
// //           onClick={onPageClose}
// //         />
// //       </div>
// //       <ul className="mt-5 flex flex-col px-2">
// //         {navLinks.map((item, index) => (
// //           <li
// //             key={index}
// //             className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
// //           >
// //             {item.collapsible ? (
// //               <Accordion>
// //                 <Accordion.Header>{t(`header:${item.name}`)}</Accordion.Header>
// //                 <Accordion.Body className="px-2 text-sm">
// //                   <ul>
// //                     {collections &&
// //                       collections.map(collection => (
// //                         <li
// //                           key={collection.id}
// //                           className="block border-b border-solid border-neutral-100"
// //                         >
// //                           <Accordion>
// //                             <Accordion.Header>
// //                               {collection.name}
// //                             </Accordion.Header>
// //                             <Accordion.Body className="px-2 text-xs">
// //                               <ul>
// //                                 {collection.children
// //                                   .filter(subCollection =>
// //                                     subCollection.types.includes(
// //                                       item.name === 'men' ? 'MEN' : 'WOMEN'
// //                                     )
// //                                   )
// //                                   .map(subCollection => (
// //                                     <li
// //                                       key={subCollection.id}
// //                                       className="block border-b border-solid border-neutral-100 py-2"
// //                                     >
// //                                       <Link
// //                                         href={`/products/${item.name}/${subCollection.slug}`}
// //                                         onClick={onPageClose}
// //                                       >
// //                                         <h3>{subCollection.name}</h3>
// //                                       </Link>
// //                                     </li>
// //                                   ))}
// //                               </ul>
// //                             </Accordion.Body>
// //                           </Accordion>
// //                         </li>
// //                       ))}
// //                   </ul>
// //                 </Accordion.Body>
// //               </Accordion>
// //             ) : (
// //               <Link
// //                 href={item.name}
// //                 className="block py-4"
// //                 onClick={onPageClose}
// //               >
// //                 <h3>{t(`header:${item.name}`)}</h3>
// //               </Link>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };


// import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
// import { FiX } from 'react-icons/fi';
// import { NavLink } from '@/components';
// import { Accordion } from '@/components/ui';

// interface Props {
//   navLinks: NavLink[];
//   onPageClose: () => void;
// }

// // Static collections data
// const collections = [
//   // { id: 1, name: 'Shoes', slug: 'shoes', types: ['MEN', 'WOMEN'] },
//   // { id: 2, name: 'Clothing', slug: 'clothing', types: ['MEN', 'WOMEN'] },
//   // { id: 3, name: 'Accessories', slug: 'accessories', types: ['MEN', 'WOMEN'] },
//   // { id: 4, name: 'Shop By Sport', slug: 'sport', types: ['MEN', 'WOMEN'] },
//   // { id: 5, name: 'Shop By Collection', slug: 'collection', types: ['MEN', 'WOMEN'] },
//   { id: 6, name: 'Snacks', slug: 'snacks', types: ['MEN', 'WOMEN'] },
//   { id: 7, name: 'Brands', slug: 'brands', types: ['MEN', 'WOMEN'] },

//   { id: 8, name: 'Eletronics', slug: 'electronics', types: ['MEN', 'WOMEN'] },
//   // { id: 7, name: 'Tissue Paper', slug: 'tissuepaper', types: ['MEN', 'WOMEN'] },
//   // Rest of the collection data goes here
// ];

// export const CollectionsPage = ({ navLinks, onPageClose }: Props) => {
//   const { t } = useTranslation();

//   return (
//     <div className="fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
//       <div className="flex justify-between">
//         <h2 className="text-xl font-medium">{t('common:collections')}</h2>
//         <FiX
//           className="cursor-pointer"
//           size="1.5rem"
//           data-testid="close"
//           onClick={onPageClose}
//         />
//       </div>
//       <ul className="mt-5 flex flex-col px-2">
//         {navLinks.map((item, index) => (
//           <li
//             key={index}
//             className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
//           >
//             {item.collapsible ? (
//               <Accordion>
//                 <Accordion.Header>{t(`header:${item.name}`)} </Accordion.Header>
//                  <Accordion.Body className="px-2 text-sm">
//                   <ul>
//                     {collections.map(collection => (
//                       <li
//                         key={collection.id}
//                         className="block border-b border-solid border-neutral-100"
//                       >
//                         {/* <Accordion> */}
                         
//                           {/* <Accordion.Header>
//                             {collection.name}
//                           </Accordion.Header> */}
//                           <Accordion.Body className="px-2 text-xs">
//                             {/* Nested sub-collections */}
//                             <ul>
//                               {/* Rendering nested sub-collections */}
//                               {/* Here you can map over collection.children if available */}
//                               <li className="block border-b border-solid border-neutral-100 py-2">
//                                 <Link
//                                   // href={`/products/${item.name}/${collection.slug}`}
//                                   href={`/${collection.slug}`}
//                                   onClick={onPageClose}
//                                 >
//                                   <h3>{collection.name}</h3>
//                                 </Link>
//                               </li>
//                             </ul>
//                           </Accordion.Body>
//                         {/* </Accordion> */}
//                       </li>
//                     ))}
//                   </ul>
//                 </Accordion.Body>
//               </Accordion>
//             ) : (
//               <Link
//                 // href={item.name}
//                 href={item.name === 'Products' ? '/brands' : item.href} 
//                 className="block py-4"
//                 onClick={onPageClose}
//               >
//                 <h3>{t(`${item.name}`)}</h3>
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
// import { FiX } from 'react-icons/fi';
// import { Accordion } from '../../../../components/ui/accordian'; // Uncomment if you are using the Accordion component

// const collections = [
//   { id: 6, name: 'Snacks', slug: 'snacks', types: ['MEN', 'WOMEN'] },
//   { id: 7, name: 'Brands', slug: 'brands', types: ['MEN', 'WOMEN'] },
//   { id: 8, name: 'Electronics', slug: 'electronics', types: ['MEN', 'WOMEN'] },
// ];

// const CollectionsPage = ({ navLinks, onPageClose }) => {
//   const { t } = useTranslation();

//   return (
//     <div className="fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
//       <div className="flex justify-between">
//         <h2 className="text-xl font-medium">
          
//           {/* {t('common:collections')} */}
//           collections
          
//           </h2>
//         <FiX
//           className="cursor-pointer"
//           size="1.5rem"
//           data-testid="close"
//           onClick={onPageClose}
//         />
//       </div>
//       <ul className="mt-5 flex flex-col px-2">
//         {navLinks.map((item, index) => (
//           <li
//             key={index}
//             className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
//           >
//             {item.collapsible ? (
//               <Accordion>
//                 <Accordion.Header>{t(`header:${item.name}`)}</Accordion.Header>
//                 <Accordion.Body className="px-2 text-sm">
//                   <ul>
//                     {collections.map(collection => (
//                       <li
//                         key={collection.id}
//                         className="block border-b border-solid border-neutral-100"
//                       >
//                         <Accordion.Body className="px-2 text-xs">
//                           <ul>
//                             <li className="block border-b border-solid border-neutral-100 py-2">
//                               <Link
//                                 href={`/${collection.slug}`}
//                                 onClick={onPageClose}
//                               >
//                                 <h3>{collection.name}</h3>
//                               </Link>
//                             </li>
//                           </ul>
//                         </Accordion.Body>
//                       </li>
//                     ))}
//                   </ul>
//                 </Accordion.Body>
//               </Accordion>
//             ) : (
//               <Link
//                 href={item.name === 'Products' ? '/brands' : item.href}
//                 className="block py-4"
//                 onClick={onPageClose}
//               >
//                 <h3>{t(`${item.name}`)}</h3>
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CollectionsPage;
//3
// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Categories', href: '/collections', collapsible: true }, // Updated URL
//   { name: 'Our Brand', href: '/brands' },
//   { name: 'About us', href: '/about-us' },
//   { name: 'Contact us', href: '/contact-us' },
// ];

// const CollectionsPage = ({ navLinks, onPageClose }) => {
//   const { t } = useTranslation();

//   return (
//     <div className="fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
//       <div className="flex justify-between">
//         <h2 className="text-xl font-medium">
//           {t('common:collections')}
//         </h2>
//         <FiX
//           className="cursor-pointer"
//           size="1.5rem"
//           data-testid="close"
//           onClick={onPageClose}
//         />
//       </div>
//       <ul className="mt-5 flex flex-col px-2">
//         {navLinks.map((item, index) => (
//           <li
//             key={index}
//             className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
//           >
//             {item.collapsible ? (
//               <Accordion>
//                 <Accordion.Header>{t(`header:${item.name}`)}</Accordion.Header>
//                 <Accordion.Body className="px-2 text-sm">
//                   <ul>
//                     {collections.map(collection => (
//                       <li
//                         key={collection.id}
//                         className="block border-b border-solid border-neutral-100"
//                       >
//                         <Accordion.Body className="px-2 text-xs">
//                           <ul>
//                             <li className="block border-b border-solid border-neutral-100 py-2">
//                               <Link
//                                 href={`/${collection.slug}`}
//                                 onClick={onPageClose}
//                               >
//                                 <h3>{collection.name}</h3>
//                               </Link>
//                             </li>
//                           </ul>
//                         </Accordion.Body>
//                       </li>
//                     ))}
//                   </ul>
//                 </Accordion.Body>
//               </Accordion>
//             ) : (
//               <Link
//                 href={item.name === 'Products' ? '/brands' : item.href}
//                 className="block py-4"
//                 onClick={onPageClose}
//               >
//                 <h3>{t(`${item.name}`)}</h3>
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CollectionsPage;
//2
import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';



const CollectionsPage = ({ navLinks, onPageClose }) => {
  const { t } = useTranslation();
  const collections = [
    { id: 1, name: t('mob_head.s3'), slug: 'complaints', types: ['MEN', 'WOMEN'] },
    { id: 2, name: t('mob_head.s1'), slug: 'job-information', types: ['MEN', 'WOMEN'] },
    { id: 3, name: t('mob_head.s2'), slug: 'classification', types: ['MEN', 'WOMEN'] },
    { id: 4, name: t('mob_head.s5'), slug: 'jobrequest', types: ['MEN', 'WOMEN'] },
    { id: 5, name: t('mob_head.s4'), slug: 'suggestion', types: ['MEN', 'WOMEN'] },

              { id: 8, name: t('mob_head.s10'), slug: 'automotive-metal-works', types: ['MEN', 'WOMEN'] },
     { id: 9, name: t('mob_head.s11'), slug: 'refrigerated-truck-bodies', types: ['MEN', 'WOMEN'] },
     { id: 10, name: t('mob_head.s12'), slug: 'trailers-special-bodies', types: ['MEN', 'WOMEN'] },
     { id: 10, name: t('mob_head.s13'), slug: 'tail-lifts-Conversions', types: ['MEN', 'WOMEN'] },


    { id: 6, name: t('mob_head.s6'), slug: 'career', types: ['MEN', 'WOMEN'] },

  ];

  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-white-500 p-5 overflow-y-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">{t('categories')}</h2>
        {/* <FiX className="cursor-pointer" size="1.5rem" onClick={onPageClose} /> */}
        <FiX
          className="cursor-pointer"
          size="1.5rem"
          data-testid="close"
          onClick={onPageClose}
        />
      </div>
      <ul className="mt-5">
        {navLinks.map((item, index) => (
          <li key={index} className="border-b py-3 border-orange-250">
            {item.collapsible ? (
              <div>
                {/* <h3>{t(`${item.name}`)}</h3> */}
                <h3>{item.name}</h3>

                <ul className="pl-5">
                  {collections.map((collection) => (
                    <li key={collection.id} className="py-2">
                      <Link href={`/${collection.slug}`}>
                        <a>{collection.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link href={item.href}>
                {/* <a>{t(`${item.name}`)}</a> */}
                <a>{item.name}</a>

              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsPage;
