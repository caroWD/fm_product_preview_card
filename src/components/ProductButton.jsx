import React, { useState } from 'react';
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi2";

function ProductButton({ text, hasIcon }) {

  const [hover, setHover] = useState(false);

  const isHover = () => {
    setHover(!hover)
  };

  return (
    <button
      className='btn w-full justify-center bg-viridian-600 text-white-linen-50 hover:bg-viridian-800'
      onMouseEnter={() => isHover()}
      onMouseLeave={() => isHover()}
    >
      {hasIcon && hover ? <HiShoppingCart className='size-5' /> : <HiOutlineShoppingCart className='size-5 stroke-2' />}
      {text}
    </button>
  )
}

export default ProductButton;