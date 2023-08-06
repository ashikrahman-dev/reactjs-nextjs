import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetails } from "../ApiRequest/ApiRequest";
import Layout from "../layout/layout";
import Loader from "../component/Loader";
import BlogDetails from "../component/BlogDetails";

function DetailsPage() {

    let {id} = useParams();

    const [list, setList] = useState(null);

    useEffect( () => {
        (async () => {
            let res = await postDetails(id);
            setList(res);
        })()
    }, [id])


    return (
        <Layout>
            {
                list === null ? <Loader /> : <BlogDetails list={list} />
            }
        </Layout>
    );
}

export default DetailsPage;