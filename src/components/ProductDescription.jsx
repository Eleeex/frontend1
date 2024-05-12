import React from 'react';

const ProductDescription = () => {
  return (
    <div className='max-padd-container mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Explore the intricate details and quality craftsmanship of our product. Learn about its materials, features, and design elements to make an informed purchase decision.</p>
        <p className='text-sm'>Care for your item to ensure its longevity. Discover our care guide for tips on cleaning, storing, and maintaining your purchase to keep it looking and functioning its best.</p>
      </div>
    </div>
  );
}

export default ProductDescription;
