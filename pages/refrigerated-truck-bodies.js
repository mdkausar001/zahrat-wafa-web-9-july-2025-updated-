// import Head from 'next/head'
// import Link from 'next/link'
// import { useEffect } from 'react'
// import Layout from "../components/Layout/Layout";


// export default function RefrigeratedTruckBodies() {
//   useEffect(() => {
//     const elems = document.querySelectorAll('.reveal')
//     const onScroll = () => {
//       const windowBottom = window.innerHeight + window.scrollY
//       elems.forEach((el) => {
//         const rect = el.getBoundingClientRect()
//         const elTop = rect.top + window.scrollY
//         if (windowBottom - 80 > elTop) el.classList.add('revealed')
//       })
//     }
//     onScroll()
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const formLink = 'https://forms.zohopublic.com/sample/refrigerated-trucks'

//   return (
//     <>
//     <Layout>
//       <Head>
//         <title>Refrigerated Truck Bodies | Zahrat Al Wafa</title>
//         <meta
//           name='description'
//           content='Custom-designed refrigerated truck bodies for cold chain logistics. Built with precision insulation, reliable cooling, and durable chassis integration by Zahrat Al Wafa.'
//         />
//       </Head>

//       <main className='min-h-screen bg-white text-gray-900'>
//         {/* HERO */}
//         <header className='relative'>
//           <div className='absolute inset-0 bg-cover bg-center'
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1596496052678-189b68e6b8cc?auto=format&fit=crop&w=1600&q=80')",
//               filter: 'brightness(0.55)',
//             }}
//           />
//           <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36'>
//             <div className='max-w-3xl text-white reveal opacity-0 transform translate-y-6 transition duration-700'>
//               <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
//                 Refrigerated <span style={{ color: '#FF4800' }}>Truck Bodies</span>
//               </h1>
//               <p className='mt-4 text-lg md:text-xl text-white/90'>
//                 Engineered for excellence in cold-chain logistics. Our custom-built
//                 refrigerated truck bodies deliver unmatched thermal performance and reliability.
//               </p>

//               <div className='mt-8 flex flex-wrap gap-3'>
//                 <a
//                   href={formLink}
//                   className='inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF4800] text-white font-semibold shadow-md transform transition hover:-translate-y-1 hover:shadow-lg'
//                 >
//                   Get a Quote
//                 </a>

//                 <Link href='#features'>
//                   <a className='inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-[#FF4800] font-semibold border border-white/30 shadow-sm transition hover:opacity-90'>
//                     Learn More
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* ABOUT */}
//         <section className='max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20'>
//           <div className='grid md:grid-cols-2 gap-10 items-center'>
//             <div className='reveal opacity-0 transform translate-y-6 transition duration-700'>
//               <h2 className='text-3xl font-bold mb-4'>
//                 Durable. Efficient. Built for Saudi Climate.
//               </h2>
//               <p className='text-gray-700 leading-relaxed mb-6'>
//                 Zahrat Al Wafa designs and fabricates high-performance refrigerated
//                 truck bodies tailored for the Middle East’s demanding temperature
//                 conditions. Every build ensures optimal cooling efficiency,
//                 structural integrity, and compliance with transport standards.
//               </p>

//               <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700'>
//                 <li className='flex items-start gap-3'>
//                   <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold'>✓</span>
//                   <div>
//                     <strong>High-Grade Insulation</strong>
//                     <div className='text-sm text-gray-600'>
//                       Polyurethane panels for superior temperature retention.
//                     </div>
//                   </div>
//                 </li>
//                 <li className='flex items-start gap-3'>
//                   <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold'>✓</span>
//                   <div>
//                     <strong>Refrigeration Units</strong>
//                     <div className='text-sm text-gray-600'>
//                       Compatible with Thermo King, Carrier, and other global brands.
//                     </div>
//                   </div>
//                 </li>
//                 <li className='flex items-start gap-3'>
//                   <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold'>✓</span>
//                   <div>
//                     <strong>Custom Body Sizes</strong>
//                     <div className='text-sm text-gray-600'>
//                       Fabricated to suit 1–10 ton chassis platforms.
//                     </div>
//                   </div>
//                 </li>
//                 <li className='flex items-start gap-3'>
//                   <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold'>✓</span>
//                   <div>
//                     <strong>Corrosion Resistance</strong>
//                     <div className='text-sm text-gray-600'>
//                       Aluminum panels and treated steel subframes for durability.
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             <div className='reveal opacity-0 transform translate-y-6 transition duration-700'>
//               <div className='rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]'>
//                 <img
//                   src='https://images.unsplash.com/photo-1573592023130-8b6a5db241d9?auto=format&fit=crop&w=1200&q=80'
//                   alt='Refrigerated truck fabrication'
//                   className='w-full h-80 object-cover'
//                 />
//                 <div className='p-6 bg-white'>
//                   <h3 className='text-lg font-semibold mb-2'>
//                     Precision Cooling Engineering
//                   </h3>
//                   <p className='text-gray-600 text-sm'>
//                     Optimized airflow, insulated joints, and precise temperature
//                     control for perishable goods.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FEATURES GRID */}
//         <section id='features' className='bg-gray-50 py-12 lg:py-20'>
//           <div className='max-w-7xl mx-auto px-6 lg:px-12'>
//             <div className='text-center mb-8 reveal opacity-0 transform translate-y-6 transition duration-700'>
//               <h2 className='text-3xl font-bold'>Core Capabilities</h2>
//               <p className='mt-2 text-gray-600 max-w-2xl mx-auto'>
//                 Built to perform under harsh climate conditions — delivering reliable
//                 temperature control every mile.
//               </p>
//             </div>

