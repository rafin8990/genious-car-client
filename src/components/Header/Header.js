import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link >
                                <img className='h-20' src={logo} alt="" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-[#FF3811] rounded-md bg-[#FF3811] outline-none focus:border-[#FF3811] focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-black hover:text-[#FF3811]">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="text-black hover:text-[#FF3811]">
                                    <Link >About</Link>
                                </li>
                                <li className="text-black hover:text-[#FF3811]">
                                    <Link >Service</Link>
                                </li>
                                <li className="text-black hover:text-[#FF3811]">
                                    <Link >Blog</Link>
                                </li>
                                <li className="text-black hover:text-[#FF3811]">
                                    <Link >Contact</Link>
                                </li>
                                <li className="text-black hover:text-[#FF3811]">
                                    <Link to='/register' >Register</Link>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:hidden">
                                <div className='flex items-center'>
                                    <FaShoppingBag className='mr-5 w-10'></FaShoppingBag>
                                    <FaSearch className='mr-5 w-10'></FaSearch>
                                    <Link
                                        className="inline-block w-full rounded-md"
                                    >
                                        <button className='text-[#FF3811] px-6 py-2 btn btn-outline hover:bg-[#FF3811] '>  Appointment</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <div className='flex items-center'>
                            <FaShoppingBag className='mr-5 w-10'></FaShoppingBag>
                            <FaSearch className='mr-5 w-10'></FaSearch>
                            <Link
                                className="inline-block w-full rounded-md"
                            >
                                <button className='text-[#FF3811] px-6 py-2 btn btn-outline hover:bg-[#FF3811] '>  Appointment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;