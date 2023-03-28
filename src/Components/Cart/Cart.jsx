import React from 'react';
import './Cart.css'

const Cart = ({ cart}) => {
    // const cart=props.cart
    // const {cart}=props
    console.log(cart)
    let totalPrice=0
    let totalShipping=0

    for(const product  of cart){
        totalPrice=totalPrice+product.price
totalShipping=totalShipping+product.shipping


    }
    const tax=((totalPrice*7)/100).toFixed(2)
    const grandTotaL=parseFloat(totalPrice)+parseFloat(totalShipping)+parseFloat(tax)
    const allGrandTotal=grandTotaL.toFixed(2)
    return (
        <>
            <div className='mt-6 text-lg font-medium sticky top-0'>
                <h4 className='text-2xl font-bold text-center'> Order Summary</h4>
                    <p className=' mt-6'>Selected Item: {cart.length}</p>
                    <p className='mt-4'>Total Price: ${totalPrice}</p>
                    <p className='mt-4'>Total Shipping Charge: ${totalShipping}</p>
                    <p className='mt-4'>Tax: ${tax}</p>
                    <h6 className='text-xl font-bold mt-4'>Grand Total: ${allGrandTotal}</h6>
            
            </div>
        </>
    );
};

export default Cart;