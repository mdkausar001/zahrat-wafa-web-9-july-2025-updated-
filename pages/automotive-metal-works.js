// import Layout from "../components/Layout/Layout";

// import Head from 'next/head'
// import Link from 'next/link'
// import { useEffect } from 'react'

// export default function AutomotiveMetalWorks() {
//   useEffect(() => {
//     // Simple scroll-based reveal (no external lib)
//     const elems = document.querySelectorAll('.reveal')
//     const onScroll = () => {
//       const windowBottom = window.innerHeight + window.scrollY
//       elems.forEach((el) => {
//         const rect = el.getBoundingClientRect()
//         const elTop = rect.top + window.scrollY
//         if (windowBottom - 80 > elTop) {
//           el.classList.add('revealed')
//         }
//       })
//     }
//     onScroll()
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const formLink =
//     'https://forms.zohopublic.com/sample/sample-form' // replace with your form URL

//   return (
//     <>
//     <Layout>
//       <Head>
//         <title>Automotive Metal Works | Zahrat Al Wafa</title>
//         <meta
//           name="description"
//           content="Precision automotive metal works by Zahrat Al Wafa — fabrication, welding, chassis alignment, custom bodies, and restorations for commercial & luxury vehicles."
//         />
//       </Head>

//       <main className="min-h-screen bg-white text-gray-900">
//         {/* HERO */}
//         <header className="relative bg-white">
//           <div
//             className="relative overflow-hidden"
//             style={{ background: '#fff' }}
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1518546305929-3f8d1f2c0d7a?auto=format&fit=crop&w=1600&q=80')",
//                 filter: 'brightness(0.55)',
//               }}
//               aria-hidden="true"
//             />
//             <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
//               <div className="max-w-3xl text-white reveal opacity-0 transform translate-y-6 transition duration-700">
//                 <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//                   Automotive <span style={{ color: '#FF4800' }}>Metal Works</span>
//                 </h1>
//                 <p className="mt-4 text-lg md:text-xl text-white/90">
//                   Precision fabrication, structural repairs, and custom body
//                   solutions for commercial and luxury vehicles. Trusted
//                   craftsmanship. Modern engineering.
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   <a
//                     href={formLink}
//                     className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF4800] text-white font-semibold shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
//                   >
//                     Book a Metal Works Service
//                   </a>

//                   <Link href="#services">
//                     <a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-[#FF4800] font-semibold border border-white/30 shadow-sm transition hover:opacity-90">
//                       Explore Services
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* ABOUT + KEY STATS */}
//         <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <div className="reveal opacity-0 transform translate-y-6 transition duration-700">
//               <h2 className="text-3xl font-bold mb-4">
//                 Skilled Metal Fabrication & Structural Repair
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Our Automotive Metal Works division combines modern diagnostic
//                 equipment with years of hands-on experience. We restore frames,
//                 fabricate custom components, and deliver durable finishes that
//                 meet commercial standards and OEM tolerances.
//               </p>

//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
//                 <li className="flex items-start gap-3">
//                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold">
//                     ✓
//                   </span>
//                   <div>
//                     <strong>Frame & Chassis Alignment</strong>
//                     <div className="text-sm text-gray-600">
//                       Laser-guided measurements and precision straightening.
//                     </div>
//                   </div>
//                 </li>

//                 <li className="flex items-start gap-3">
//                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold">
//                     ✓
//                   </span>
//                   <div>
//                     <strong>Custom Fabrication</strong>
//                     <div className="text-sm text-gray-600">
//                       Tailored panels, brackets, and specialized bodywork.
//                     </div>
//                   </div>
//                 </li>

//                 <li className="flex items-start gap-3">
//                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold">
//                     ✓
//                   </span>
//                   <div>
//                     <strong>Advanced Welding</strong>
//                     <div className="text-sm text-gray-600">
//                       MIG, TIG and structural welding performed to specification.
//                     </div>
//                   </div>
//                 </li>

