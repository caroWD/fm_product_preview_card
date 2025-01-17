import React from 'react';

function ProductPicture({ moble, desktop }) {
  return (
    <picture className='xs:w-1/2'>
      <source
        media='(min-width:640px)'
        srcSet={desktop} />
      <img
        src={moble}
        alt='Gabrielle Essence eau de perfum'
        className='sm:min-h-full sm:object-cover' />
    </picture>  
  );
}

export default ProductPicture;