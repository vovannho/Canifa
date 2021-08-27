import React, { useState } from "react";
import FooterCanifa from "../../components/FooterCanifa";
import HeaderCanifa from "../../components/HeaderCanifa";
import DemoMarquee from "../DemoMarquee";
const Product = () => {

    const [count, setCount] = useState(0)
    const [size, setSize] = useState("S");
    
  return (
    <section className="max-w-screen-2xl mx-auto">
        <div className="h-16 bg-yellow-300 flex items-center">
                <div className="max-w-screen-2xl mx-20 flex items-center">
                <picture>
			    	<source media="(max-width: 991px)" srcSet="https://media.canifa.com/wysiwyg/09-17Jul-Fixtop-Mobile.png"/>
			       <img src="https://media.canifa.com/wysiwyg/Mask_Group.png" alt="" />
			    </picture>
                </div>
        </div>
        <HeaderCanifa/>
        <p className="px-20 pt-5 text-xs cursor-pointer">Trang chủ /Nữ /Áo phông người lớn unisex hình in Mickey</p> 
        <section className="px-20 flex space-x-14 text-xs">
            <section className="w-2/12 ">
                <img
                    className="cursor-pointer mx-auto"
                    src="/assets/images/preview1.svg" alt="noload">
                </img>
                <img
                    className="cursor-pointer mx-auto transform rotate-180"
                    src="/assets/images/preview2.svg" alt="noload">
                </img>
            </section>
            <section className="w-5/12">
                <img
                    className="cursor-pointer"
                    src="/assets/images/product.jpg" alt="noload">
                </img>
            </section>
            <section className=" w-5/12 text-gray-700 space-y-5">
                <p className=" font-bold text-sm">ÁO PHÔNG NGƯỜI LỚN UNISEX HÌNH IN MICKEY</p>
                <p>Mã: 5TS21S003</p>
                <p className="line-through font-black text-sm">299.000₫</p>
                <p className="font-black text-red-600 text-sm">149.000₫</p>
                <p>CHỌN MÀU:</p>
                <div className="flex space-x-2">
                    <p className="bg-black w-6 h-6 border cursor-pointer"></p>
                    <p className=" w-6 h-6 border cursor-pointer"></p>
                </div>
                <div>
                    CHỌN KÍCH CỠ : {size}
                    <ul className="flex space-x-2 font-bold mt-2">
                    <li 
                        className={`border-2 border-gray-700 px-2 py-1 hover:text-red-600 hover:border-red-600 cursor-pointer  ${size === `S` ? `text-red-600 border-red-600` : ``}`}
                        onClick={() => setSize("S")}
                    >S</li>
                     <li 
                        className={`border-2 border-gray-700 px-2 py-1 hover:text-red-600 hover:border-red-600 cursor-pointer  ${size === `M` ? `text-red-600 border-red-600` : ``}`}
                        onClick={() => setSize("M")}
                    >M</li>
                     <li 
                        className={`border-2 border-gray-700 px-2 py-1 hover:text-red-600 hover:border-red-600 cursor-pointer  ${size === `L` ? `text-red-600 border-red-600` : ``}`}
                        onClick={() => setSize("L")}
                    >L</li>
                     <li 
                        className={`border-2 border-gray-700 px-2 py-1 hover:text-red-600 hover:border-red-600 cursor-pointer  ${size === `XL` ? `text-red-600 border-red-600` : ``}`}
                        onClick={() => setSize("XL")}
                    >XL</li>
   
                    </ul>
                </div>
                <p className="cursor-pointer">Tư vấn chọn kích cỡ </p>
                <p>CHỌN SỐ LƯỢNG:</p>
                <div className="flex h-6">
                    <div className="flex mr-2">
                        <p
                         className="border border-black flex items-center text-sm px-6">
                            {count}
                         </p>
                        <div className="border-t border-b border-r border-black">
                            <img
                                onClick={()=> setCount(count+1)}
                                className="cursor-pointer mx-auto  h-3 border-b border-black"
                                src="/assets/images/btn-click1.svg" alt="noload">
                            </img>
                            <img
                             onClick={()=> setCount(count-1)}
                                className="cursor-pointer mx-auto h-3 transform rotate-180  "
                                src="/assets/images/btn-click1.svg" alt="noload">
                            </img>
                        </div>
                    </div>
                    <div className="bg-gray-200 h-6 text-gray-600 justify-center flex items-center text-xs w-full">
                        <DemoMarquee/>
                    </div>
                </div>
                <div>
                    <button className="text-red-600 border-2 border-red-600 font-bold py-1 px-10 mr-5">THÊM VÀO GIỎ</button>
                    <button className="text-gray-600 border-2 border-gray-700 font-bold py-1 px-10">TÌM TẠI CỬA HÀNG</button>
                </div>
                <p>MÔ TẢ</p>
                <p>CHẤT LIỆU</p>
                <p>HƯỚNG DẪN SỬ DỤNG</p>
            </section>
        </section>
      <FooterCanifa/>
    </section>
  );
}
export default Product;
