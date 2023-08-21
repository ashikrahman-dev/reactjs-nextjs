import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card-wrap border rounded-md hover:border-orange-300 transition-all delay-75 hover:shadow-md ">
        <div className="card-img">
            <img
                src="https://placehold.co/600x400"
                alt="image"
                className="max-w-full rounded-t-md"
            />
        </div>
        <div className="card-content px-4 pt-3 pb-5">
            <Link>
                <h3 className='text-2xl font-bold text-orange-700 leading-8 mb-3 line-clamp-2 hover:text-orange-800 transition-colors delay-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum atque aperiam.</h3>
            </Link>
            <p className='text-base text-slate-600 line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit exercitationem tempore reiciendis, animi deserunt asperiores hic autem molestiae. Quos adipisci similique non placeat maxime tempore nostrum iste, assumenda illo soluta alias vero neque dolore?</p>
        </div>
    </div>
  )
}
