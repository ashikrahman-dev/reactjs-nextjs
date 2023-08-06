import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import BlogLIst from "../component/BlogLIst";
import { postNewest } from "../ApiRequest/ApiRequest";
import Layout from "../layout/layout";

const HomePage = () => {

    const [list, setList] = useState(null);

    useEffect( () => {
        (async () => {
            let res = await postNewest();
            setList(res); 
        })()
    }, [])

    return (
        <>
            <Layout>
                {
                    list===null ? <Loader /> : <BlogLIst list={list} />
                }
            </Layout>
        </>
    );
};

export default HomePage;