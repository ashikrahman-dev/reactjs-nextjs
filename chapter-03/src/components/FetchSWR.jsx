import useSWR from "swr";

const fetcher = async (...args) => {
    const res = await fetch(...args);

    const data = await res.json();

    return data;
};

function FetchSWR() {
    const { data, error } = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
    );

    return (
        <>
            <h1>Get post title using SWR</h1>
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

export default FetchSWR;
