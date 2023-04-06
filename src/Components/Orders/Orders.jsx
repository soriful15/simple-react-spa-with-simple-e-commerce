import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';


const Orders = () => {
    const saveCart=useLoaderData()
    const []=useState(saveCart)
    // console.log(cart);
    return (
        <div className='grid md:grid-cols-2'>
            <div className='review-container mt-14 mx-auto'>
               {
                saveCart.map(product=> <ReviewItem
                key={product.id}
                product={product}
                ></ReviewItem> )
               }
                
            </div>
            <div className='cart-container bg-orange-200 p-6 mt-14 w-[576px]  h-[576px]'>
                <Cart cart={saveCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;