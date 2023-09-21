import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosApi() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchTitle = async () => {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );

            res.data = res.data.filter((item) => item.id <= 6);

            setPosts(res.data);
        };
        fetchTitle();
    });

    return (
        <>
            <h1>Get post title using Axios</h1>
            {posts?.map((postData) => {
                return (
                    <h3 key={postData.id}>
                        {postData["id"]} {postData["title"]}
                    </h3>
                );
            })}

            <div className="divider"></div>
        </>
    );
}
