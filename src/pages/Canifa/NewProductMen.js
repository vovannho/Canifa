import React, { useState } from "react";
import FilterProduct from '../../components/FilterProduct';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import { Link } from "react-router-dom";
const NewProductMen = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ / Nam / Sản phẩm mới</p> 
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
                src="/assets/images/bst-casual-dau-mua.jpg" alt="noload">
            </img>
            <ul className="grid grid-cols-4 text-center text-gray-700 text-base">
                <Link to="/NewProductMen">
                <li
                className="py-2 font-bold text-white bg-red-600 "
                 >NAM</li>
                 </Link>
                 <Link to="/NewProductWomen">
                <li 
                className="py-2 font-bold border-l border-b border-red-600  "
                >NỮ</li>
                </Link>
                <Link to="/NewProductBoy">
                <li
                className="py-2 font-bold border-l border-b border-red-600"
                >BÉ TRAI</li>
                </Link>
                <Link to="/NewProductGirls">
                <li 
                className="py-2 font-bold border-l border-b border-r border-red-600"
                >BÉ GÁI</li>
                </Link>
            </ul>
            <FilterProduct/>
            <p className="text-center text-gray-700 font-bold text-lg">SẢN PHẨM MỚI</p>
            <p className="text-center text-gray-700 font-bold text-xl my-3">CÁC MẪU QUẦN ÁO THỜI TRANG NAM ĐẸP NHẤT</p>
            <p>
            Các mẫu quần áo nam tại CANIFA được thiết kế tinh tế từ chất liệu tới kiểu dáng phù hợp cho nhiều độ tuổi. Phái mạnh có thể tự tin diện những bộ đồ theo mọi phong cách từ trẻ trung năng động đến sang trọng, lịch lãm. Đến với bộ sưu tập thời trang nam CANIFA nam giới sẽ có một diện mạo mới và luôn cảm thấy mình nổi bật trước mọi ánh nhìn.
            </p>
        </section>
      </section>
      <p className="border-b mt-10 mx-20"></p>
      <FooterCanifa/>
    </section>
  );
}

export default NewProductMen;
