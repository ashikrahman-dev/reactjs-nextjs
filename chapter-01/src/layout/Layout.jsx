import { useEffect, useState } from "react";
import { postCategories } from "../ApiRequest/ApiRequest";
import { NavLink } from "react-router-dom";

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
            
            <div className="navbar bg-base-100 shadow top-0 fixed z-50">

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
                    <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
                        My Blog
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
        </>
    );
};

export default Layout;
