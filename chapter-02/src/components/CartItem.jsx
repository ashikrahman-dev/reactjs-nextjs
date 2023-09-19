/* eslint-disable react/prop-types */
export default function CartItem({ product, remove }) {
    const { title, image, price, id } = product || {};

    return (
        <>
            <div className="card-wrap border rounded-md transition-all delay-75 hover:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] p-2 mb-7">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                        <div className="card-img">
                            <img
                                src={image}
                                alt={title}
                                className="max-w-full rounded-t-md w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-9">
                        <div className="card-content px-4 pt-3 pb-5">
                            <h3 className="text-2xl font-semibold text-gray-800 leading-8 mb-3 line-clamp-2 ">
                                {title}
                            </h3>

                            <div className="text-base font-bold mt-3">
                                Price: $<span>{price}</span>
                            </div>

                            <div className=" flex justify-end">
                                <button
                                    onClick={() => remove(id)}
                                    className="uppercase mt-4 text-sm font-semibold border rounded-[4px] bg-orange-100 text-orange-700 border-orange-700 py-[6px] px-3 hover:bg-orange-700 hover:text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