//                 <li className="flex items-start gap-3">
//                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4800]/10 text-[#FF4800] font-bold">
//                     ✓
//                   </span>
//                   <div>
//                     <strong>Corrosion Protection & Coatings</strong>
//                     <div className="text-sm text-gray-600">
//                       Industry-grade primers, sealants, and finishes.
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             <div className="reveal opacity-0 transform translate-y-6 transition duration-700">
//               <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]">
//                 <img
//                   src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80"
//                   alt="Workshop welding"
//                   className="w-full h-80 object-cover"
//                 />
//                 <div className="p-6 bg-white">
//                   <h3 className="text-lg font-semibold mb-2">
//                     Precision Workshop & Fabrication Bay
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Dedicated bays for heavy fabrication, jigs for accurate
//                     assembly, and controlled conditions for precise welding.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SERVICES GRID */}
//         <section id="services" className="bg-gray-50 py-12 lg:py-20">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12">
//             <div className="text-center mb-8 reveal opacity-0 transform translate-y-6 transition duration-700">
//               <h2 className="text-3xl font-bold">Core Services</h2>
//               <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
//                 From restoration to custom builds, our team delivers durable,
//                 engineered solutions.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: 'Custom Fabrication',
//                   img:
//                     'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
//                   desc:
//                     'Bespoke panels, brackets, and full-body fabrications for commercial fleets.',
//                 },
//                 {
//                   title: 'Structural Repair & Alignment',
//                   img:
//                     'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
//                   desc:
//                     'Accident repair, frame straightening, and precision alignment systems.',
//                 },
//                 {
//                   title: 'Precision Welding',
//                   img:
//                     'https://images.unsplash.com/photo-1515165562835-c6f2a0e9f2c4?auto=format&fit=crop&w=1000&q=80',
//                   desc:
//                     'MIG/TIG/arc welding by certified technicians for structural integrity.',
//                 },
//               ].map((card) => (
//                 <article
//                   key={card.title}
//                   className="group bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transform transition duration-500 reveal opacity-0 translate-y-6"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//                     <p className="text-gray-600 mb-4 text-sm">{card.desc}</p>
//                     <a
//                       href={formLink}
//                       className="inline-block px-4 py-2 rounded-md text-white font-medium"
//                       style={{ background: '#FF4800' }}
//                     >
//                       Request Service
//                     </a>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* GALLERY */}
//         <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
//           <div className="text-center mb-8 reveal opacity-0 transform translate-y-6 transition duration-700">
//             <h2 className="text-3xl font-bold">Gallery</h2>
//             <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
//               Recent projects — fabrication, restoration and custom builds.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=80',
//               'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
//             ].map((src, i) => (
//               <div
//                 key={i}
//                 className="overflow-hidden rounded-xl bg-gray-100 transform transition hover:scale-105"
//               >
//                 <img src={src} alt={`gallery-${i}`} className="w-full h-40 object-cover" />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-[#FF4800] text-white py-12">
//           <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
//             <h3 className="text-2xl md:text-3xl font-bold">
//               Ready to start your project?
//             </h3>
//             <p className="mt-3 text-white/90 mb-6">
//               Our team is ready to provide a detailed quote and schedule your job.
//             </p>
//             <div className="flex items-center justify-center gap-4">
//               <a
//                 href={formLink}
//                 className="inline-flex items-center px-6 py-3 rounded-md bg-[#ffff] text-[#FF4800] font-semibold shadow-md transform transition hover:-translate-y-1"
//               >
//                 Book Metal Works Service
//               </a>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center px-5 py-3 rounded-md border border-white/30 text-white hover:opacity-90 transition"
//               >
//                 Contact Sales
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* FOOTER NOTE (simple) */}
//         <footer className="max-w-7xl mx-auto px-6 lg:px-12 py-8 text-sm text-gray-600">
//           <div className="text-center">
//             © {new Date().getFullYear()} Zahrat Al Wafa — Automotive Metal Works.
//           </div>
//         </footer>
//       </main>

//       {/* Inline styles for reveal animation (simple and self-contained) */}
//       <style jsx>{`
//         .reveal {
//           opacity: 0;
//           transform: translateY(16px);
//         }
//         .reveal.revealed,
//         .reveal.revealed {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//           transition: opacity 650ms ease, transform 650ms ease;
//         }
//         /* small accessibility improvement for prefers-reduced-motion */
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


