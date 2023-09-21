import { useEffect, useState } from "react";

function FetchApi() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchTitle = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            let data = await res.json();

            data = data.filter((item) => item.id <= 5);

            setPosts(data);
        };

        fetchTitle();
    }, []);

    return (
        <>
            <h1>Get post title using Fetch API</h1>
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

export default FetchApi;
