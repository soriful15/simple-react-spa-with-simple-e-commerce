import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {

        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

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
                        <Link className='ml-4 hover:text-orange-800 ' to="/signUp">SignUp</Link>
{/* {
    user ? <><span>{user.email}</span></> :  <button onClick={handleLogOut} className="btn btn-xs">sing Out</button>
} */}
     <div className='ml-4'>
        
     {
          user && <span>{user.email} <button onClick={handleLogOut} className="btn btn-xs">sing Out</button></span> 
      } 
        </div>                

                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;