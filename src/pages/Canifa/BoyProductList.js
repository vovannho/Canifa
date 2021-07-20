import React from 'react';
import FilterProduct from '../../components/FilterProduct';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';

const BoyProductList = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ / Bé Trai / Danh mục sản phẩm</p> 
      <section className="flex text-xs px-20">
        <section className="w-2/12">
            <ul className="space-y-2 sticky top-20">
              <li className="font-bold mt-5 cursor-pointer hover:text-red-600">Bé Trai</li> 
              <li className="font-bold cursor-pointer hover:text-red-600">Sản phẩm mới</li>
              <li className="font-bold text-red-600 cursor-pointer">Danh mục sản phẩm</li>
              <li className="cursor-pointer hover:text-red-600">Áo phông</li>
              <li className="cursor-pointer hover:text-red-600">Áo Polo</li>
              <li className="cursor-pointer hover:text-red-600">Áo nỉ chui đầu</li>
              <li className="cursor-pointer hover:text-red-600">Áo len</li>
              <li className="cursor-pointer hover:text-red-600">Áo sơ mi</li>
              <li className="cursor-pointer hover:text-red-600">Áo khoác</li>
              <li className="cursor-pointer hover:text-red-600">Quần jeans</li>
              <li className="cursor-pointer hover:text-red-600">Quần khaki</li>
              <li className="cursor-pointer hover:text-red-600">Quần shorts</li>
              <li className="cursor-pointer hover:text-red-600">Quần vải</li>
              <li className="cursor-pointer hover:text-red-600">Đồ mặc nhà</li>
              <li className="cursor-pointer hover:text-red-600">Quần áo thể thao</li>
              <li className="cursor-pointer hover:text-red-600">Áo mặc trong</li>
              <li className="cursor-pointer hover:text-red-600">Quần lót</li>
              <li className="cursor-pointer hover:text-red-600">Phụ kiện</li>
              <li className="cursor-pointer hover:text-red-600">Đồ mặc bên trong</li>
              <br/>  
              <li className="font-bold">Sản phẩm đặc biệt</li>
              <li className="cursor-pointer hover:text-red-600">Áo khoác gió</li>
              <li className="cursor-pointer hover:text-red-600">Chống thấm nước</li>
              <li className="cursor-pointer hover:text-red-600">Len lông cừu Úc</li>
              <br/>
              <li className="font-bold cursor-pointer hover:text-red-600">Hướng dẫn chọn size</li>
          </ul>
        </section>
        <section className="w-10/12">
            <img
                className="cursor-pointer w-full "
                src="/assets/images/san-pham-be-trai.jpg" alt="noload">
            </img>
            <FilterProduct/>
            <p className="text-center text-gray-700 font-bold text-xl">DANH MỤC SẢN PHẨM</p>
        </section>
      </section>
      <FooterCanifa/>
    </section>
  );
}

export default BoyProductList;
