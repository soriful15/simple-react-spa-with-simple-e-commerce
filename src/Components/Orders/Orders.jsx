import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const saveCart=useLoaderData()
    const [cart,setCart]=useState(saveCart)
    // console.log(saveCar);

const handleRemoveFromCart=(id)=>{
    const remaining=cart.filter(product=> product.id !== id)
    setCart(remaining);
    removeFromDb(id)
}

const handleClearCart=()=>{
    setCart([])
    deleteShoppingCart()
}
    return (
        <div className='grid md:grid-cols-2'>
            <div className='review-container mt-14 mx-auto'>
               {
                cart.map(product=> <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem> )
               }
                
            </div>
            <div className='cart-container bg-orange-200 p-6 mt-14 w-[576px]  h-[576px] sticky top-0'>
                <Cart
                
                cart={cart}
                handleClearCart={handleClearCart}
                
                >

                    <Link to='/checkout'>
                   

                    <button className='text-xl mt-4 bg-amber-500 px-6 py-6 w-full flex justify-between rounded-2xl mx-auto text-white'><span> Proceed Checkout</span> 
 <FontAwesomeIcon  className='h-6 ' icon={faCheckToSlot} />
 </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;