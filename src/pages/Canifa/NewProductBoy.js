import React from 'react';
import FilterProduct from '../../components/FilterProduct';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import { Link } from "react-router-dom";
const NewProductBoy = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa/>
      <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ / Bé Trai / Danh mục sản phẩm</p> 
      <section className="flex text-xs px-20">
        <section className="w-2/12">
            <ul className="space-y-2 sticky top-20">
              <li className="font-bold mt-5 mb-3 cursor-pointer hover:text-red-600">Bé Trai</li> 
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
                className="py-2 font-bold text-white bg-red-600 "
                >BÉ TRAI</li>
                </Link>
                <Link to="/NewProductGirls">
                <li 
                className="py-2 font-bold border-l border-r border-b border-red-600"
                >BÉ GÁI</li>
                </Link>
            </ul>
            <FilterProduct/>
            <p className="text-center text-gray-700 font-bold text-lg">SẢN PHẨM MỚI</p>
            <p className="text-center text-gray-700 font-bold text-xl my-3">CÁC MẪU QUẦN ÁO THỜI TRANG CHO BÉ TRAI ĐẸP NHẤT</p>
            <p>Thật dễ dàng để mua sắm những bộ quần áo thời trang và chất lượng cho bé trai từ 3 đến 16+ tuổi với giá tốt nhất tại CANIFA. Chỉ với vài thao tác chuột bạn đã có thể chọn lựa những món đồ quần áo, phụ kiện và nhiều hơn thế nữa với vô vàn màu sắc & kiểu dáng cho cậu nhóc tinh nghịch nhà mình. Luôn đặt tiêu chí an toàn cho da trẻ em, bền đẹp và thoải mái lên hàng đầu, CANIFA đã và đang cố gắng nỗ lực để tạo ra những trải nghiệm tuyệt vời nhất cho các bé !
            </p>

            </section>
      </section>
      <p className="border-b mt-10 mx-20"></p>
      <FooterCanifa/>
    </section>
  );
}

export default NewProductBoy;
