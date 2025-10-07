import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();

  // ✅ Removed "userReducer" to avoid undefined error
  const products = useSelector((state) => state.productReducer.products);

  const product = products?.find(
    (product) => String(product.id) === String(id)
  );

  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set form values when product is loaded
  useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        title: product.title,
        Category: product.Category,
        price: product.price,
        description: product.description,
      });
    }
  }, [product, reset]);

  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center pt-20">
        <p className="text-gray-600 text-lg">Product not found or loading...</p>
      </div>
    );
  }

  const UpdateProductHandler = (productData) => {
    dispatch(asyncUpdateProduct(id, productData));
    navigate("/products");
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row p-6 pt-22">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            className="w-64 h-64 object-contain rounded-lg shadow-md bg-white"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 p-6 max-w-xl">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            {product.title}
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {product.description}
          </p>
          <p className="text-xl font-semibold mb-6 text-indigo-600">
            ${product.price}
          </p>

          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
            🛒 Add to Cart
          </button>
        </div>

        {/* Update Form */}
        <div className="flex items-center justify-center min-h-screen py-6 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl shadow-2xl rounded-2xl p-10 border border-gray-200">
            {/* Header */}
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
              ✏️ Update Product
            </h2>

            {/* Form */}
            <form
              onSubmit={handleSubmit(UpdateProductHandler)}
              className="space-y-6"
            >
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Title
                </label>
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Enter product title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  {...register("image")}
                  placeholder="https://example.com/product.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                />
              </div>

              {/* Category & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    {...register("Category")}
                    placeholder="e.g. Electronics, Fashion"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    {...register("price")}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Enter detailed product description..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transform hover:scale-[1.02] transition duration-300">
                  🚀 Update Product
                </button>
                <button
                  onClick={DeleteHandler}
                  type="button"
                  className="w-full py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transform hover:scale-[1.02] transition duration-300"
                >
                  Delete Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
