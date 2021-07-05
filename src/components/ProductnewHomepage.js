import React from 'react';

const ProductnewHomepage = () => {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-2">
       {[...Array(6)].map((item, key) => (
        <div className="text-center text-lg">
          <img
          className="cursor-pointer" 
              src="/assets/images/img-product.jpg" alt="noload">
          </img>
          <div className="my-4 font-light">
              Áo sơ mi cọc tay nữ
            <p className="flex justify-center">
              <p className="line-through mr-2">399.000đ</p>
              <p className="font-black text-red-600">199.500đ</p>
            </p>
          </div>
        </div>
        ))}
    </div>
  );
}

export default ProductnewHomepage;
