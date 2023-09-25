const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();

    data = data.filter((item) => item.id <= 5);
    return data;
};

export default getPost;
