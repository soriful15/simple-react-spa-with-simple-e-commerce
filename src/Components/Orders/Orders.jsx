import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';



const Orders = () => {
    const saveCart=useLoaderData()
    const [cart,setCart]=useState(saveCart)
    // console.log(saveCar);

const handleRemoveFromCart=(id)=>{
    const remaining=cart.filter(product=> product.id !== id)
    setCart(remaining);
    removeFromDb(id)
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
            <div className='cart-container bg-orange-200 p-6 mt-14 w-[576px]  h-[576px]'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;