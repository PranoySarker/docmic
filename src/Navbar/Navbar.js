import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-sky-50 fixed top-0 z-50 lg:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:text-primary'><a>Home</a></li>
                            <li className='hover:text-primary'><a>About</a></li>
                            <li className='hover:text-primary'><a>Department</a></li>
                            <li className='hover:text-primary'><a>Pages</a></li>
                            <li className='hover:text-primary'><a>Blogs</a></li>
                            <li className='hover:text-primary'><a>Contacts</a></li>
                        </ul>
                    </div>
                    <a className="normal-case text-3xl font-bold cursor-pointer">
                        <span className='text-primary'>Doc</span>
                        <span className='text-secondary'>mic</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-paragraph1 text-lg">
                        <li className='hover:text-primary'><a>Home</a></li>
                        <li className='hover:text-primary'><a>About</a></li>
                        <li className='hover:text-primary'><a>Department</a></li>
                        <li className='hover:text-primary'><a>Pages</a></li>
                        <li className='hover:text-primary'><a>Blogs</a></li>
                        <li className='hover:text-primary'><a>Contacts</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-primary w-32 lg:w-52">Free Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 