import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function TrailersSpecialBodies() {
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

  const formLink = "https://forms.zohopublic.com/sample/trailers-special-bodies";

  return (
    <>
      <Layout>
        <Head>
          <title>Trailers & Special Bodies | Zahrat Al Wafa</title>
          <meta
            name="description"
            content="Zahrat Al Wafa designs and fabricates high-performance trailers and special vehicle bodies across Saudi Arabia — engineered for strength, endurance, and industry-specific use."
          />
        </Head>

        <main className="min-h-screen bg-white text-gray-900">
          {/* HERO SECTION */}
          <header className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1563720225308-0d38d543a71e?auto=format&fit=crop&w=1600&q=80')",
                filter: "brightness(0.55)",
              }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
              <div className="max-w-3xl text-white reveal opacity-0 translate-y-6 transition duration-700">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Trailers & <span style={{ color: "#FF4800" }}>Special Bodies</span>
                </h1>
                <p className="mt-3 text-lg md:text-xl text-white/90">
                  Advanced trailer systems and purpose-built vehicle bodies — designed
                  for commercial, industrial, and defense applications across Saudi Arabia.
                </p>
                <p className="mt-2 text-white/80 text-base">
                  Trusted fabrication expertise in Jeddah and Riyadh, ensuring quality,
                  durability, and compliance with GCC standards.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={formLink}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF4800] text-[#ffff] font-semibold shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    Request Custom Build
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
                  Engineering Solutions for Every Industry
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Zahrat Al Wafa</strong> manufactures a wide range of trailer
                  and special vehicle body types, from heavy-duty flatbeds to hydraulic
                  tipping systems. Our expertise lies in creating solutions that maximize
                  payload capacity, ensure operational efficiency, and maintain long-term
                  structural integrity — tailored for clients across logistics, oil & gas,
                  construction, and utilities sectors.
                </p>

                <ul className="space-y-3 text-gray-700">
                  {[
                    "Fabrication of semi-trailers, flatbeds, tankers, and dump trailers.",
                    "Custom-designed utility and equipment transport bodies.",
                    "Hydraulic tipping systems and reinforced chassis construction.",
                    "Steel, aluminum, and composite builds for diverse load requirements.",
                    "Trailer suspension, braking, and lighting system integration.",
                    "Specialized transport bodies for defense, oilfield, and municipal sectors.",
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
src="/metal/Trailers-1.jpg"
                    alt="Trailer fabrication workshop"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2">
                      Purpose-Built for Performance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Every trailer and body is built with precision — combining robust
                      materials and superior craftsmanship to meet demanding load and
                      safety standards across Saudi Arabia.
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
                <h2 className="text-3xl font-bold">Our Core Fabrication Services</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  We deliver trailers and vehicle bodies that balance durability,
                  functionality, and regulatory compliance for every industry segment.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Flatbed & Cargo Trailers",
                    desc: "Heavy-duty trailers designed for industrial transport — with optimized load distribution and safety features.",
                    img: "/metal/images (1).jpeg"},
                  {
                    title: "Dump & Tanker Bodies",
                    desc: "Custom hydraulic dump trailers, tanker bodies, and utility builds for construction and oilfield use.",
                    img: "/metal/t2.jpeg"
                  },
                  {
                    title: "Specialized Vehicle Bodies",
                    desc: "Tailor-made builds for defense, municipal, and emergency response applications.",
                    img: "/metal/t3.webp"
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
                        Request Build
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
              <h3 className="text-2xl md:text-3xl text-[#ffff] font-bold">
                Trusted Trailer & Body Fabrication Experts in Saudi Arabia
              </h3>
              <p className="mt-3 text-white/90 mb-6">
                Serving Jeddah, Riyadh, and the wider GCC — delivering quality that
                endures, no matter the terrain or temperature.
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
            © {new Date().getFullYear()} Zahrat Al Wafa — Trailers & Special Bodies Division
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
