import React, { useEffect, useState } from "react";
import ProductnewHomepage from "./ProductnewHomepage";
import Cookies from "universal-cookie";
import axios from "axios";

const ListnewProductHomepage = () => {
  const cookies = new Cookies();
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   onLoadPost();
  // }, []);

  // const setHeader = {
  //   headers: {
  //     Authorization: "Bearer " + cookies.get("Token_Canifa"),
  //   },
  // };

  // const onLoadPost = () => {
  //   axios
  //     .get("https://be.mockapi.codeby.com/api/restful/2/products", {
  //       headers: setHeader.headers,
  //     })
  //     .then(function (response) {
  //       setPosts(response.data.data);
  //     })
  //     .catch(function (error) {});
  // };
  return (
    <section>
      <section className="grid grid-cols-2 ">
        <img
          className="xl:col-span-1 col-span-2 cursor-pointer"
          src="/assets/images/vay-be-gai-subcate.jpg"
          alt="noload"
        ></img>
        <img
          className="xl:col-span-1 col-span-2 cursor-pointer"
          src="/assets/images/vay-nu-subcate.jpg  "
          alt="noload"
        ></img>
      </section>
      <list className="bg-gray-700 xl:flex inline-block py-4 px-2 text-white w-full ">
        <div className="text-lg xl:text-2xl font-bold 2xl:mx-5 sm:mx-2 pr-0 xl:pr-40 text-center xl:text-right mb-3 xl:mb:0 ">
          SẢN PHẨM MỚI
        </div>
        <ul className="flex items-center justify-between xl:space-x-20 text-sm xl:text-base ">
          <li className="cursor-pointer">NỮ</li>
          <li className="cursor-pointer">NAM</li>
          <li className="cursor-pointer">BÉ GÁI</li>
          <li className="cursor-pointer">BÉ TRAI</li>
        </ul>
      </list>
      <ProductnewHomepage />
      <img
        className=" cursor-pointer w-full"
        src="/assets/images/san-pham-gia-tot-2021-bst.jpg"
        alt="noload"
      ></img>
      <section className="grid  grid-cols-3  my-14 space-y-4 xl:space-y-0">
        <div className="xl:flex mx-2 xl:mx-8 col-span-3 xl:col-span-1 ">
          <img
            className=" h-12 cursor-pointer mr-5 items-center"
            src="/assets/images/service1-listProductHomepage.svg"
            alt="noload"
          ></img>
          <div>
            <p className="text-2xl font-bold mb-0 xl:mb-3">QUY ĐỊNH ĐỔI TRẢ</p>
            <p>
              CANIFA sẵn sàng hỗ trợ đổi sản phẩm cho bạn trong vòng 30 ngày
              trên toàn hệ thống.
            </p>
          </div>
        </div>
        <div className=" xl:flex mx-2 xl:mx-8 col-span-3 xl:col-span-1">
          <img
            className=" h-16 cursor-pointer mr-5"
            src="/assets/images/service2-listProductHomepage.svg"
            alt="noload"
          ></img>
          <div>
            <p className="text-2xl font-bold mb-0 xl:mb-3">
              TUYỂN DỤNG TẠI CANIFA
            </p>
            <p>
              CANIFA đang cần tuyển hơn 40 vị trí nhân viên bán hàng tại Hà Nội,
              Hải Phòng, Vĩnh Yên, Nghệ An, Thái Nguyên; TX. Sơn Tây, Hưng Yên
              (Sắp khai trương)
            </p>
          </div>
        </div>
        <div className="xl:flex mx-2 xl:mx-8 col-span-3 xl:col-span-1  ">
          <img
            className=" h-14 cursor-pointer mr-5"
            src="/assets/images/service3-listProductHomepage.svg"
            alt="noload"
          ></img>
          <div>
            <p className="text-2xl font-bold mb-0 xl:mb-3">
              KHÁCH HÀNG THÂN THIẾT
            </p>
            <p>
              CANIFA sẵn sàng hỗ trợ đổi sản phẩm cho bạn trong vòng 30 ngày
              trên toàn hệ thống.
            </p>
          </div>
        </div>
      </section>
      <img
        className=" cursor-pointer w-full"
        src="/assets/images/bst-ao-phong-gia-dinh-21-home.jpg"
        alt="noload"
      ></img>
      <p className="w-full border-b mt-1"></p>
    </section>
  );
};
export default ListnewProductHomepage;
