import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <Link onClick={window.scrollTo(0, 0)} to={`/product/${id}`} className="bg-white p-4 rounded-xl relative">
      <div className="flexCenter">
        {/* Updated image tag with hover effect */}
        <img
          src={image}
          alt={name}
          height={211}
          width={211}
          className="rounded-lg drop-shadow-xl absolute bottom-44 hover:scale-105 hover:opacity-90 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-y-3 pt-24">
        <h4 className="line-clamp-2 medium-16">{name}</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
        <div className="flexBetween">
          <div className="flex gap-x-4 medium-16">
            <span>${new_price}.00</span>
            <span className="line-through text-secondary">${old_price}.00</span>
          </div>
          <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
        </div>
      </div>
    </Link>
  );
};

export default Item;
