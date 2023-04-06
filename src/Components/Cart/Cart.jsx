import React from 'react';
import './Cart.css'

const Cart = ({ cart}) => {
    // const cart=props.cart
    // const {cart}=props
    // console.log(cart)
    let totalPrice=0
    let totalShipping=0
let quantity=0
    for(const product  of cart){
        // if(product.quantity===0){
        //     product.quantity=1
        // }
        // product.quantity=product.quantity || 1
        totalPrice=totalPrice+product.price * product.quantity;
totalShipping=totalShipping+product.shipping * product.quantity;
quantity=quantity+product.quantity


    }
    const tax=((totalPrice*7)/100)
    const grandTotaL=parseFloat(totalPrice)+parseFloat(totalShipping)+parseFloat(tax)
   
    return (
        <>
            <div className='mt-6 text-lg font-medium sticky top-0'>
                <h4 className='text-2xl font-bold text-center'> Order Summary</h4>
                    {/* <p className=' mt-6'>Selected Item: {cart.length}</p> */}
                    <p className=' mt-6'>Selected Item: {quantity}</p>
                    <p className='mt-4'>Total Price: ${totalPrice}</p>
                    <p className='mt-4'>Total Shipping Charge: ${totalShipping}</p>
                    <p className='mt-4'>Tax: ${tax.toFixed(2)}</p>
                    <h6 className='text-xl font-bold mt-4'>Grand Total: ${grandTotaL.toFixed(2)}</h6>
            
            </div>
        </>
    );
};

export default Cart;