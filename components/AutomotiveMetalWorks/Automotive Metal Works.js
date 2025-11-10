import Image from "next/image";
import Head from "next/head";

export default function AutomotiveMetalWorks() {
  return (
    <>
      <Head>
        <title>Automotive Metal Works | Zahrat Al Wafa</title>
        <meta
          name="description"
          content="Precision automotive metal works and custom fabrication by Zahrat Al Wafa. Specialized in vehicle body repair, welding, and frame restoration for commercial and luxury vehicles."
        />
      </Head>

      <section className="bg-gray-50 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* HERO SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Automotive <span className="text-orange-500">Metal Works</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Zahrat Al Wafa’s Automotive Metal Works division delivers
                high-precision fabrication, welding, and body restoration
                services for both commercial and high-end vehicles. We combine
                advanced engineering with skilled craftsmanship to ensure your
                vehicle structure is durable, reliable, and built to last.
              </p>
              <ul className="space-y-2 text-gray-700 text-base">
                <li>✔️ Vehicle body repair and metal restoration</li>
                <li>✔️ Chassis straightening and frame alignment</li>
                <li>✔️ Custom fabrication for trailers and bodies</li>
                <li>✔️ MIG, TIG, and arc welding specialists</li>
                <li>✔️ Corrosion protection and refinishing</li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/images/metalworks-main.jpg"
                alt="Automotive Metal Works"
                width={700}
                height={450}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Areas of Expertise
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            From small-scale repairs to full body construction, our specialized
            metal works department handles every aspect with precision and
            reliability.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <Image
                src="/images/fabrication.jpg"
                alt="Fabrication"
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Custom Fabrication</h3>
              <p className="text-gray-600 text-sm">
                Design and fabrication of custom panels, brackets, and body
                structures for all vehicle types.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <Image
                src="/images/welding.jpg"
                alt="Welding"
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Precision Welding</h3>
              <p className="text-gray-600 text-sm">
                Skilled technicians use MIG, TIG, and arc welding for structural
                and performance integrity.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <Image
                src="/images/repair.jpg"
                alt="Repair & Restoration"
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Repair & Restoration
              </h3>
              <p className="text-gray-600 text-sm">
                Full restoration for accident-damaged or corroded vehicles,
                returning them to like-new condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-orange-500 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Need Professional Metal Work for Your Vehicle?
          </h2>
          <p className="mb-6 text-lg opacity-90">
            Contact our expert fabrication and repair team today. We ensure
            precision, safety, and unmatched craftsmanship for every vehicle.
          </p>
          <a
            href="https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Services1/formperma/5XiOnmrh038r-XfsyYmZxfEbrlAw_0uyUeWGuSFwcek"
            className="bg-white text-orange-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Book Your Service
          </a>
        </div>
      </section>
    </>
  );
}
