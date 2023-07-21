import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Allproduct = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (error) {
      console.log(error);    
    }
  };

  const getProductByCateg = async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(response.data);
    } catch (error) {     
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => getProduct()}
        className="px-8 py-3 font-semibold rounded dark:bg-yellow-500 dark:text-white ml-10"
      >
        All
      </button>
      {category.map((item) => {
        return (
          <button
            type="button"
            onClick={() => getProductByCateg(item)}
            className="px-8 py-3 font-semibold rounded dark:bg-yellow-500 dark:text-white ml-10"
          >
            {item}
          </button>
        );
      })}

      <div className="mt-20 flex flex-wrap gap-7  ml-20 ">
        {product.map((item) => {
          return (
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src={item.image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">
                    {item.title}
                  </h2>
                  <p className="dark:text-gray-100">{item.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/singleproduct/${item.id}`, { state: item.id })
                  }
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allproduct;
