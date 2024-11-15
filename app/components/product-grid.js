// components/ProductGrid.js
import React from 'react';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    name: 'Product Name',
    price: '£9.99',
  },
  {
    image: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    name: 'Product Name',
    price: '£9.99',
  },
  {
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    name: 'Product Name',
    price: '£9.99',
  },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="#">
              Store
            </a>
          </div>
        </nav>

        {products.map((product, index) => (
          <div key={index} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img className="hover:grow hover:shadow-lg" src={product.image} alt={product.name} />
              <div className="pt-3 flex items-center justify-between">
                <p>{product.name}</p>
                <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.79-6.792c-1.562-1.563-1.563-4.017-0.001-5.588C6.468,4.573,8.39,4.037,10.129,4.037c1.413,0,2.782,0.478,3.996,1.342c1.214-0.864,2.583-1.342,3.996-1.342C15.744,4.037,17.65,4.573,18.791,6.205z" />
                </svg>
              </div>
              <p className="pt-1 text-gray-900">{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
