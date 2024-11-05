import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../utility/Utility";

const NavBar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])
    useEffect(() => {
        const storedCart = getStoredCartList()
        setCart(storedCart)
    }, [cart])

    useEffect(() => {
        const wishStored = getStoredWishList()
        setWish(wishStored)
    }, [wish])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-bold">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="mr-5 border border-purple-400 rounded-full p-2 relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-purple-500 rounded-full text-xs px-1">
                            {cart.length}
                        </span>
                    </a>
                    <a className="border border-purple-400 rounded-full p-2 relative">
                        <i className="fa-solid fa-heart"></i>
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-purple-500 rounded-full text-xs px-1">
                            {wish.length}
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NavBar;