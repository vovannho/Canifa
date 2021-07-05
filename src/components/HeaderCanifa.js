import React from "react";
import { FiSearch, } from "react-icons/fi";
import { BiMap,BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart} from "react-icons/ai";
const HeaderCanifa = () => {
  return (
    <div className="font-sans">
    <section className="bg-gray-700">
        <img
           className=" cursor-pointer w-10/12 py-1 mx-auto " 
            src="/assets/images/GDVH-top-banner-new1.png" alt="noload">
        </img>
    </section>
    <section className="mx-20 px-2"> 
        <div
        className="flex justify items-center justify-between my-6"
        >
            <ul className="flex justify items-center space-x-8 font-medium">
                <li className="mr-10">
                    <img
                        className=" h-14 cursor-pointer "
                        src="/assets/images/logo-canifa.png" alt="noload">
                    </img>
                </li>
                <li className="cursor-pointer group">
                    <a href="" className="menu-item group-hover:text-red-600">NỮ</a>
                    <div class="grid grid-cols-5 w-full absolute bg-gray-200 opacity-0  group-hover:opacity-100 mt-10 group-hover: transition-all duration-500">
                        <ul class="">
                            <li className="py-5"><a href="" className="mega-sub-item-title">HẰNG NGÀY</a></li>
                            <li><a href="" className="mega-sub-item">Áo phông <a className="text-red-600 ml-1">HOT</a></a></li>
                            <li><a href="" className="mega-sub-item">Áo sơmi<a className="text-red-600 ml-1">HOT</a></a></li>
                            <li><a href="" className="mega-sub-item">Áo chống nắng<a className="text-red-600 ml-1">HOT</a></a></li>
                            <li><a href="" className="mega-sub-item">Áo kiểu</a></li>
                            <li><a href="" className="mega-sub-item">Áo liền thân - Đầm</a></li>
                            <li><a href="" className="mega-sub-item">Chân váy</a></li>
                            <li><a href="" className="mega-sub-item">Quần jeans<a className="text-red-600 ml-1">HOT</a></a></li>
                            <li><a href="" className="mega-sub-item">Quần khaki</a></li>
                            <li><a href="" className="mega-sub-item">Quần shorts</a></li>
                            <li><a href="" className="mega-sub-item">Quần vải</a></li>
                            <li><a href="" className="mega-sub-item">Áo dài len</a></li>
                            <li><a href="" className="mega-sub-item">Áo len</a></li>
                            <li><a href="" className="mega-sub-item">Áo nỉ</a></li>
                            <li><a href="" className="mega-sub-item">Áo khoác</a></li>
                        </ul>
                        <ul className="">
                            <li className="py-5"><a href="" className="mega-sub-item-title">MẶC NHÀ</a></li>
                            <li><a href="" className="mega-sub-item">Bộ mặc nhà</a></li>
                            <li><a href="" className="mega-sub-item">Áo mặc nhà</a></li>
                            <li><a href="" className="mega-sub-item">Quần mặc nhà</a></li>
                        </ul>
                        <ul className="">
                            <li className="py-5"><a href="" className="mega-sub-item-title">ĐỒ MẶC BÊN TRONG</a></li>
                            <li><a href="" className="mega-sub-item">Áo mặc trong</a></li>
                            <li><a href="" className="mega-sub-item">Quần lót</a></li>
                            <li><a href="" className="mega-sub-item-title">PHỤ KIỆN</a></li>
                            <li><a href="" className="mega-sub-item">Tất</a></li>
                            <li><a href="" className="mega-sub-item">Phụ kiện khác</a></li>
                        </ul>
                        <ul className="">
                            <li className="py-5"><a href="" className="mega-sub-item-title">TẤT CẢ DƯỚI 149.000đ</a></li>
                        </ul>
                        
                    </div>
                </li>
                <li className="cursor-pointer hover:text-red-600">
                    NAM
                </li>
                <li className="cursor-pointer hover:text-red-600">
                    BÉ GÁI
                </li>
                <li className="cursor-pointer hover:text-red-600">
                    BÉ TRAI
                </li>
                <li className="text-red-600 cursor-pointer ">
                    MỚI
                </li >
                <li className="text-red-600 cursor-pointer">
                    GIÁ TỐT
                </li>
                <li className="text-red-600 cursor-pointer">
                    GIẢM GIÁ
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
        {/* <div className="bg-gray-700 h-8 text-gray-300 justify-center flex items-center text-sm">
            Thêm vào giỏ hàng 499.000đ để miền phí vận chuyển
        </div> */}
    </section>
    
    </div>
  );
}

export default HeaderCanifa;
