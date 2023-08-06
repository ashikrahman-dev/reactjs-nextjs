import { useEffect, useState } from "react";
import { postCategories } from "../ApiRequest/ApiRequest";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";

const Layout = (props) => {

    const [categories, SetCategories] = useState([]);

    useEffect( ()=> {
        (async () => {
            let res = await postCategories();
            SetCategories(res);
        })()
    }, []);

    return (
        <>
            
            <div className="navbar shadow top-0 fixed z-50 bg-white">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.9 6.24074H2.1C1.49281 6.24074 0.999998 5.73884 0.999998 5.12037C0.999998 4.5019 1.49281 4 2.1 4H21.9C22.5072 4.00004 23 4.50193 23 5.1204C23 5.73884 22.5072 6.24074 21.9 6.24074ZM11.3105 18.6641H21.9C22.5072 18.6641 23 19.166 23 19.7844C23 20.4029 22.5072 20.9048 21.9 20.9048H11.3105C10.7033 20.9048 10.2105 20.4029 10.2105 19.7844C10.2105 19.166 10.7033 18.6641 11.3105 18.6641ZM21.9 11.3359H2.1C1.49281 11.3359 0.999998 11.8379 0.999998 12.4563C0.999998 13.0748 1.49281 13.5767 2.1 13.5767H21.9C22.5072 13.5767 23 13.0748 23 12.4563C23 11.8379 22.5072 11.3359 21.9 11.3359Z" fill="#36B7FF"/>
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100">
                            <li><NavLink to={'/'}>হোম</NavLink></li>
                            {
                                categories.map((item, i) => {
                                    return (
                                        <>
                                            <li>
                                                <NavLink key={i.toString()} to={'/bycategory/'+item['id']}>{item['name']}</NavLink>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <NavLink to={"/"} className="btn btn-ghost normal-case text-xl flex align-middle content-center gap- text-cyan-600">
                        <span><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg></span>
                        <span>My Blog</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>হোম</NavLink></li>
                        {
                            categories.map((item, i) => {
                                return (
                                    <>
                                        <li><NavLink key={i.toString()} to={'/bycategory/'+item['id']}>{item['name']}</NavLink></li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            {props.children}

            <Footer />
        </>
    );
};

export default Layout;
