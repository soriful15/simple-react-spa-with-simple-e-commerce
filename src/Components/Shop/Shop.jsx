import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [cartProducts, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const { totalProducts } = useLoaderData();
    // console.log(totalProducts)
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // const itemsPerPage = 10; //TODO: make it dynamic
    const totalPage = Math.ceil(totalProducts / itemsPerPage);
    /*    const pageNumbers=[]
   for(let i=0; i<=totalPage;i++ ){
       pageNumbers.push(i)
   } */
    const pageNumbers = [...Array(totalPage).keys()]
    // console.log(pageNumbers)
    /* **
    Done:1.Determine the total number of items
    TODO:2. Decide on the number of items per page
    Done:3.Calculate the Total Number of Pages
    DONE: Determine the current page:
    */



    /* useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []) */
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json()
            setProducts(data)
        }
        fetchData();
    }, [currentPage, itemsPerPage]);

















    useEffect(() => {

        // console.log('product depnce',products)
        const storedCart = getShoppingCart()
        const ids = Object.keys(storedCart)

        fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProducts=>{
                console.log('only products in teh shopping', cartProducts)


                const saveProduct = [];
                // console.log(storedCart);
        
                // step 1:get id
                for (const id in storedCart) {
                    // console.log(id)
        
                    // step 2: get the product by using id
                    const addProduct = cartProducts.find(product => product._id === id)
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


                
            })
  
    }, [cartProducts])

    const handleAddToCart = (product) => {
        // console.log(product)
        // cart.push(product)
        // const newCart=[...cart,product]

        // if product doesnt exist in the cart,then set quantity
        // if exist update quantity by 1
        let newCart = [];
        const exist = cart.find(pd => pd._id === product._id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id)
            newCart = [...remaining, exist]
        }
        setCart(newCart)
        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }


    const options = [5, 10, 15, 20];

    function handleItemsPerPageChange(event) {
        setItemsPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    }
    return (
        <>
            <div className='shop-container'>
                <div className='products-container grid lg:grid-cols-3 md:grid-cols-2 gap-11 m-12'>
                    {
                        cartProducts.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container bg-orange-200 p-6 w-[576px]  h-[576px] mx-auto sticky top-0  mt-12'>

                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link to='/orders'>

                            <button className='text-xl mt-4 bg-amber-500 px-6 py-6 w-full flex justify-between rounded-2xl mx-auto text-white'><span>Review order</span>
                                <FontAwesomeIcon className='h-6 ' icon={faBookOpenReader} />
                            </button>
                        </Link>
                    </Cart>
                </div>

            </div>




            {/* pagination */}

            <div className='pagination text-center mb-5'>
                <p>current Page:{currentPage} and Items per page:{itemsPerPage}</p>
                {
                    pageNumbers.map(number => <button className={`btn btn-outline btn-success ${currentPage === number ? 'bg-yellow-600' : ''}`}
                        key={number} onClick={() => setCurrentPage(number)}>
                        {number}</button>)
                }

                <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    {
                        options.map(option => (<option key={option} value={option}>{option}</option>))
                    }

                </select>



            </div>

        </>
    );
};

export default Shop;