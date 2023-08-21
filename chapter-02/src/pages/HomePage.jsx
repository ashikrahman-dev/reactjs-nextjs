import Card from "../components/Card";
import Layout from "../layout/Layout";

export default function Homepage() {
    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen py-12">
                    <div className="grid grid-cols-4 gap-4">
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
