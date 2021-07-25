import React from 'react';
import FilterProduct from '../../components/FilterProduct';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import { Link } from "react-router-dom";
const NewProductGirls = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ /Bé Gái / Sản phẩm mới </p> 
      <section className="flex text-xs px-20">
        <section className="w-2/12">
            <ul className="space-y-2 sticky top-20">
              <li className="font-bold mt-5 mb-3 cursor-pointer hover:text-red-600">Bé Gái</li> 
              <li className="font-bold cursor-pointer hover:text-red-600">Sản phẩm mới</li>
              <li className="font-bold text-red-600">Danh mục sản phẩm</li>
              <li className="cursor-pointer hover:text-red-600">Áo phông</li>
              <li className="cursor-pointer hover:text-red-600">Áo Polo</li>
              <li className="cursor-pointer hover:text-red-600">Áo nỉ chui đầu</li>
              <li className="cursor-pointer hover:text-red-600">Áo len</li>
              <li className="cursor-pointer hover:text-red-600">Áo sơ mi</li>
              <li className="cursor-pointer hover:text-red-600">Áo khoác</li>
              <li className="cursor-pointer hover:text-red-600">Váy liền</li>
              <li className="cursor-pointer hover:text-red-600">Chân váy</li>
              <li className="cursor-pointer hover:text-red-600">Quần jeans</li>
              <li className="cursor-pointer hover:text-red-600">Quần khaki</li>
              <li className="cursor-pointer hover:text-red-600">Quần shorts</li>
              <li className="cursor-pointer hover:text-red-600">Quần vải</li>
              <li className="cursor-pointer hover:text-red-600">Đồ mặc nhà</li>
              <li className="cursor-pointer hover:text-red-600">Trang phục luyện tập</li>
              <li className="cursor-pointer hover:text-red-600">Áo mặc trong</li>
              <li className="cursor-pointer hover:text-red-600">Quần chip</li>
              <li className="cursor-pointer hover:text-red-600">Phụ kiện</li>
              <li className="cursor-pointer hover:text-red-600">Đồ mặc bên trong</li>
              <br/>  
              <li className="font-bold cursor-pointer hover:text-red-600">Sản phẩm đặc biệt</li>
              <br/>
              <li className="font-bold cursor-pointer hover:text-red-600">Hướng dẫn chọn size</li>
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
                className="py-2 font-bold border-l border-b border-red-600"
                 >NAM</li>
                 </Link>
                 <Link to="/NewProductWomen">
                <li 
                className="py-2 font-bold border-l border-b border-red-600"
                >NỮ</li>
                </Link>
                <Link to="/NewProductBoy">
                <li
                className="py-2 font-bold border-l border-b border-red-600"
                >BÉ TRAI</li>
                </Link>
                <Link to="/NewProductGirls">
                <li 
                className="py-2 font-bold text-white bg-red-600 border-r border-red-600 "
                >BÉ GÁI</li>
                </Link>
            </ul>
            <FilterProduct/>
            <p className="text-center text-gray-700 font-bold text-lg">SẢN PHẨM MỚI</p>
            <p className="text-center text-gray-700 font-bold text-xl my-3">CÁC MẪU QUẦN ÁO THỜI TRANG CHO BÉ GÁI ĐẸP NHẤT</p>
            <p>BST thời trang bé gái tại CANIFA có rất nhiều mẫu mã, size cho trẻ em nữ từ 3 đến 16 tuổi. Bạn có thể dễ dàng lựa chọn trang phục cho bé mặc mỗi ngày, từ những chất liệu denim, cotton, linen cao cấp được thiết kế theo nhiều kiểu dáng khác nhau. Đến với CANIFA, bạn sẽ thỏa sức lựa chọn cho con những bộ đồ năng động, thời trang dù đi học hay đi chơi.</p>
        </section>
      </section>
      <p className="border-b mx-20 mt-10"></p>
      <FooterCanifa/>
    </section>
  );
}

export default NewProductGirls;
