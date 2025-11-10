import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function TailLiftsConversions() {
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

  const formLink = "https://forms.zohopublic.com/sample/tail-lifts-conversions";

  return (
    <>
      <Layout>
        <Head>
          <title>Tail Lifts & Conversions | Zahrat Al Wafa</title>
          <meta
            name="description"
            content="Zahrat Al Wafa provides professional tail lift installations, hydraulic systems, and vehicle conversions across Saudi Arabia — enhancing logistics efficiency and fleet safety."
          />
        </Head>

        <main className="min-h-screen bg-white text-gray-900">
          {/* HERO SECTION */}
          <header className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1615450375041-4dbdd85e4928?auto=format&fit=crop&w=1600&q=80')",
                filter: "brightness(0.55)",
              }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
              <div className="max-w-3xl text-white reveal opacity-0 translate-y-6 transition duration-700">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Tail Lifts & <span style={{ color: "#FF4800" }}>Conversions</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90">
                  Hydraulic lift systems and vehicle conversions designed for safety,
                  performance, and productivity — built for the logistics and fleet
                  industry of Saudi Arabia.
                </p>
                <p className="mt-2 text-white/80 text-base">
                  Serving clients in Jeddah, Riyadh, and nationwide with end-to-end
                  engineering, installation, and maintenance.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={formLink}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF4800] text-[#ffff] font-semibold shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    Request Installation
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
                  Advanced Tail Lift Solutions & Vehicle Conversions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Zahrat Al Wafa</strong> specializes in the installation and
                  customization of hydraulic tail lifts and complete vehicle conversion
                  systems. Whether upgrading commercial fleets, refrigerated trucks, or
                  logistics vehicles, our team delivers reliable mechanical and electrical
                  integration with full safety compliance.
                </p>

                <ul className="space-y-3 text-gray-700">
                  {[
                    "Hydraulic tail lift installation for trucks, vans, and cargo vehicles.",
                    "Custom-built conversions for logistics, temperature-controlled units, and specialized fleets.",
                    "Retrofitting solutions for existing vehicles to enhance accessibility and loading efficiency.",
                    "Electric and hydraulic lift systems sourced from global manufacturers.",
                    "In-house engineering design for custom vehicle body modifications.",
                    "Preventive maintenance and certification for operational safety.",
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
                    src="/metal/Tail1.avif"
                    alt="Tail lift installation"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2">
                      Precision Engineering. Proven Safety.
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our certified technicians install hydraulic and mechanical systems
                      using industry-approved practices to ensure optimal lift capacity,
                      reliability, and compliance with Saudi standards.
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
                <h2 className="text-3xl font-bold">Our Tail Lift & Conversion Services</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  From design to installation, we provide innovative solutions that meet
                  the needs of Saudi Arabia’s commercial and industrial sectors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Hydraulic Tail Lifts",
                    desc: "Installation and integration of rear and side-mounted hydraulic lift systems for trucks and vans.",
                    img: "/metal/Tail2.png"
                  },
                  {
                    title: "Vehicle Conversions",
                    desc: "Custom fleet conversions including temperature-controlled bodies, utility units, and mobile service setups.",
                    img: "/metal/tail-3.jpg"
                  },
                  {
                    title: "Upgrades & Maintenance",
                    desc: "Retrofit, servicing, and certification to keep tail lift systems efficient, safe, and regulation-compliant.",
                    img: "/metal/tail-4.webp"
                  }
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
                Certified Tail Lift & Conversion Specialists in Saudi Arabia
              </h3>
              <p className="mt-3 text-white/90 mb-6">
                From design consultation to post-installation support, our engineers and
                technicians ensure your vehicles are built for safety and performance.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={formLink}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#ffff] text-[#FF4800] font-semibold shadow-md transform transition hover:-translate-y-1"
                >
                  Get a Quote
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
            © {new Date().getFullYear()} Zahrat Al Wafa — Tail Lifts & Conversions Division
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
