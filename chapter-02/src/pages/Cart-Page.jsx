/* eslint-disable no-unused-vars */
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import fetchCartList from "../utils/fetchCartList";
import removeCart from "../utils/removeCart";
import priceStringToNumber from "../utils/priceStringToNumber";

export default function CartPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCartList()
            .then((data) => {
                if (data?.msg === "success") {
                    setItems(data?.data);
                }
            })
            .catch((err) => console.log("There was an Cart list error."));
    }, []);

    const handleRemoveCart = (productId) => {
        removeCart(productId)
            .then((data) => {
                if (data?.msg === "success") {
                    // remove that item from my local state: items.
                    const remainingItems = items.filter(
                        (item) => item.product.id !== productId
                    );

                    setItems(remainingItems);
                }
            })
            .catch((err) => console.log("There was an remove cart error."));
    };

    const calculateTotalPrice = () => {
        const totalPrice = items.reduce((total, currentValue) => {
            const price = priceStringToNumber(currentValue);

            return total + price;
        }, 0);

        return totalPrice.toLocaleString();
    };

    return (
        <Layout>
            <section className="container mx-auto min-h-screen py-12 px-3">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                        {items.map((item) => (
                            <CartItem
                                key={item?.id}
                                product={item.product}
                                remove={handleRemoveCart}
                            />
                        ))}
                    </div>
                    <div className="col-span-4">
                        <div className="card-wrap border rounded-md transition-all delay-75 hover:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] p-6 min-h-[252px]">
                            <h3 className=" text-xl font-bold border-b pb-4">
                                Total Item: <span className="">10</span>
                            </h3>
                            <p className="mt-4">
                                Total price
                                <span>${calculateTotalPrice()}</span>
                            </p>
                            <div className="flex mt-8">
                                <button className="uppercase mt-4 text-sm font-semibold border rounded-[4px] bg-orange-100 text-orange-700 border-orange-700 py-[6px] px-3 hover:bg-orange-700 hover:text-white">
                                    Check out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
