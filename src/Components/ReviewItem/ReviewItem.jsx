import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product,handleRemoveFromCart }) => {
    console.log(product)
    const { img, id, price, quantity, name} = product
    return (
      
        <div className='review-item w-[576px] border-2 border-indigo-500/100 border-solid  rounded-md mb-8 p-4'>
            {/* <div className='flex flex-grow'> */}
            <div className='flex justify-between'>
                <div className='main flex gap-2'>
                    <div>
                        <img className='w-28 h-28 rounded-md' src={img} alt="" />
                    </div>
                    <div className='2nd'>
                        <p className='text-2xl font-bold'>{name}</p>
                        <p className='text-lg- font-bold'> price: <span className='text-orange-500'>$ {price}</span></p>
                        <p className='text-lg- font-bold'> shipping charge: <span className='text-orange-500'>$ {quantity}</span></p>
                    </div>
                </div>
     <button className='my-auto  bg-red-300 px-3 py-3 rounded-full' onClick={()=>handleRemoveFromCart(id)}> <FontAwesomeIcon className='h-6 text-red-50' icon={faTrashCan} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;