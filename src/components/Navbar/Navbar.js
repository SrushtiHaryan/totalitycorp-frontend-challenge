import { React, useState } from 'react';
import './Navbar.css';
import { useCart } from '../../context/Context';
import {Link} from 'react-router-dom';

import { FaBars, FaUser, FaSignOutAlt, FaClipboardList, FaShoppingCart, FaClose , FaShoppingBag } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { cartItemCount } = useCart();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <nav className="bg-slate-950 p-4 fixed w-full z-20 top-0">
            <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-4">
                    <button className="text-white" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <h1 className="text-white text-xl font-semibold">Urban Elegance</h1>
                </div>


                {!sidebarOpen && (
                <div className="flex items-center space-x-4">
                <Link to="/cart">
                <div className="text-white z-30 flex flex-row items-center justtify-center">Cart ({cartItemCount})</div>
                </Link>
                    <img
                        src="assets/profile_picture.jpg" // Replace with your profile image URL
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                    <button className="text-white">
                        <FaSignOutAlt />
                    </button>
                </div>)}
            </div>


            {/* Sidebar */}
            {sidebarOpen && (
                <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10  ${sidebarOpen ? 'translate-x-0 animate-slideIn' : '-translate-x-full animate-slideOut'}`}>
                    <div className="p-6">
                        <div className=" flex flex-col gap-6 items-center justify-around space-x-4">
                            <img
                                src="assets/profile_picture.jpg" // Replace with your profile image URL
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <span className="text-lg font-semibold">Name: John Doe</span>
                        </div>
                    </div>
                    <ul className="py-4">
                        <li className="px-16 py-6 hover:bg-gray-100 flex items-center justify-start">
                            <FaUser className="mr-4" />
                            <span>Your Profile</span>
                        </li>
                        <Link to="/cart">
                        <li className="px-16 py-6 hover:bg-gray-100 flex items-center justify-start">
                            <FaShoppingCart className="mr-4" />
                            <span>Your Cart  ({cartItemCount})</span>
                        </li>
                        </Link>
                        <li className="px-16 py-6 hover:bg-gray-100 flex items-center justify-start">
                            <FaClipboardList className="mr-4" />
                            <span>Your Orders</span>
                        </li>
                        <Link to="/">
                        <li className="px-16 py-6 hover:bg-gray-100 flex items-center justify-start">
                            <FaShoppingBag className="mr-4" />
                            <span>Products</span>
                        </li>
                        </Link>
                    </ul>
                    <button className="navCloseBtn">
                        <GrClose  onClick={toggleSidebar}/>
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar