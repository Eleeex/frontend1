import React from 'react';
import relatedProducts from '../assets/latest';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';

// Import Swiper styles
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation specific styles (if used)
import 'swiper/css/pagination'; // Pagination specific styles (if used)

const RelatedProducts = () => {
  return (
    <div>
        <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>
        
        <div className='mx-auto max-w-full'>
           <Swiper
           breakpoints={{
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }}
            className='h-[188px] mt-5'
           >
             {relatedProducts.map((item, i) => (
                <SwiperSlide key={i}>
                    <Link onClick={window.scrollTo(0, 0)} to={`/product/${item.id}`} className='flex gap-5 bg-white p-4 rounded-xl'>
                        {/* Updated img tag with hover effect */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-20 h-20 rounded-lg drop-shadow-xl hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out'
                        />
                        <div className='flex flex-col gap-y-1'>
                            <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
                            <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 medium-16'>
                                    <span className='line-through text-secondary'>${item.new_price}.00</span>
                                    <span>${item.old_price}.00</span>
                                </div>
                                <RiShoppingCart2Line className='text-xl hover:text-secondary' />
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
             ))}
           </Swiper>
        </div>
    </div>
  );
};

export default RelatedProducts;
