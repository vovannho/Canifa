import React from "react";
import FooterCanifa from "../../components/FooterCanifa";
import HeaderCanifa from "../../components/HeaderCanifa";
import ListStore from "../../components/ListStore";

const StoreCanifa = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderCanifa />
      <div className="px-2 xl:px-20 text-gray-600 text-xs ">
        <section className="my-6 font-thin">
          <a className="cursor-pointer">Trang chủ</a>
          <a> / Hệ thống cửa hàng CANIFA</a>
        </section>
        <section className=" flex items-center relative min-h-72">
          <img
            className=" w-full xl:h-auto h-72  bg-white-600 opacity-40 "
            src="/assets/images/bg-search-storelocator.jpg"
            alt="noload"
          ></img>
          <div className="absolute text-center w-full left-0 ">
            <div className="text-gray-700 mt-6 mb-6 xl:mb-16">
              <h1 className="text-2xl font-bold">HỆ THỐNG CỬA HÀNG</h1>
              <p className="font-bold">
                Bạn cần hỗ trợ? gọi miễn phí 1800 6061
              </p>
            </div>

            <div className=" xl:flex items-center justify-center w-full ">
              <input
                placeholder="Vui lòng nhập tên Quận/Huyện hoặc Tỉnh/TP..."
                name="fname"
                className=" xl:w-6/12 w-10/12   h-7 pl-2 border-2 border-gray-600 outline-none bg-transparent"
              />
              <button className="xl:w-2/12 w-4/12   mt-2 xl:mt-0 border-2 px-6 h-7 border-red-500 ml-1.5 font-bold text-red-500">
                TÌM KIẾM
              </button>
            </div>
            <button className="px-2 h-7 text-white bg-gray-700 mt-2 xl:mt-9">
              HOẶC XEM TẤT CẢ 110 CỬA HÀNG
            </button>
          </div>
        </section>
        <section className="my-10">
          <h1 className="text-2xl font-bold text-gray-700">STORE NỔI BẬT</h1>
          <ul className="grid grid-cols-4  gap-2 my-7">
            <li className=" col-span-2 xl:col-span-1 cursor-pointer">
              <img
                className="w-full mb-3"
                src="/assets/images/store1.jpg"
                alt="noload"
              ></img>
              <p>CANIFA 181 Giảng Võ</p>
            </li>
            <li className=" col-span-2 xl:col-span-1 cursor-pointer">
              <img
                className="w-full mb-3"
                src="/assets/images/store2.jpg"
                alt="noload"
              ></img>
              <p>CANIFA 181 Giảng Võ</p>
            </li>
            <li className=" col-span-2 xl:col-span-1 cursor-pointer">
              <img
                className="w-full mb-3"
                src="/assets/images/store3.jpg"
                alt="noload"
              ></img>
              <p>CANIFA 181 Giảng Võ</p>
            </li>
            <li className=" col-span-2 xl:col-span-1 cursor-pointer">
              <img
                className="w-full mb-3"
                src="/assets/images/store4.jpg"
                alt="noload"
              ></img>
              <p>CANIFA 181 Giảng Võ</p>
            </li>
          </ul>
        </section>
        <section className="space-y-7 mb-20 ">
          <h1 className="text-2xl font-bold text-gray-700 mt-14 ">
            DANH SÁCH CỬA HÀNG THỜI TRANG CANIFA
          </h1>
          <div>
            <ListStore />
          </div>
        </section>
        <p className="w-full border-b"></p>
      </div>
      <FooterCanifa />
    </section>
  );
};
export default StoreCanifa;
//phần map list chưa đk
