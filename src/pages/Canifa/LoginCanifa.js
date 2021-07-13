import React from 'react';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import { Link } from "react-router-dom";
const LoginCanifa = () => {
  return (
    <section className="text-xs text-gray-600">
        <HeaderCanifa/>
            <section className="my-6 mx-20">
                <a className="cursor-pointer">Trang chủ</a>
                <a> / Khách hàng đăng nhập</a>
            </section>
            <section className="w-5/12 mx-auto mb-32">
                <h1 className="text-2xl font-bold text-gray-700 pt-5 ">TÀI KHOẢN</h1>
                <p className="text-base my-4">
                    
                    <Link to="/StoreCanifa"><a className="font-bold text-gray-700 "> Đăng nhập </a></Link>
                     hoặc 
                     <Link to="/StoreCanifa"><a className="font-bold text-gray-700 "> Đăng ký </a></Link>
                    để CANIFA có thể phục vụ bạn tốt hơn thông qua các chương trình chăm sóc khách hàng, khuyến mãi và tích điểm
                </p>
                <p className="py-2">Số điện thoại</p>
                <input 
                    placeholder ="Nhập số điện thoại"
                    name="fname"
                    className="border w-10/12 h-9 pl-3 outline-none"
                />
            </section>
            <p className=" border-b mx-20"></p>
        <FooterCanifa/>
    </section>
  );
}

export default LoginCanifa;
