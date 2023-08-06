

function BlogDetails(props) {
    return (
        <div className="container mx-auto my-16 p-9">
            <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                <div className="card w-full">
                    <figure>
                        <img src={props.list['postDetails']['img']} alt="featured image" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl text-white font-bold mb-5">{props.list['postDetails']['title']}</h2>
                        <p className="text-base text-gray-300">{props.list['postDetails']['content']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;