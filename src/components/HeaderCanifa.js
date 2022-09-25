import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiMap, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import DemoMarquee from "../pages/DemoMarquee";
const HeaderCanifa = () => {
  const [showGT, setShowGT] = useState(false);
  const [showUL2, setShowUL2] = useState(false);
  const [showUL3, setShowUL3] = useState(false);
  const [showUL4, setShowUL4] = useState(false);
  const [showUL5, setShowUL5] = useState(false);
  const [showUL6, setShowUL6] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  function scrollFunction() {
    if (document.body.scrollTop > 6 || document.documentElement.scrollTop > 6) {
      var element = document.getElementById("navbar");
      element.classList.remove("py-6");
      element.classList.add("py-0");
      var element1 = document.getElementById("marquee");
      element1.classList.remove("block");
      element1.classList.add("hidden");
    } else if (document.body.scrollTop < 6) {
      var element = document.getElementById("navbar");
      element.classList.remove("py-0");
      element.classList.add("py-6");
      var element1 = document.getElementById("marquee");
      element1.classList.remove("hidden");
      element1.classList.add("block");
    }
  }

  return (
    <section className=" sticky top-0 z-10">
      <div
        id="navbar"
        className="flex justify items-center justify-between py-2 xl:py-6  relative max-w-screen-2xl mx-0 xl:mx-20 bg-white"
      >
        <Link to="/HomeCanifa">
          <div className="h-14  cursor-pointer ">
            <img
              className=" h-14 cursor-pointer "
              src="/assets/images/logo-canifa.png"
              alt="noload"
            ></img>
          </div>
        </Link>
        <ul className="xl:flex justify items-center  space-x-8  text-gray-600 font-normal z-10 hidden ">
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowGT(true)}
            onMouseLeave={() => setShowGT(false)}
          >
            <Link to="/WomenProductList">
              <a href="" className=" hover:text-red-600 text-sm">
                NỮ
              </a>
            </Link>
            <div
              class={`absolute left-0 w-full  ${
                showGT === true ? `` : `hidden`
              }`}
              style={{ paddingTop: "70px" }}
            >
              <div className="grid grid-cols-5  pt-2 text-xs px-28 pb-10 bg-white bg-opacity-90 ">
                <ul class="">
                  <li className="py-4 text-gray-700 font-bold ">
                    <a href="" className="">
                      HẰNG NGÀY
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo phông <a className="text-red-600 ml-1 ">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo sơmi<a className="text-red-600 ml-1 ">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo chống nắng<a className="text-red-600 ml-1 ">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo kiểu
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo liền thân - Đầm
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Chân váy
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần jeans<a className="text-red-600 ml-1 ">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần khaki
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần shorts
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần vải
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo dài len
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo len
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo nỉ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo khoác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      MẶC NHÀ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Bộ mặc nhà
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc nhà
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần mặc nhà
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      ĐỒ MẶC BÊN TRONG
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc trong
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần lót
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      PHỤ KIỆN
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Tất
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Phụ kiện khác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-red-600 font-bold">
                    <a href="" className="">
                      TẤT CẢ DƯỚI 149.000đ
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <img
                    className="cursor-pointer py-4  "
                    src="/assets/images/spMoi_Nu.jpg"
                    alt="noload"
                  ></img>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowUL2(true)}
            onMouseLeave={() => setShowUL2(false)}
          >
            <Link to="/MenProductList">
              <a href="" className="hover:text-red-600 text-sm">
                NAM
              </a>
            </Link>
            <div
              class={`absolute  w-full left-0 ${
                showUL2 === true ? `` : `hidden`
              } `}
              style={{ paddingTop: "70px" }}
            >
              <div className="grid grid-cols-5  pt-2 px-28 text-xs bg-white bg-opacity-90">
                <ul class="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      HẰNG NGÀY
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo phông{" "}
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo polo
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo sơmi<a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo chống nắng
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần jeans
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần khaki
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần shorts
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần vải
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo nỉ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo len
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo khoác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      MẶC NHÀ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Bộ mặc nhà
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc nhà
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần mặc nhà
                    </a>
                  </li>
                  <li className="pt-6 text-gray-700 font-bold">
                    <a href="" className="">
                      LUYỆN TẬP
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      ĐỒ MẶC BÊN TRONG
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc trong
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần sịp
                    </a>
                  </li>
                  <li className="pt-4 text-gray-700 font-bold">
                    <a href="" className="">
                      PHỤ KIỆN
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Tất
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Phụ kiện khác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 pb-10 text-red-600 font-bold">
                    <a href="" className="">
                      TẤT CẢ DƯỚI 149.000đ
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <img
                    className="cursor-pointer w-10/12 m-6 "
                    src="/assets/images/spMoi_Nam.jpg"
                    alt="noload"
                  ></img>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowUL3(true)}
            onMouseLeave={() => setShowUL3(false)}
          >
            <Link to="/GirlsProductList">
              <a href="" className="hover:text-red-600 text-sm">
                BÉ GÁI
              </a>
            </Link>
            <div
              class={`absolute  w-full left-0 ${
                showUL3 === true ? `` : `hidden`
              } `}
              style={{ paddingTop: "70px" }}
            >
              <div className="grid grid-cols-5  pt-2 px-28 text-xs bg-white bg-opacity-90">
                <ul class="mb-10">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      HẰNG NGÀY
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo phông{" "}
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo sơmi<a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo chống nắng
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Váy liền
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Chân váy
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần jeans
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần khaki
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần shorts
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần vải
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo dài len
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo nỉ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo len
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo khoác
                    </a>
                  </li>
                </ul>
                <ul className="mb-10">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      MẶC NHÀ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Bộ mặc nhà
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc nhà
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần mặc nhà
                    </a>
                  </li>
                  <li className="pt-6 text-gray-700 font-bold">
                    <a href="" className="">
                      LUYỆN TẬP
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      ĐỒ MẶC BÊN TRONG
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc trong
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần lót
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      PHỤ KIỆN
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Tất
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Phụ kiện khác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-red-600 font-bold">
                    <a href="" className="">
                      TẤT CẢ DƯỚI 149.000đ
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <img
                    className="cursor-pointer w-10/12 m-6"
                    src="/assets/images/spMoi_Girlbaby.jpg"
                    alt="noload"
                  ></img>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowUL4(true)}
            onMouseLeave={() => setShowUL4(false)}
          >
            <Link to="/BoyProductList">
              <a href="" className="group-hover:text-red-600 text-sm">
                BÉ TRAI
              </a>
            </Link>
            <div
              class={`absolute  w-full left-0 ${
                showUL4 === true ? `` : `hidden`
              } `}
              style={{ paddingTop: "70px" }}
            >
              <div className="grid grid-cols-5  pt-2 px-28 text-xs bg-white bg-opacity-90">
                <ul class="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      HẰNG NGÀY
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo phông{" "}
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo polo
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo sơmi
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo chống nắng
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần jeans
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần khaki
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần shorts
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần vải
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo nỉ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo len
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo khoác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      MẶC NHÀ
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Bộ mặc nhà
                      <a className="text-red-600 ml-1 font-bold">HOT</a>
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc nhà
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần mặc nhà
                    </a>
                  </li>
                  <li className="pt-4 text-gray-700 font-bold">
                    <a href="" className="">
                      LUYỆN TẬP
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-gray-700 font-bold">
                    <a href="" className="">
                      ĐỒ MẶC BÊN TRONG
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Áo mặc trong
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Quần sịp
                    </a>
                  </li>
                  <li className="pt-6 text-gray-700 font-bold">
                    <a href="" className="">
                      PHỤ KIỆN
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Tất
                    </a>
                  </li>
                  <li>
                    <a href="" className="">
                      Phụ kiện khác
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <li className="py-4 text-red-600 font-bold">
                    <a href="" className="">
                      TẤT CẢ DƯỚI 149.000đ
                    </a>
                  </li>
                </ul>
                <ul className="">
                  <img
                    className="cursor-pointer my-4 mb-10 "
                    src="/assets/images/spMoi_Boybaby.jpg"
                    alt="noload"
                  ></img>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowUL5(true)}
            onMouseLeave={() => setShowUL5(false)}
          >
            <a href="" className="text-red-600 text-sm">
              MỚI
            </a>
            <div
              class={`absolute  w-full left-0 ${
                showUL5 === true ? `` : `hidden`
              } `}
              style={{ paddingTop: "70px" }}
            >
              <div className="grid grid-cols-5 gap-1 pt-6 px-24 text-xs bg-white bg-opacity-90">
                <ul className="group">
                  <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600">
                    <a href="" className="">
                      NỮ{" "}
                    </a>
                  </li>
                  <img
                    className="cursor-pointer"
                    src="/assets/images/Nu_SS2021.png"
                    alt="noload"
                  ></img>
                </ul>
                <ul className="group">
                  <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600">
                    <a href="" className="">
                      NAM
                    </a>
                  </li>
                  <img
                    className="cursor-pointer"
                    src="/assets/images/Nam_SS2021.jpg"
                    alt="noload"
                  ></img>
                </ul>
                <ul className="group">
                  <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600">
                    <a href="" className="">
                      BÉ TRAI
                    </a>
                  </li>
                  <img
                    className="cursor-pointer"
                    src="/assets/images/beTrai_SS2021.png"
                    alt="noload"
                  ></img>
                </ul>
                <ul className="group">
                  <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600">
                    <a href="" className="">
                      BÉ GÁI
                    </a>
                  </li>
                  <img
                    className="cursor-pointer"
                    src="/assets/images/beGai_SS2021.png"
                    alt="noload"
                  ></img>
                </ul>
                <ul className="group">
                  <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600">
                    <a href="" className="">
                      BST ÁO PHÔNG GIA ĐÌNH
                    </a>
                  </li>
                  <img
                    className="cursor-pointer mb-10"
                    src="/assets/images/bst-ao-phong-mege-menu.jpg"
                    alt="noload"
                  ></img>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/PriceGoodProductList">
            <div className="text-red-600 cursor-pointer text-sm">GIÁ TỐT</div>
          </Link>
          <div
            onMouseEnter={() => setShowUL6(true)}
            onMouseLeave={() => setShowUL6(false)}
          >
            <a href="" className="text-red-600 text-sm">
              GIẢM GIÁ
            </a>
            <div
              class={`absolute  w-full left-0 ${
                showUL6 === true ? `` : `hidden`
              } `}
              style={{ paddingTop: "70px" }}
            >
              <div className="flex pt-8 px-24 text-xs bg-white bg-opacity-90">
                <ul class="mb-10 w-2/12">
                  <li className="pb-4 text-gray-700 font-bold">
                    <a href="">GIÁ MỚI</a>
                  </li>
                  <li>
                    <a href="" className="cursor-pointer hover:text-red-600">
                      Nữ{" "}
                    </a>
                  </li>
                  <li>
                    <a href="" className="cursor-pointer hover:text-red-600">
                      Nam{" "}
                    </a>
                  </li>
                  <li>
                    <a href="" className="cursor-pointer hover:text-red-600">
                      Bé Gái{" "}
                    </a>
                  </li>
                  <li>
                    <a href="" className="cursor-pointer hover:text-red-600">
                      Bé Trai{" "}
                    </a>
                  </li>
                </ul>
                <ul className="mb-10 w-2/12">
                  <li className="pb-4 text-red-600 font-bold">
                    <a href="" className="cursor-pointer">
                      SĂN ƯU ĐÃI 99K
                    </a>
                  </li>
                  <li className="pb-4 text-red-600 font-bold">
                    <a href="" className="cursor-pointer">
                      SĂN ƯU ĐÃI 149K
                    </a>
                  </li>
                  <li className="pb-4 text-red-600 font-bold">
                    <a href="" className="cursor-pointer">
                      SĂN ƯU ĐÃI 249K
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
        <ul className="xl:flex text-2xl space-x-5 text-gray-600 hidden">
          <li className="flex">
            <input
              placeholder="Tìm kiếm"
              name="fname"
              className="border text-xs w-80 h-6 pl-3 border-black outline-none"
            />
            <FiSearch className="cursor-pointer" />
          </li>
          <Link to="/StoreCanifa">
            <li>
              <BiMap className="cursor-pointer" />
            </li>
          </Link>
          <li>
            <BiUser
              className="cursor-pointer"
              onClick={() => setShowUser(!showUser)}
            />
            {showUser === true && (
              <list className="absolute w-52 text-sm bg-white space-y-2 mt-3 py-2 pl-2 pr-4 right-11 shadow-xl">
                <p className="font-bold ">Bạn đã có tài khoản?</p>
                <div className="flex cursor-pointer">
                  <Link to="/LoginCanifa">
                    <p className="cursor-pointer">Đăng nhập / </p>
                  </Link>
                  <Link to="">
                    <p className="cursor-pointer">Đăng kí</p>
                  </Link>
                </div>
                <Link to="/LoginCanifa">
                  <p className="cursor-pointer py-2">Bạn quên mật khẩu ?</p>
                </Link>
              </list>
            )}
          </li>
          <li>
            <img
              onClick={() => setShowCart(!showCart)}
              className="cursor-pointer pr-3"
              src="/assets/images/img-cart.svg"
              alt="noload"
            ></img>

            {showCart === true && (
              <list className="absolute w-4/12 text-xs text-center mt-3 py-10 bg-white right-0 shadow-xl">
                <p>Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
                <Link to="/HomeCanifa">
                  <button className="border-2 w-11/12 py-1 border-gray-700 font-bold mt-20 ">
                    TIẾP TỤC MUA
                  </button>
                </Link>
              </list>
            )}
          </li>
        </ul>
        {/* <p className="bg-gray-700 h-8 text-gray-300 justify-center flex items-center text-sm relative">
                Thêm vào giỏ hàng 499.000đ để miền phí vận chuyển
            </p> */}
      </div>
      <div
        id="marquee"
        className="bg-gray-700 h-7 text-gray-300 justify-center xl:flex items-center text-sm 2xl:mx-20 sm:mx-0  hidden"
      >
        <DemoMarquee />
      </div>
      {
        (window.onscroll = function () {
          scrollFunction();
        })
      }
    </section>
  );
};
export default HeaderCanifa;
