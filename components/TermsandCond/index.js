import Link from 'next/link';

export default function Footer2() {
  return (
    <footer
    className="text-gray-800 py-8"
    style={{
      background: 'linear-gradient(90deg, #e0f7fa, #80deea, #ffccbc)',
    }}
  >
    <div className="container mx-auto px-2 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold tracking-wide">
            Zahrat Wafa
          </h2>
          <p className="text-sm mt-2 text-gray-600">
            Your trusted partner for all car services and repairs.
          </p>
        </div>
        <div className="flex space-x-8">
          <Link href="https://www.zahrat-wafa.com/terms-conditions">
            <a
              className="text-sm hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </Link>
          <Link href="https://www.zahrat-wafa.com/privacy-policy">
            <a
              className="text-sm hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </Link>
        </div>
      </div>
      {/* <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Zahrat Wafa. All rights reserved.
        </p>
        <div className="flex justify-center  space-x-4">
    <a href="https://apps.apple.com/us/app/bayut-uae-property-search/id923263211" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://www.bayut.com/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" 
        alt="Download on the App Store" 
        className="h-10"
      />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.bayut.bayutapp&pli=1" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://www.bayut.com/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" 
        alt="Get it on Google Play" 
        className="h-10"
      />
    </a>
  </div>
      </div> */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center mb-14 lg:mb-12">
  <p className="text-xs text-gray-600">
    © {new Date().getFullYear()} Zahrat Wafa. All rights reserved.
  </p>
  <div className="flex justify-center mt-4 space-x-4">
    <a href="https://apps.apple.com/in/app/zahrat-wafa/id6739617662" target="_blank" rel="noopener noreferrer">
      
      <img 
        src="/app-icon/apple.svg" 
        alt="Download on the App Store" 
        className="h-10"
      />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.app.zahrat_wafa" target="_blank" rel="noopener noreferrer">
      <img 
        src="/app-icon/google-1.svg" 
        alt="Get it on Google Play" 
        className="h-10"
      />
    </a>
  </div>
</div>

    </div>
  </footer>
  );
}
