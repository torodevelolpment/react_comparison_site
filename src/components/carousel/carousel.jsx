import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const Carousel = () => {
  return (
    <div className="carousel">
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1583029901628-8039767c7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Burger" className="object-cover w-full h-80" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Burger" className="object-cover w-full h-80" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1636206197655-1eb300d35e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Burger" className="object-cover w-full h-80" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Burger" className="object-cover w-full h-80" />
  </div> 
  <div className="carousel-item">
    <img src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80" alt="Burger" className="object-cover w-full h-80" />
  </div> 
</div>
  )
}

export default Carousel

// function Carousel() {
//   const slides = [
//     {
//       url: 'https://images.unsplash.com/photo-1583029901628-8039767c7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1636206197655-1eb300d35e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//     },

//     {
//       url: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className='max-w-[100%] h-[400px] w-full m-auto py-8 relative group'>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-full bg-center bg-cover duration-500'
//       ></div>
//       {/* Left Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className='text-2xl cursor-pointer'
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;