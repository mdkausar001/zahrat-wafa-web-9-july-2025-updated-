import { useState } from "react";
import { motion } from "framer-motion";
import { X, Apple, Android } from "lucide-react";

export const RamadanPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }} 
        className="bg-white-500 p-6 rounded-2xl shadow-2xl text-center w-[90%] max-w-md relative"
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
          <X size={20} />
        </button>

        {/* Ramadan Kareem Greeting */}
        <h2 className="text-3xl font-semibold text-[#D97706]">🌙 رمضان كريم</h2>
        <p className="text-gray-600 mt-2">حمل تطبيقنا الآن واستمتع بخدماتنا</p>

        {/* Download Buttons */}
        <div className="mt-4 flex gap-3 justify-center">
          <a href="https://play.google.com/store" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            <Android size={20} />
            <span>Android</span>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition">
            <Apple size={20} />
            <span>iOS</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

// export default RamadanPopup; // ✅ Make sure this line exists!
