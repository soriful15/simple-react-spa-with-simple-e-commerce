import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        // console.log(product)
        // cart.push(product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <>
            <div className='shop-container'>
                <div className='products-container grid lg:grid-cols-3 md:grid-cols-2 gap-11 m-12'>
{
    products.map(product=> <Product 
        key={product.id}
        product={product}
        handleAddToCart={handleAddToCart}
    ></Product>)
}
                </div>
                <div className='cart-container'>
<h4> Order Summary</h4>
<p>Selected Item: {cart.length}</p>
                </div>

            </div>
        </>
    );
};

export default Shop;