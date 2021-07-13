import React from 'react';

const ListStore = () => {
  return (
    <section className="grid grid-cols-3">
        {[...Array(5)].map((item, key) => (

        <div className=" text-xs mb-3 relative col-span-1">
                <h3 className="text-red-600 font-bold py-5">HÀ NỘI</h3>
                <p>CANIFA 24 Hoàng Quốc Việt</p>
                <p>24 Hoàng Quốc Việt, Quận Cầu Giấy, Hà Nội</p>
                <p>ĐT: (+84) - 024 3212 1197</p>
                <p>Giờ mở cửa hôm nay: 09:00 - 21:00</p>
                <button 
                    className="absolute right-6 -bottom-2 border border-gray-700 px-2  font-bold ">
                    CLOSING
                </button>
        </div>
        ))}
    </section>

  );
}

export default ListStore;
