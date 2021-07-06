import React from "react";
import { FiSearch, } from "react-icons/fi";
import { BiMap,BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart} from "react-icons/ai";
const HeaderCanifa = () => {
  return (
    <section>
        <div className="bg-gray-700">
            <img
                className=" cursor-pointer w-10/12 py-1 mx-auto " 
                src="/assets/images/GDVH-top-banner-new1.png" alt="noload">
            </img>
        </div>
        <div> 
            <div className="flex justify items-center justify-between my-6">
                <ul className="flex justify items-center space-x-8  text-gray-600 font-normal ">
                    <li className="mr-10">
                        <img
                            className=" h-14 cursor-pointer "
                            src="/assets/images/logo-canifa.png" alt="noload">
                        </img>
                    </li>
                    <li className="cursor-pointer group">
                        <a href="" className="group-hover:text-red-600">NỮ</a>
                        <div class="grid grid-cols-5 w-full px-28 text-sm absolute bg-gray-200 bg-opacity-95 opacity-0 left-0  group-hover:opacity-100 mt-20 group-hover: transition-all duration-500">
                            <ul class="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">HẰNG NGÀY</a></li>
                                <li><a href="" className="">Áo phông <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo sơmi<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo chống nắng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo kiểu</a></li>
                                <li><a href="" className="">Áo liền thân - Đầm</a></li>
                                <li><a href="" className="">Chân váy</a></li>
                                <li><a href="" className="">Quần jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần khaki</a></li>
                                <li><a href="" className="">Quần shorts</a></li>
                                <li><a href="" className="">Quần vải</a></li>
                                <li><a href="" className="">Áo dài len</a></li>
                                <li><a href="" className="">Áo len</a></li>
                                <li><a href="" className="">Áo nỉ</a></li>
                                <li><a href="" className="">Áo khoác</a></li>
                            </ul>
                            <ul className="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">MẶC NHÀ</a></li>
                                <li><a href="" className="">Bộ mặc nhà</a></li>
                                <li><a href="" className="">Áo mặc nhà</a></li>
                                <li><a href="" className="">Quần mặc nhà</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">ĐỒ MẶC BÊN TRONG</a></li>
                                <li><a href="" className="">Áo mặc trong</a></li>
                                <li><a href="" className="">Quần lót</a></li>
                                <li><a href="" className="">PHỤ KIỆN</a></li>
                                <li><a href="" className="">Tất</a></li>
                                <li><a href="" className="">Phụ kiện khác</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-red-600 font-bold"><a href="" className="">TẤT CẢ DƯỚI 149.000đ</a></li>
                            </ul>
                            <ul className="">
                                <img
                                    className="cursor-pointer w-10/12 mt-5 "
                                    src="/assets/images/spMoi_Nu.jpg" alt="noload">
                                </img>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer group">
                        <a href="" className="group-hover:text-red-600">NAM</a>
                        <div class="grid grid-cols-5 w-full px-28 text-sm absolute bg-gray-200 bg-opacity-95 opacity-0 left-0 group-hover:opacity-100 mt-20 group-hover: transition-all duration-500">
                            <ul class="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">HẰNG NGÀY</a></li>
                                <li><a href="" className="">Áo phông <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo polo</a></li>
                                <li><a href="" className="">Áo sơmi<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo chống nắng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần khaki</a></li>
                                <li><a href="" className="">Quần shorts</a></li>
                                <li><a href="" className="">Quần vải</a></li>
                                <li><a href="" className="">Áo nỉ</a></li>
                                <li><a href="" className="">Áo len</a></li>
                                <li><a href="" className="">Áo khoác</a></li>
                            </ul>
                            <ul className="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">MẶC NHÀ</a></li>
                                <li><a href="" className="">Bộ mặc nhà</a></li>
                                <li><a href="" className="">Áo mặc nhà</a></li>
                                <li><a href="" className="">Quần mặc nhà</a></li>
                                <li className="pt-6 text-gray-700 font-bold"><a href="" className="">LUYỆN TẬP</a></li>
                                <li><a href="" className="">Áo</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">ĐỒ MẶC BÊN TRONG</a></li>
                                <li><a href="" className="">Áo mặc trong</a></li>
                                <li><a href="" className="">Quần sịp</a></li>
                                <li className="pt-6 text-gray-700 font-bold"><a href="" className="">PHỤ KIỆN</a></li>
                                <li><a href="" className="">Tất</a></li>
                                <li><a href="" className="">Phụ kiện khác</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-red-600 font-bold"><a href="" className="">TẤT CẢ DƯỚI 149.000đ</a></li>
                            </ul>
                            <ul className="">
                                <img
                                    className="cursor-pointer w-10/12 m-6 "
                                    src="/assets/images/spMoi_Nam.jpg" alt="noload">
                                </img>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer group">
                        <a href="" className="group-hover:text-red-600">BÉ GÁI</a>
                        <div class="grid grid-cols-5 w-full px-28 text-sm absolute bg-gray-200 bg-opacity-95 opacity-0 left-0  group-hover:opacity-100 mt-20 group-hover: transition-all duration-500">
                            <ul class="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">HẰNG NGÀY</a></li>
                                <li><a href="" className="">Áo phông <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo sơmi<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo chống nắng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Váy liền</a></li>
                                <li><a href="" className="">Chân váy</a></li>
                                <li><a href="" className="">Quần jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần khaki</a></li>
                                <li><a href="" className="">Quần shorts<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần vải</a></li>
                                <li><a href="" className="">Áo dài len</a></li>
                                <li><a href="" className="">Áo nỉ</a></li>
                                <li><a href="" className="">Áo len</a></li>
                                <li><a href="" className="">Áo khoác</a></li>
                            </ul>
                            <ul className="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">MẶC NHÀ</a></li>
                                <li><a href="" className="">Bộ mặc nhà<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo mặc nhà</a></li>
                                <li><a href="" className="">Quần mặc nhà</a></li>
                                <li className="pt-6 text-gray-700 font-bold"><a href="" className="">LUYỆN TẬP</a></li>
                                <li><a href="" className="">Áo</a></li>
                                <li><a href="" className="">Quần</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">ĐỒ MẶC BÊN TRONG</a></li>
                                <li><a href="" className="">Áo mặc trong</a></li>
                                <li><a href="" className="">Quần lót</a></li>
                                <li><a href="" className="">PHỤ KIỆN</a></li>
                                <li><a href="" className="">Tất</a></li>
                                <li><a href="" className="">Phụ kiện khác</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-red-600 font-bold"><a href="" className="">TẤT CẢ DƯỚI 149.000đ</a></li>
                            </ul>
                            <ul className="">
                                <img
                                    className="cursor-pointer w-10/12 m-6"
                                    src="/assets/images/spMoi_Girlbaby.jpg" alt="noload">
                                </img>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer group">
                        <a href="" className="group-hover:text-red-600">BÉ TRAI</a>
                        <div class="grid grid-cols-5 w-full px-28 text-sm absolute bg-gray-200 z-10 bg-opacity-95 opacity-0 left-0  group-hover:opacity-100 mt-20 group-hover: transition-all duration-500">
                            <ul class="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">HẰNG NGÀY</a></li>
                                <li><a href="" className="">Áo phông <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo polo</a></li>
                                <li><a href="" className="">Áo sơmi</a></li>
                                <li><a href="" className="">Áo chống nắng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần khaki</a></li>
                                <li><a href="" className="">Quần shorts<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Quần vải</a></li>
                                <li><a href="" className="">Áo nỉ</a></li>
                                <li><a href="" className="">Áo len</a></li>
                                <li><a href="" className="">Áo khoác</a></li>
                            </ul>
                            <ul className="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">MẶC NHÀ</a></li>
                                <li><a href="" className="">Bộ mặc nhà<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                <li><a href="" className="">Áo mặc nhà</a></li>
                                <li><a href="" className="">Quần mặc nhà</a></li>
                                <li className="pt-6 text-gray-700 font-bold"><a href="" className="">LUYỆN TẬP</a></li>
                                <li><a href="" className="">Áo</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">ĐỒ MẶC BÊN TRONG</a></li>
                                <li><a href="" className="">Áo mặc trong</a></li>
                                <li><a href="" className="">Quần sịp</a></li>
                                <li className="pt-6 text-gray-700 font-bold"><a href="" className="">PHỤ KIỆN</a></li>
                                <li><a href="" className="">Tất</a></li>
                                <li><a href="" className="">Phụ kiện khác</a></li>
                            </ul>
                            <ul className="">
                                <li className="py-6 text-red-600 font-bold"><a href="" className="">TẤT CẢ DƯỚI 149.000đ</a></li>
                            </ul>
                            <ul className="">
                                <img
                                    className="cursor-pointer w-10/12 m-6 "
                                    src="/assets/images/spMoi_Boybaby.jpg" alt="noload">
                                </img>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer group">
                        <a href="" className="group-hover:text-red-600">MỚI</a>
                        <div class="grid grid-cols-5 gap-2 w-full px-28 text-sm absolute bg-gray-200 bg-opacity-95 opacity-0 left-0  group-hover:opacity-100 mt-20 group-hover: transition-all duration-500">
                            <ul>
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">NỮ </a></li>
                                <img
                                    className="cursor-pointer"
                                    src="/assets/images/Nu_SS2021.png" alt="noload">
                                </img>
                            </ul>
                            <ul>
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">NAM</a></li>
                                <img
                                    className="cursor-pointer"
                                    src="/assets/images/Nam_SS2021.jpg" alt="noload">
                                </img>
                            </ul>
                            <ul>
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">BÉ TRAI</a></li>
                                <img
                                    className="cursor-pointer"
                                    src="/assets/images/beTrai_SS2021.png" alt="noload">
                                </img>
                            </ul>
                            <ul>
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">BÉ GÁI</a></li>
                                <img
                                    className="cursor-pointer"
                                    src="/assets/images/beGai_SS2021.png" alt="noload">
                                </img>
                            </ul>
                            <ul>
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">BST ÁO PHÔNG GIA ĐÌNH</a></li>
                                <img
                                    className="cursor-pointer mb-10"
                                    src="/assets/images/bst-ao-phong-mege-menu.jpg" alt="noload">
                                </img>
                            </ul>
                        </div>
                    </li>
                    <li className="text-red-600 cursor-pointer">
                        GIÁ TỐT
                    </li>
                    <li className="cursor-pointer group">
                        <a href="" className="group-hover:text-red-600">GIẢM GIÁ</a>
                        <div class="grid grid-cols-5 w-full px-28 text-sm absolute bg-gray-200 bg-opacity-95 z-10 opacity-0 left-0  group-hover:opacity-100 mt-20  group-hover: transition-all duration-500">
                            <ul class="mb-10">
                                <li className="py-6 text-gray-700 font-bold"><a href="" className="">GIÁ MỚI</a></li>
                                <li><a href="" className="">Nữ </a></li>
                                <li><a href="" className="">Nam </a></li>
                                <li><a href="" className="">Bé Gái </a></li>
                                <li><a href="" className="">Bé Trai </a></li>
                            </ul>
                            <ul className="mb-10">
                                <li className="pt-6 text-red-600 font-bold"><a href="" className="">SĂN ƯU ĐÃI 99K</a></li>
                                <li className="pt-6 text-red-600 font-bold"><a href="" className="">SĂN ƯU ĐÃI 149K</a></li>
                                <li className="pt-6 text-red-600 font-bold"><a href="" className="">SĂN ƯU ĐÃI 249K</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul
                className="flex text-2xl space-x-5 text-gray-600"
                >
                    <li className="flex">
                        <input 
                        placeholder ="Tìm kiếm"
                        name="fname"
                        className="border text-sm w-80 h-6 pl-3 border-black outline-none"
                        />
                        <FiSearch
                        className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <BiMap
                        className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <BiUser
                        className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <AiOutlineShoppingCart
                        className="cursor-pointer"
                        />
                    </li>
                </ul>
            </div>
            <p className="bg-gray-700 h-8 text-gray-300 justify-center flex items-center text-sm relative">
                Thêm vào giỏ hàng 499.000đ để miền phí vận chuyển
            </p>
        </div>
    </section>
    
  );
}
export default HeaderCanifa;
