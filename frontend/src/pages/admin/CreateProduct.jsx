
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateProductHandler = (product) => {
    console.log(product);
    navigate("/products")
    dispatch(asyncUser(product));
  };
  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pt-20">
  <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
      🛒 Create Product
    </h2>

    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="space-y-6"
    >
      {/* Username */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Username
        </label>
        <input
          type="text"
          {...register("title")}
          placeholder="Enter product title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Image
        </label>
        <input
          type="url"
          {...register("image")}
          placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Category
        </label>
        <input
          type="text"
          {...register("Category")}
          placeholder="e.g. Electronics, Fashion"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Price
        </label>
        <input
          type="number"
          {...register("price")}
          placeholder="0.00"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Description
        </label>
        <textarea
          {...register("discription")}
          placeholder="Enter product description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition resize-none"
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition duration-300"
      >
        🚀 Create Product
      </button>
    </form>
  </div>
</div>

  );
};

export default CreateProduct;
