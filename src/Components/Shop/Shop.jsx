import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {

        // console.log('product depnce',products)
        const storedCart = getShoppingCart()
        const saveProduct = [];
        // console.log(storedCart);

        // step 1:get id
        for (const id in storedCart) {
            // console.log(id)

            // step 2: get the product by using id
            const addProduct = products.find(product => product.id === id)
            // console.log(addProduct);
            // step 3 : get quantity by using id
            /*  const quantity=storedCart[id]
             addProduct.quantity=quantity
             console.log(addProduct); */

            // console.log('add product',addProduct);
            if (addProduct) {
                // step 3 : get quantity by using id
                const quantity = storedCart[id]
                addProduct.quantity = quantity
                // step 4: add the addedProduct to the save cart
                saveProduct.push(addProduct)
            }
            // console.log('add product',addProduct);
        }
        // step 5: set the cart
        setCart(saveProduct);
    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        // cart.push(product)
        // const newCart=[...cart,product]

        // if product doesnt exist in the cart,then set quantity
        // if exist update quantity by 1
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exist]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <>
            <div className='shop-container'>
                <div className='products-container grid lg:grid-cols-3 md:grid-cols-2 gap-11 m-12'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container bg-orange-200 p-6 '>
                    {/* <h4> Order Summary</h4>
                      <p>Selected Item: {cart.length}</p> */}
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;