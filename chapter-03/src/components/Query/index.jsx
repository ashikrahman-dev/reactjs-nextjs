import { useQuery } from "react-query";
import getPost from "./getPostAPI";

export default function Query() {
    const { data } = useQuery("post", () => getPost());
    return (
        <>
            <h1>Get post title using Fetch API</h1>
            {data?.map((postData) => {
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