export default function AutomotiveMetalWorks() {
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

  const formLink = "https://forms.zohopublic.com/sample/automotive-metalworks";

  return (
    <>
      <Layout>
        <Head>
          <title>Automotive Metal Works | Zahrat Al Wafa</title>
          <meta
            name="description"
            content="Automotive metal fabrication, repair, and modification services in Jeddah & Riyadh by Zahrat Al Wafa. Specializing in chassis works, vehicle body manufacturing, and heavy-duty restoration."
          />
        </Head>

        <main className="min-h-screen bg-white text-gray-900">
          {/* HERO */}
          <header className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1597006487748-2d6e0b9d5a4b?auto=format&fit=crop&w=1600&q=80')",
                filter: "brightness(0.55)",
              }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
              <div className="max-w-3xl text-white reveal opacity-0 transform translate-y-6 transition duration-700">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Automotive <span style={{ color: "#FF4800" }}>Metal Works</span>
                </h1>
                <p className="mt-3 text-lg md:text-xl text-white/90">
                  Comprehensive metal fabrication, vehicle body manufacturing, and
                  structural repair — serving clients in <strong>Jeddah</strong> and{" "}
                  <strong>Riyadh</strong>.
                </p>
                <p className="mt-2 text-white/80 text-base">
                  Combining craftsmanship, modern tools, and precision engineering for
                  every build.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={formLink}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF4800] text-[#ffff] font-semibold shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    Book a Service
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

          {/* ABOUT */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="reveal opacity-0 transform translate-y-6 transition duration-700">
                <h2 className="text-3xl font-bold mb-4">
                  Precision Engineering, Reliable Performance
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At <strong>Zahrat Al Wafa</strong>, our Automotive Metal Works division
                  is equipped to handle the toughest fabrication, repair, and modification
                  challenges for both light and heavy-duty vehicles. From full-body
                  rebuilds to custom fabrication and chassis modifications, we deliver
                  unmatched craftsmanship and durability.
                </p>

                <ul className="space-y-3 text-gray-700">
                  {[
                    "Vehicle body fabrication for trucks, vans, and trailers.",
                    "Chassis straightening and structural alignment using precision jigs.",
                    "Custom fabrication for commercial, refrigerated, and utility vehicles.",
                    "Rust treatment, corrosion protection, and powder-coated finishing.",
                    "Complete body restoration and performance upgrades.",
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
                    // src="https://images.unsplash.com/photo-1605810230434-763d94ecb9de?auto=format&fit=crop&w=1200&q=80"
  src="/metal/luke-thornton-x6xKzk45ifg-unsplash.webp"
                    alt="Metal works in progress"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2">
                      State-of-the-Art Metal Workshop
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Equipped with advanced tools and certified technicians, our
                      facilities in Jeddah and Riyadh ensure precision fabrication,
                      alignment, and finishing at every stage.
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
                <h2 className="text-3xl font-bold">Our Core Services</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  From full structural rebuilds to fine detailing — every project reflects
                  our commitment to excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Custom Body Fabrication",
                    desc: "Fabrication of truck and trailer bodies with reinforced structures designed for strength and endurance.",
                    img: "/metal/metal-fabrication-in-automotive-industry-1024x768.jpg",
                  },
                  {
                    title: "Welding & Metal Repair",
                    desc: "Expert MIG, TIG, and arc welding to restore, repair, and reinforce damaged vehicle frames and panels.",
                    img: "/metal/ottawa-machine-shop-welding-repair.png",
                  },
                  {
                    title: "Chassis Modification",
                    desc: "Customized frame and chassis work to adapt vehicles for specialized commercial use.",
                    img: "/metal/MAW-chassis-modification-76.jpg",
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
                        Request Service
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
                Serving Jeddah & Riyadh — Automotive Metal Works You Can Trust
              </h3>
              <p className="mt-3 text-white/90 mb-6">
                Get in touch with our metalwork experts to discuss your vehicle’s
                fabrication, repair, or custom body project.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={formLink}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#ffff] text-[#FF4800] font-semibold shadow-md transform transition hover:-translate-y-1"
                >
                  Book a Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 rounded-md border border-white/30 text-white hover:opacity-90 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          <footer className="max-w-7xl mx-auto px-6 lg:px-12 py-8 text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Zahrat Al Wafa — Automotive Metal Works Division
          </footer>
        </main>

        {/* Animation */}
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
