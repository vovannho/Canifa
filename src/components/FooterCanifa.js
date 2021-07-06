import React from "react";
import { FaFacebookSquare,FaInstagramSquare,FaYoutube} from "react-icons/fa";

const FooterCanifa = () => {
  return (
    <div className="flex justify-between text-sm mt-8">
      <div className="text-gray-600 w-2/12">
          <p className="text-base text-black font-semibold ">
            CÔNG TY CỔ PHẦN CANIFA
          </p>
          <br/>
          <p>
            Số ĐKKD: 0107574310, ngày cấp: 23/09/2016. Nơi cấp: Sở Kế hoạch và đầu tư Hà Nội
          </p>
          <br/>
          <p>
            Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội
          </p>
          <br/>
          <p>
            Điện thoại: +8424 - 7303.0222
          <br/>
              Fax: +8424 - 6277.6419 
          <br/>
              Email: hello@canifa.com
          </p>
          <img
              className="cursor-pointer my-8" 
                src="/assets/images/img-dang-ky.svg" alt="noload">
          </img>
          <p>© 2020 CANIFA</p>
      </div>
      <div className="text-gray-600 w-2/12 pl-20">
        <p className="text-base  text-black font-semibold">
          THƯƠNG HIỆU
        </p>
        <br/>
        <p>
          Về Canifa
        </p>
        <p>
          Phát triển bền vững
        </p>
        <p>
          Blog
        </p>
        <p>
          Đặt đồng phục
        </p>
        <p>
          Hệ thống cửa hàng
        </p>
        <p>
          Chính sách KH thân thiết
        </p>
        <p>
          Chính sách bảo mật thông tin
        </p>
        <p>
          Giới thiệu C point
        </p>
      </div>
      <div className="text-gray-600 w-3/12">
        <p className="text-base text-black font-semibold ">
          HỖ TRỢ
        </p>
        <br/>
        <p>
          FAQs - Hỏi đáp
        </p>
        <p>
          Chính sách vận chuyển
        </p>
        <p>
          Quy định đổi hàng
        </p>
        <p>
          Hướng dẫn thanh toán
        </p>
        <p>
          Hướng dẫn chọn kích cỡ
        </p>
        <p>
          Hướng dẫn mua hàng Online
        </p>
        <p>
          Liên hệ
        </p>
      </div>
      <div className="w-4/12">
        <p className="text-base font-semibold">
          ĐĂNG KÝ NHẬN TIN
        </p>
        <br/>
        <p className="flex">
        <input 
            name="fname"
            className="border text-sm w-full h-6 pl-3 border-black outline-none"
        />
        <button className="border-2 px-6 h-6 border-black ml-2 font-bold hover:text-red-500 hover:border-red-500">Gửi</button>  
        </p>
        <div className="flex text-base font-bold justify items-center space-x-2 my-10">
          <p>KẾT NỐI</p>
          <p>
            <FaFacebookSquare
            className="w-10 h-10 ml-3 cursor-pointer hover:text-blue-500"
            />
          </p>  
          <p>
            <FaInstagramSquare
            className="w-10 h-10 cursor-pointer hover:text-pink-500"
            />
          </p>
          <p>
            <FaYoutube
            className="w-10 h-10 cursor-pointer hover:text-red-500"
            />
          </p>
        </div>
        <div className="flex space-x-3">
          <img
              className="" 
                src="/assets/images/QR-canifa_1.jpg" alt="noload">
          </img>
          <div>
            <img
                className="cursor-pointer mb-5" 
                  src="/assets/images/img-app1.png" alt="noload">
            </img>
            <img
                className="cursor-pointer" 
                  src="/assets/images/img-app2.png" alt="noload">
            </img>
          </div>
          <img
              className="cursor-pointer h-16" 
              src="/assets/images/img-payment-method.png" alt="noload">
          </img>
        </div>

      </div>
    </div>
  );
}

export default FooterCanifa;
