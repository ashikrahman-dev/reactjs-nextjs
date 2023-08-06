import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import { postNewest } from "../ApiRequest/ApiRequest";
import Layout from "../layout/layout";
import BlogList from "../component/BlogLIst";

const HomePage = () => {

    const [list, setList] = useState(null);

    useEffect( () => {
        (async () => {
            let res = await postNewest();
            setList(res); 
        })()
    }, [])

    return (
        <div className="bg-white">
            <Layout>
                {
                    list===null ? <Loader /> : <BlogList list={list} />
                }
            </Layout>
        </div>
    );
};

export default HomePage;