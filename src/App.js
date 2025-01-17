import React from 'react';
import ProductPicture from './components/ProductPicture';
import ProductInfo from './components/ProductInfo';
import ProductButton from './components/ProductButton';
import imageMobile from './assets/image-product-mobile.jpg';
import imageDesktop from './assets/image-product-desktop.jpg';

function App() {
  return (
    <div
      className="w-full p-4 2xs:h-dvh 2xs:py-0 2xs:flex 2xs:flex-col 2xs:justify-center xs:px-8 sm:px-4">
      <main
        className='max-w-2xl mx-auto flex flex-col rounded-xl overflow-hidden bg-white-50 sm:flex-row '
      >
        <ProductPicture moble={imageMobile} desktop={imageDesktop}/>
        <div
          className='p-6 sm:w-1/2 sm:flex sm:flex-col sm:justify-center sm:p-10 md:p-8'
        >
          <ProductInfo>
            {
              {
                title: 'gabrielle essence eau de parfum',
                subtitle: 'perfume',
                description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
                normalPrice: 169.99,
                discountPrice: 149.99,
              }
            }
          </ProductInfo>
          <ProductButton text='Add to Cart' hasIcon={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
