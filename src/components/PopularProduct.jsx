import React, { useEffect, useState } from 'react';
import Item from './Item';

const PopularProduct = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularproducts')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
      {/* title */}
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='h3'>Popular Products</h3>
        <p>Discover our most sought-after items, carefully curated for you.</p>
      </div>
      {/* container */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
        {popularProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
