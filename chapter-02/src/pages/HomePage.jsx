import { useEffect, useState } from "react";
import Product from "../components/Product";
import Layout from "../layout/Layout";
import fetchProducts from "../utils/fetchProducts";

export default function Homepage() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .catch((err) => setError("There was an error."));
    }, []);

    let output;
    if (error) {
        output = <div>There was an error.</div>;
    } else if (products?.length > 0) {
        output = products.map((product) => (
            <Product key={product.id} product={product} />
        ));
    } else {
        <div>No product found!</div>;
    }

    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen py-20 px-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {output}
                    </div>
                </section>
            </Layout>
        </>
    );
}
