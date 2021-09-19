import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const ProductnewHomepage = () => {
  const cookies = new Cookies();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onLoadProduct();
  }, []);

  const setHeader = {
    headers: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhc2V0X2lkIjoiMSIsInVzZXJfaWQiOjF9.yNv4diskwutLypG8_bcNaTXhL1X_4-79NcglQol0848"// + cookies.get("Token_Canifa"),
    },
  };
  
  const onLoadProduct = () => {
    axios
      .get("https://be-mockapi.codeby.com/api/restful/products/1", {
        headers: setHeader.headers,
      })
      .then(function (response) {
        setProducts(response.data.data);
        console.log("response.data", response.data);
      })
      .catch(function (error) {});
  };
  return (
    <section className=" 2xl:grid grid-cols-3 gap-2 max-w-sm">
        <div className="text-center text-lg col-span-1">
          <img
              className="cursor-pointer my-3" 
              src={products.images && products.images.media ? products.images.media[0].file : null}
              alt="noload">
          </img>
          <div className="font-light text-center">
              {products.name}
            <p className="flex justify-center">
              <p className="line-through mr-2">{products.old_price}</p>
              <p className="font-black text-red-600">{products.special_price}</p>
            </p>
          </div>
        </div>
    </section>
  );
}

export default ProductnewHomepage;
