import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    // console.log(props)
    const { img, name, price, seller, ratings } = props.product
   /*  const handleAddToCart=(product)=>{
        console.log('add to cart',product)
    } */
    const handleAddToCart=props.handleAddToCart
    return (
        <>
            {/*   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='px-4 py-4' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className='text-lg font-bold'>Price: ${price}</h2>
    <div className="flex items-end">
     <div>
     <p className='text-base '>Manufacturer: {seller}</p>
        <p className='text-base '>Rating: {ratings}</p>
     </div>
    </div>
  </div>
</div> */}
            <div className='product border-2 border-purple-600 border-solid rounded-2xl w-full'>
                {/* <img className='w-72 h-72' src={img} alt="" /> */}
                <img className='rounded-2xl px-4 py-4 w-full' src={img} alt="" />
                <div className='ml-4 mb-24 '>
                    <h2 className='text-lg font-bold '>{name}</h2>
                    <h2 className='text-lg font-bold'>Price: ${price}</h2>
                    <div className='mt-5'>
                        <p className='text-base '>Manufacturer: {seller}</p>
                        <p className='text-base '>Rating: {ratings} Stars</p>
                    </div>
                </div>
           <div className=''>
           <div>
           <button onClick={()=>handleAddToCart(props.product)} className='bg-amber-500 w-full px-4 py-4 border-2 border-solid rounded-2xl text-lg btn-cart'>Add to card <FontAwesomeIcon icon={faShoppingCart} /></button>  
           </div>
            </div> 


                   
            </div>
        </>
    );
};

export default Product;