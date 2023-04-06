import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='h-full bg-gray-700 flex justify-between px-24  py-4 mt-4 '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav className='text-slate-300 text-lg font-bold '>
                        <Link className='ml-4 hover:text-orange-800' to="/">Shop</Link>
                        <Link className='ml-4 hover:text-orange-800' to="/orders">Orders</Link>
                        <Link className='ml-4 hover:text-orange-800' to="/inventory">Inventory</Link>
                        <Link className='ml-4 hover:text-orange-800' to="/login">Login</Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;