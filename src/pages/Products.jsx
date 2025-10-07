import { useSelector } from "react-redux";
import { Link, Links } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);

  const renderproducts = products.map((product) => {
    return (
      
      <div
        key={product.id}
        className="w-48 h-64 bg-white rounded-lg shadow-md hover:shadow-xl transition m-3 p-3 flex flex-col justify-between"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-24 w-full object-contain mb-2"
        />
        <h1 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h1>
        <p className="text-xs text-gray-600 line-clamp-2">
          {product.description?.slice(0, 60) || "No description"}...
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-bold text-blue-600">${product.price}</p>
          <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Add
          </button>
        </div>
        <Link to={`/product/${product.id}`} className="text-xs text-purple-600 hover:underline mt-2">More Info</Link>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="w-full min-h-screen bg-gray-100 flex flex-wrap  p-4 pt-20">
      {renderproducts}
    </div>
  ) : (
    <p className="text-center text-gray-600 text-lg mt-20">Loading...</p>
  );
};

export default Products;
