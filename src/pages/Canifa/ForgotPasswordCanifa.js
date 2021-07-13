import React from 'react';
import FooterCanifa from '../../components/FooterCanifa';
import HeaderCanifa from '../../components/HeaderCanifa';
import { Link } from "react-router-dom";
const ForgotPasswordCanifa = () => {
  return (
    <section className="max-w-screen-2xl mx-auto text-xs text-gray-600 ">
        <HeaderCanifa/>
            <section className="my-6 mx-20">
                <p className="cursor-pointer">Trang chủ</p>
                <p> / Forgot Your Password</p>
            </section>
            <section className="w-5/12 mx-auto mb-32">
                <h1 className="text-2xl font-bold text-gray-700 pt-5 ">QUÊN MẬT KHẨU?</h1>
                <Link to="/StoreCanifa">
                    <p className="text-base my-4">
                        Vui lòng nhập địa chỉ email. Bạn sẽ nhận được một liên kết để thiết lập lại mật khẩu của bạn.
                    </p>
                </Link>
                <p className="py-2">*Địa chỉ email</p>
                <input 
                    placeholder ="Nhập số điện thoại"
                    name="fname"
                    className="border w-10/12 h-9 pl-3 outline-none"
                />
                <p className="py-2 mt-10">« Quay lại trang đăng nhập</p>
                <button 
                    className="border-2 w-10/12 h-7 border-gray-700 font-bold">
                    CHẤP NHẬN
                </button>
            </section>
            <p className="border-b mx-20 "></p>
        <FooterCanifa/>
    </section>
  );
}
export default ForgotPasswordCanifa;
