import { useEffect, useState } from "react";
import { postList } from "../ApiRequest/ApiRequest";
import Layout from "../layout/layout";
import Loader from "../component/Loader";
import BlogList from "../component/BlogLIst";
import { useParams } from "react-router-dom";


const ByCategoryPage = () => {
    let {id} = useParams();
    const [list, setList] = useState(null);

    useEffect( () => {
        (async () => {
            let res = await postList(id);
            setList(res);
        })()
    }, [id] )

    return (
        <Layout>
            {
                list === null ? <Loader /> : <BlogList list={list} />
            }
        </Layout>
    );
};

export default ByCategoryPage;