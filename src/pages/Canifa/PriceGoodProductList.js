import React from 'react';
import FilterProduct from '../../components/FilterProduct';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';

const PriceGoodProductList = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ /SẢN PHẨM GIÁ TỐT</p> 
      <section className="flex text-xs px-20">
        <section className="w-2/12">
            <ul className="space-y-2 sticky top-20">
              <li className="font-bold mt-5 cursor-pointer hover:text-red-600">SẢN PHẨM GIÁ TỐT</li> 
              <li className="font-bold cursor-pointer hover:text-red-600">Nam</li>
              <li className="font-bold cursor-pointer hover:text-red-600">Nữ</li>
              <li className="font-bold cursor-pointer hover:text-red-600">Bé Trai</li>
              <li className="font-bold cursor-pointer hover:text-red-600">Bé Gái</li>
              <li className="font-bold cursor-pointer hover:text-red-600">Hướng dẫn chọn size</li>
             </ul>
        </section>
        <section className="w-10/12">
            <div className="relative">
            <img
                className=" w-full "
                src="/assets/images/Banner_listing-gia-tot.png" alt="noload">
            </img>
            <ul className="absolute bottom-0 flex space-x-5 text-center text-white m-3">
                <li className="w-24 py-2.5 border-2 font-bold cursor-pointer ">NỮ</li>
                <li className="w-24 py-2.5 border-2 font-bold cursor-pointer ">NAM</li>
                <li className="w-24 py-2.5 border-2 font-bold cursor-pointer ">BÉ TRAI</li>
                <li className="w-24 py-2.5 border-2 font-bold cursor-pointer ">BÉ GÁI</li>
            </ul>
            </div>
            <FilterProduct/>
            <p className="text-center text-gray-700 font-bold text-xl">SẢN PHẨM GIÁ TỐT</p>
        </section>
      </section>
      <FooterCanifa/>
    </section>
  );
}

export default PriceGoodProductList;
