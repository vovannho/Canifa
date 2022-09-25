import React, { useState } from "react";
import FilterProduct from "../../components/FilterProduct";
import FooterCanifa from "../../components/FooterCanifa";
import HeaderCanifa from "../../components/HeaderCanifa";
import { Link } from "react-router-dom";
const NewProductWomen = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa />
      <p className="px-2 xl:px-20 pt-5 text-xs">Trang chủ /Nữ /Sản phẩm mới</p>
      <section className="grid grid-cols-12 text-xs px-2 xl:px-20">
        <section className="col-span-12 xl:col-span-2">
          <ul className="space-y-2 sticky top-20">
            <li className="font-bold mt-5 cursor-pointer hover:text-red-600">
              Nữ
            </li>
            <li className="font-bold cursor-pointer hover:text-red-600">
              Sản phẩm mới
            </li>
            <li className="font-bold text-red-600 cursor-pointer">
              Danh mục sản phẩm
            </li>
            <li className="cursor-pointer hover:text-red-600">Áo phông</li>
            <li className="cursor-pointer hover:text-red-600">Áo Polo</li>
            <li className="cursor-pointer hover:text-red-600">
              Áo nỉ chui đầu
            </li>
            <li className="cursor-pointer hover:text-red-600">Áo len</li>
            <li className="cursor-pointer hover:text-red-600">Áo sơ mi</li>
            <li className="cursor-pointer hover:text-red-600">Áo khoác</li>
            <li className="cursor-pointer hover:text-red-600">Quần jeans</li>
            <li className="cursor-pointer hover:text-red-600">Quần khaki</li>
            <li className="cursor-pointer hover:text-red-600">Quần shorts</li>
            <li className="cursor-pointer hover:text-red-600">Quần vải</li>
            <li className="cursor-pointer hover:text-red-600">Đồ mặc nhà</li>
            <li className="cursor-pointer hover:text-red-600">
              Quần áo thể thao
            </li>
            <li className="cursor-pointer hover:text-red-600">Áo mặc trong</li>
            <li className="cursor-pointer hover:text-red-600">Quần lót</li>
            <li className="cursor-pointer hover:text-red-600">Phụ kiện</li>
            <li className="cursor-pointer hover:text-red-600">
              Đồ mặc bên trong
            </li>
            <br />
            <li className="font-bold cursor-pointer hover:text-red-600">
              Sản phẩm đặc biệt
            </li>
            <li className="cursor-pointer hover:text-red-600">Áo khoác gió</li>
            <li className="cursor-pointer hover:text-red-600">
              Chống thấm nước
            </li>
            <li className="cursor-pointer hover:text-red-600">
              Len lông cừu Úc
            </li>
            <br />
            <li className="font-bold cursor-pointer hover:text-red-600">
              Hướng dẫn chọn size
            </li>
          </ul>
        </section>
        <section className="col-span-12 xl:col-span-10">
          <img
            className="cursor-pointer w-full "
            src="/assets/images/bst-casual-dau-mua.jpg"
            alt="noload"
          ></img>
          <ul className="grid grid-cols-4 text-center text-gray-700 text-sm xl:text-base">
            <Link to="/NewProductMen">
              <li className="py-2 font-bold border-l border-b border-red-600">
                NAM
              </li>
            </Link>
            <Link to="/NewProductWomen">
              <li className="py-2 font-bold text-white bg-red-600 ">NỮ</li>
            </Link>
            <Link to="/NewProductBoy">
              <li className="py-2 font-bold border-l border-b border-red-600">
                BÉ TRAI
              </li>
            </Link>
            <Link to="/NewProductGirls">
              <li className="py-2 font-bold border-l border-r border-b border-red-600 ">
                BÉ GÁI
              </li>
            </Link>
          </ul>
          <FilterProduct />
          <p className="text-center text-gray-700 font-bold text-lg">
            SẢN PHẨM MỚI
          </p>
          <p className="text-center text-gray-700 font-bold text-xl my-3">
            CÁC MẪU QUẦN ÁO THỜI TRANG NỮ ĐẸP NHẤT
          </p>
          <p>
            Với 1000+ mẫu quần áo nữ, CANIFA sẽ giúp bạn thỏa sức lựa chọn và
            làm mới phong cách cho bản thân. Phái đẹp sẽ tràn đầy tự tin và luôn
            cảm thấy thoải mái khi diện đồ từ BST thời trang nữ CANIFA do sự đa
            dạng trong mẫu mã, kiểu dáng cũng như màu sắc...
          </p>
        </section>
      </section>
      <p className=" border-b mt-10 mx-20"></p>
      <FooterCanifa />
    </section>
  );
};

export default NewProductWomen;
