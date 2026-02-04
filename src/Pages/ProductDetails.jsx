
import { useParams } from "react-router-dom";
import { products } from "./../Data/Data";
const ProductDetails = () => {
  const {id}= useParams();
    const product = products.find((item)=> item.id === Number(id));
  return(
    <div>
      {product ? (
        <div className="p-4">
          <img src={product.img} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-700">{product.desc}</p>
          <p className="text-lg font-semibold">${product.price}</p>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductDetails;
