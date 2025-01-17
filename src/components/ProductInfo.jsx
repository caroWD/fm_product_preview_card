import React from 'react';

function ProductInfo(props) {

  const { title, subtitle, description, normalPrice, discountPrice } = props.children;

  return (
    <>
      <hgroup
        className='mb-4 md:mb-6'
      >
        <p
          className='mb-2 uppercase font-light text-xs tracking-[.375rem] md:mb-5 md:text-sm'
        >
          {subtitle}
        </p>
        <h1
          className='capitalize font-serif font-bold text-[1.625rem] leading-[115%] text-shark-900 2xs:text-3xl md:text-[2.5rem] md:leading-[115%]'
        >
          {title}
        </h1>
      </hgroup>
      <p
        className='mb-5 leading-[175%] md:mb-7'
      >
        {description}
      </p>
      <p
        className='mb-4 flex items-center gap-6'
      >
        <ins
          className='font-serif font-bold text-3xl text-viridian-500 no-underline 2xs:text-4xl'
        >
          {`$${discountPrice}`}
        </ins>
        <del
          className='text-xs 2xs:text-sm'
        >
          {`$${normalPrice}`}
        </del>
      </p>
    </>
  );
}

export default ProductInfo;