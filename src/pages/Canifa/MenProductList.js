import React from 'react';
import FilterProduct from '../../components/FilterProduct';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';

const MenProductList = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ /Nam /Danh mục sản phẩm</p> 
      <section className="flex text-xs px-20">
        <section className="w-2/12">
            <ul className="space-y-2 sticky top-20">
              <li className="font-bold mt-5 hover:text-red-600 cursor-pointer">Nam</li> 
              <li className="font-bold hover:text-red-600 cursor-pointer">Sản phẩm mới</li>
              <li className="font-bold text-red-600 cursor-pointer">Danh mục sản phẩm</li>
              <li className="hover:text-red-600 cursor-pointer">Áo phông</li>
              <li className="hover:text-red-600 cursor-pointer">Áo Polo</li>
              <li className="hover:text-red-600 cursor-pointer">Áo nỉ chui đầu</li>
              <li className="hover:text-red-600 cursor-pointer">Áo len</li>
              <li className="hover:text-red-600 cursor-pointer">Áo sơ mi</li>
              <li className="hover:text-red-600 cursor-pointer">Áo khoác</li>
              <li className="hover:text-red-600 cursor-pointer">Quần jeans</li>
              <li className="hover:text-red-600 cursor-pointer">Quần khaki</li>
              <li className="hover:text-red-600 cursor-pointer">Quần shorts</li>
              <li className="hover:text-red-600 cursor-pointer">Quần vải</li>
              <li className="hover:text-red-600 cursor-pointer">Đồ mặc nhà</li>
              <li className="hover:text-red-600 cursor-pointer">Quần áo thể thao</li>
              <li className="hover:text-red-600 cursor-pointer">Áo mặc trong</li>
              <li className="hover:text-red-600 cursor-pointer">Quần lót nam</li>
              <li className="hover:text-red-600 cursor-pointer">Phụ kiện</li>
              <br/>  
              <li className="font-bold hover:text-red-600 cursor-pointer">Sản phẩm đặc biệt</li>
              <li className="hover:text-red-600 cursor-pointer">Áo khoác gió</li>
              <li className="hover:text-red-600 cursor-pointer">Len lông Dê Cashmere</li>
              <br/>
              <li className="font-bold hover:text-red-600">Hướng dẫn chọn size</li>
          </ul>
        </section>
        <section className="w-10/12">
            <img
                className="cursor-pointer w-full "
                src="/assets/images/san-pham-nam.jpg" alt="noload">
            </img>
            <FilterProduct/>
        </section>
      </section>
      <FooterCanifa/>
    </section>
  );
}

export default MenProductList;
