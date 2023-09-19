/* eslint-disable no-unused-vars */
import createCart from "../utils/careateCart";

export default function Product({ product = {} }) {
    const handleAddToCart = () => {
        createCart(product.id)
            .then((data) => {
                if (data?.msg === "success") {
                    alert("The product was added to cart.");
                }
            })
            .catch((err) => console.log("There was an error."));
    };

    return (
        <div className="card-wrap border rounded-md transition-all delay-75 hover:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] ">
            <div className="card-img">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full rounded-t-md w-full"
                />
            </div>
            <div className="card-content px-4 pt-3 pb-5">
                <h3 className="text-2xl font-semibold text-gray-800 leading-8 mb-3 line-clamp-2 hover:text-orange-700 transition-colors delay-75">
                    {product.title}
                </h3>

                <p className="text-base text-slate-600 line-clamp-4">
                    {product.short_des}
                </p>

                <div className="text-base font-bold mt-3">
                    Price: $<span>{product.price}</span>
                </div>

                <div className=" flex justify-end">
                    <button
                        onClick={handleAddToCart}
                        className=" uppercase mt-4 text-sm font-semibold border rounded-[4px] bg-orange-100 text-orange-700 border-orange-700 py-[6px] px-3 hover:bg-orange-700 hover:text-white"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