//             <div className='grid md:grid-cols-3 gap-6'>
//               {[
//                 {
//                   title: 'Custom Body Design',
//                   img:
//                     'https://images.unsplash.com/photo-1605810230434-763d94ecb9de?auto=format&fit=crop&w=1000&q=80',
//                   desc:
//                     'Designed to match your fleet’s specifications and load requirements.',
//                 },
//                 {
//                   title: 'Thermal Efficiency',
//                   img:
//                     'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80',
//                   desc:
//                     'Precision insulation ensuring consistent temperature in all weather.',
//                 },
//                 {
//                   title: 'Smart Temperature Monitoring',
//                   img:
//                     'https://images.unsplash.com/photo-1605733160314-8b7b6e6e7a29?auto=format&fit=crop&w=1000&q=80',
//                   desc:
//                     'IoT-ready systems for live temperature tracking and compliance.',
//                 },
//               ].map((card) => (
//                 <article
//                   key={card.title}
//                   className='group bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transform transition duration-500 reveal opacity-0 translate-y-6'
//                 >
//                   <div className='relative overflow-hidden'>
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105'
//                     />
//                   </div>
//                   <div className='p-6'>
//                     <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
//                     <p className='text-gray-600 mb-4 text-sm'>{card.desc}</p>
//                     <a
//                       href={formLink}
//                       className='inline-block px-4 py-2 rounded-md text-white font-medium'
//                       style={{ background: '#FF4800' }}
//                     >
//                       Request Quote
//                     </a>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* GALLERY */}
//         <section className='max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20'>
//           <div className='text-center mb-8 reveal opacity-0 transform translate-y-6 transition duration-700'>
//             <h2 className='text-3xl font-bold'>Gallery</h2>
//             <p className='mt-2 text-gray-600 max-w-2xl mx-auto'>
//               Our latest refrigerated body installations and cold-chain projects.
//             </p>
//           </div>

//           <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
//             {[
//               'https://images.unsplash.com/photo-1597006277203-b401fa58c2d8?auto=format&fit=crop&w=1000&q=80',
//               'https://images.unsplash.com/photo-1581594549593-cdc01f7a2f2b?auto=format&fit=crop&w=1000&q=80',
//               'https://images.unsplash.com/photo-1605810230434-763d94ecb9de?auto=format&fit=crop&w=1000&q=80',
//               'https://images.unsplash.com/photo-1605733160314-8b7b6e6e7a29?auto=format&fit=crop&w=1000&q=80',
//             ].map((src, i) => (
//               <div
//                 key={i}
//                 className='overflow-hidden rounded-xl bg-gray-100 transform transition hover:scale-105'
//               >
//                 <img src={src} alt={`gallery-${i}`} className='w-full h-40 object-cover' />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className='bg-[#FF4800] text-white py-12'>
//           <div className='max-w-5xl mx-auto px-6 lg:px-12 text-center'>
//             <h3 className='text-2xl md:text-3xl font-bold'>
//               Start Your Cold Chain Project Today
//             </h3>
//             <p className='mt-3 text-white/90 mb-6'>
//               Get your customized refrigerated truck body designed for performance and durability.
//             </p>
//             <div className='flex items-center justify-center gap-4'>
//               <a
//                 href={formLink}
//                 className='inline-flex items-center px-6 py-3 rounded-md bg-white text-[#FF4800] font-semibold shadow-md transform transition hover:-translate-y-1'
//               >
//                 Book Consultation
//               </a>
//               <a
//                 href='/contact'
//                 className='inline-flex items-center px-5 py-3 rounded-md border border-white/30 text-white hover:opacity-90 transition'
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </section>

//         <footer className='max-w-7xl mx-auto px-6 lg:px-12 py-8 text-sm text-gray-600 text-center'>
//           © {new Date().getFullYear()} Zahrat Al Wafa — Refrigerated Truck Bodies.
//         </footer>
//       </main>

//       {/* Animations */}
//       <style jsx>{`
//         .reveal {
//           opacity: 0;
//           transform: translateY(16px);
//         }
//         .reveal.revealed {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//           transition: opacity 650ms ease, transform 650ms ease;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .reveal,
//           .reveal.revealed {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//         }
//       `}</style>

//       </Layout>
//     </>
//   )
// }

