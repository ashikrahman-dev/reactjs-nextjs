import { Link } from "react-router-dom";

const BlogList = (props) => {
    return (
        <>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        props.list.map((item, index) => {
                            return (
                                <>
                                    <Link key={index.toString()} to={"/details/"+item['id']} className="card w-full shadow-xl bg-white">
                                        <figure>
                                            <img src={item['img']} alt="image" className=" w-full" />
                                        </figure>
                                        <div className="card-body py-5 px-3">
                                            <h2 className="card-title text-xl text-cyan-700">{item['title']}</h2>
                                            <p className="text-sm text-cyan-900">{item['short']}</p>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default BlogList;