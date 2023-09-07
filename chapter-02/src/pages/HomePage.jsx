import Card from "../components/Card";
import Layout from "../layout/Layout";

export default function Homepage() {
    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen py-12 px-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
            </Layout>
        </>
    );
}
