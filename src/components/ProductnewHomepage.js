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
      Authorization: "Bearer " + cookies.get("Token_Canifa"),
    },
  };
  
  const onLoadProduct = () => {
    axios
      .get("https://be.mockapi.codeby.com/api/restful/products", {
        headers: setHeader.headers,
      })
      .then(function (response) {
        setProducts(response.data.data);
        console.log("response.data", response);
      })
      .catch(function (error) {});
  };
  return (
    <section className="grid grid-cols-3 gap-2">
      <pre className="text-sm">
          {JSON.stringify(products, null, "  ")}
        </pre>  
      {products.map((product, key) => (
        <div key={key} className="text-center text-lg col-span-1">
          <img
              className="cursor-pointer" 
              src="/assets/images/img-product.jpg" alt="noload">
          </img>
          <div className="my-4 font-light">
              {product.name}
            <p className="flex justify-center">
              <p className="line-through mr-2">{product.old_price}</p>
              <p className="font-black text-red-600">{product.special_price}</p>
            </p>
          </div>
        </div>
        ))}
    </section>
  );
}

export default ProductnewHomepage;
