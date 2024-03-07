import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Products</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const image = `data:image/png;base64,${product.image}`;
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={image}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