import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function RefrigeratedTruckBodies() {
  useEffect(() => {
    const elems = document.querySelectorAll(".reveal");
    const onScroll = () => {
      const windowBottom = window.innerHeight + window.scrollY;
      elems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        if (windowBottom - 80 > elTop) el.classList.add("revealed");
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const formLink = "https://forms.zohopublic.com/sample/refrigerated-truck-bodies";

  return (
    <>
      <Layout>
        <Head>
          <title>Refrigerated Truck Bodies | Zahrat Al Wafa</title>
          <meta
            name="description"
            content="Zahrat Al Wafa designs and manufactures high-performance refrigerated truck bodies for cold chain logistics across Saudi Arabia — built for durability, efficiency, and temperature control."
          />
        </Head>

        <main className="min-h-screen bg-white text-gray-900">
          {/* HERO SECTION */}
          <header className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1598300056439-ef0e9fbe14c2?auto=format&fit=crop&w=1600&q=80')",
                filter: "brightness(0.55)",
              }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
              <div className="max-w-3xl text-white reveal opacity-0 translate-y-6 transition duration-700">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Refrigerated <span style={{ color: "#FF4800" }}>Truck Bodies</span>
                </h1>
                <p className="mt-3 text-lg md:text-xl text-white/90">
                  Engineered cold storage solutions — built to deliver reliability and
                  performance across Saudi Arabia’s toughest climates.
                </p>
                <p className="mt-2 text-white/80 text-base">
                  Trusted by logistics, food service, and healthcare sectors in Jeddah,
                  Riyadh, and beyond.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={formLink}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF4800] text-[#ffff] font-semibold shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    Request a Quote
                  </a>
                  <Link href="#services">
                    <a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-[#FF4800] font-semibold border border-white/30 shadow-sm transition hover:opacity-90">
                      Explore Services
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* ABOUT SECTION */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="reveal opacity-0 transform translate-y-6 transition duration-700">
                <h2 className="text-3xl font-bold mb-4">
                  Reliable Cold Chain. Advanced Engineering.
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our <strong>Refrigerated Truck Bodies Division</strong> specializes in
                  the design and manufacture of thermally efficient bodies for trucks and
                  vans. Each build integrates premium insulation materials and
                  state-of-the-art temperature control systems that ensure consistent
                  cooling for food, medical, and industrial logistics.
                </p>

                <ul className="space-y-3 text-gray-700">
                  {[
                    "Manufacturing of insulated truck and van bodies using high-density polyurethane panels.",
                    "Multi-temperature systems suitable for frozen, chilled, and ambient transport.",
                    "Precision-engineered floor, roof, and wall panels for minimal thermal loss.",
                    "Custom design options — rear, side doors, and partition configurations.",
                    "Thermo King & Carrier-compatible refrigeration units integration.",
                    "Durable, corrosion-resistant hardware and stainless-steel fittings.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal opacity-0 transform translate-y-6 transition duration-700">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]">
                  <img
src="/metal/FRP-refrigerated-truck-body-4.png"              
      alt="Refrigerated truck body fabrication"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2">
                      Designed for Saudi Arabia’s Climate
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Built to withstand extreme temperatures and long-haul transport
                      conditions across the Kingdom — ensuring your products remain
                      protected and preserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES GRID */}
          <section id="services" className="bg-gray-50 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-10 reveal opacity-0 translate-y-6 transition duration-700">
                <h2 className="text-3xl font-bold">Our Core Capabilities</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  Every refrigerated body we build meets international standards for food
                  safety, efficiency, and long-term performance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Insulated Body Manufacturing",
                    desc: "High-density insulated panels ensure superior thermal performance for frozen and chilled transport.",
                    img: 
                    "/metal/insulated-truck-body-gcbiuzd-250.avif"              
                  },
                  {
                    title: "Temperature Control Systems",
                    desc: "Integration of top-tier cooling units and smart sensors for constant temperature monitoring.",
                    img:  "/metal/Multi-temperature-Refrigerated-Truck-Box.jpg"       
                  
                  },
                  {
                    title: "Custom Body Design",
                    desc: "Customizable body dimensions and partitions to meet logistics and cold storage requirements.",
                    img:  "/metal/Custom-Bodign.jpeg"       
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transform transition duration-500 reveal opacity-0 translate-y-6"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                      <a
                        href={formLink}
                        className="inline-block px-4 py-2 rounded-md text-[#ffff] font-medium"
                        style={{ background: "#FF4800" }}
                      >
                        Request Quote
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#FF4800] text-white py-14">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#ffff]">
                Your Trusted Partner for Cold Chain Solutions in KSA
              </h3>
              <p className="mt-3 text-white/90 mb-6">
                Contact our team in Jeddah or Riyadh to discuss custom refrigerated body
                builds and fleet solutions.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={formLink}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#ffff] text-[#FF4800] font-semibold shadow-md transform transition hover:-translate-y-1"
                >
                  Get a Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 rounded-md border border-white/30 text-white hover:opacity-90 transition"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          <footer className="max-w-7xl mx-auto px-6 lg:px-12 py-8 text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Zahrat Al Wafa — Refrigerated Truck Bodies Division
          </footer>
        </main>

        {/* Reveal Animation */}
        <style jsx>{`
          .reveal {
            opacity: 0;
            transform: translateY(16px);
          }
          .reveal.revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 650ms ease, transform 650ms ease;
          }
        `}</style>
      </Layout>
    </>
  );
}

