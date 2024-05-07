import React from 'react'
import { useParams } from 'react-router-dom'
import ProductHd from '../components/ProductHd';
import all_products from '../assets/all_products';
import PopularProduct from '../components/PopularProduct';
import ProductDescription from '../components/ProductDescription';
import ProductDisplay from '../components/ProductDisplay';


const Product = () => {

const { productId } = useParams();
console.log("productId: ", productId);

const product = all_products.find((e)=> e.id === Number(productId));
if(!product) {
  return <div>Product not found!</div>
  // or redirect the user to a 404 page
}

  return (
    <section>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription />
        <PopularProduct />
      </div>
    </section>
  )
}

export default Product