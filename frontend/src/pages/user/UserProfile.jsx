import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set form values when product is loaded
  useEffect(() => {
    if (product) {
      reset({
        username: users?.username,
        email: users?.email,
        password: users?.password,
        price: users?.price,
        description: users?.description,
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

  const UpdateuserHandler = (productData) => {
    dispatch(asyncUpdateProduct(id, productData));
    navigate("/products");
  };

  const DeleteHandler = () => {
    navigate("/products");
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl shadow-2xl rounded-2xl p-10 border border-gray-200">
          <form
            onSubmit={handleSubmit(UpdateuserHandler)}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                {...register("username")}
                placeholder="username"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="url"
                {...register("email")}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="text"
                {...register("password")}
                placeholder="e.g. Electronics, Fashion"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
