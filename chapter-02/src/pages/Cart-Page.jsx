import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import CartItem from "../components/CartItem";

export default function CartPage() {
    return (
        <Layout>
            <section className="container mx-auto min-h-screen py-12 px-3">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                        <CartItem />
                    </div>
                    <div className="col-span-4">
                        <div className="card-wrap border rounded-md transition-all delay-75 hover:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] p-6 h-full">
                            <h3 className=" text-xl font-bold border-b pb-4">
                                Total Item: <span className="">10</span>
                            </h3>
                            <p className="mt-4">
                                Total price <span>$19999</span>
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
