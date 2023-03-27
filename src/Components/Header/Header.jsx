import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <>
            <div className='h-20 bg-gray-700 grid md:grid-cols-2 px-24 py-4 mt-4 '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <nav className='text-slate-300 text-lg font-bold '>
                       <a className='ml-4 hover:text-orange-800' href="/Order">Order</a> 
                       <a className='ml-4 hover:text-orange-800' href="/Order Review">Order Review</a> 
                       <a className='ml-4 hover:text-orange-800' href="/Manage Inventory">Manage Inventory</a> 
                       <a className='ml-4 hover:text-orange-800' href="/Login">Login</a> 
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;