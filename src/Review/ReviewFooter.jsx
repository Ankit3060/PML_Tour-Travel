// import React, { useEffect, useState } from 'react';
// import { FiArrowUpRight } from "react-icons/fi";

// function ReviewFooter({ price }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const shouldShow = window.scrollY > 300;
//       setIsVisible(shouldShow);
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed bottom-0 w-full px-10 py-4 flex justify-between items-center transition-transform duration-300 ${
//         isVisible ? 'translate-y-0' : 'translate-y-full'
//       }`}
//       style={{
//         backgroundColor: '#001034',
//         backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')",
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         color: 'white',
//         zIndex: 50
//       }}
//     >
        
//       <div className="text-white text-lg">
//         Starting at: <span className="text-yellow-400 font-semibold">AED {price}</span> per person
//       </div>

//       <div className="flex items-center space-x-3 text-white text-lg">
//         <span>To plan your next tour with US!! click on</span>
//         <button
//           className="bg-sky-400 hover:bg-sky-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-full transition duration-300"
//           onClick={()=>{    }}
//         >
//           Send a query <FiArrowUpRight className="inline ml-1" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ReviewFooter;

import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import ReviewFooterPopup from './ReviewFooterPopup'; // Make sure path is correct

function ReviewFooter({ price }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ⬅️ popup toggle

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Footer */}
      <div
        className={`fixed bottom-0 w-full px-10 py-4 flex justify-between items-center transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          backgroundColor: '#001034',
          backgroundImage: "url('https://res.cloudinary.com/ddxawuqwy/image/upload/v1710241157/inc_exc_bg_raxhhz.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'white',
          zIndex: 40
        }}
      >
        <div className="text-white text-lg">
          Starting at: <span className="text-yellow-400 font-semibold">AED {price}</span> per person
        </div>

        <div className="flex items-center space-x-3 text-white text-lg">
          <span>To plan your next tour with US!! click on</span>
          <button
            className="bg-sky-400 hover:bg-sky-500 cursor-pointer text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            onClick={() => setShowPopup(true)}
          >
            Send a query <FiArrowUpRight className="inline ml-1" />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && <ReviewFooterPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
 
export default ReviewFooter;
