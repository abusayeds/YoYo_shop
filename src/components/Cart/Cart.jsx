import React, { useContext,  useEffect,  useState } from 'react';
import { AuthContext } from '../Context/Context';
import api from '../../api';



const Cart = () => {
    const {cartItem,deleteProduct} = useContext(AuthContext)
     const [quan , setQuan]

    return (
        <div className='md:p-0 p-2 z-50'>
          <p className='text-gray-400 text-4xl font-semibold text-center'>Shopping Cart !!</p>
          {
            cartItem.map(item => 
            <div className=' md:grid md:grid-cols-2 rounded bg-gray-200  mt-4 md:w-4/6 md:mx-auto p-2 justify-center items-center' key={item._id}>
                <div className='flex justify-around items-center  '>
                    <div className='flex items-center  justify-around w-52'>
                    <p onClick={() => deleteProduct(item._id) }  className=' hover:bg-red-600 px-3 py-1 hover:text-white hover:font-semibold  rounded-full'>X</p>
                    <img className='w-20 rounded' src= {item.image} alt=""  />
                 
                    </div>
                    <p>{item.name}</p>
                   
                </div>
                <div className='  md:m-0 mt-5 md:flex hidden justify-around '>
                {/* <div>
               
                <p className='font-semibold'>{item.price} <small>$</small></p>
                </div> */}
                <div className='flex justify-center bg-white items-center'>
                    <button  className='px-2 border'>-</button>
                    <p className='px-2 border'> </p>
                    <button  className='px-2 border'>+</button>
                    
                </div>
                <p> Price  : {item.price} $</p>
                </div>
                {/* mobil devise */}
                <div className=' bg-white p-4 rounded  md:m-0 mt-5 flex md:hidden justify-around '>
                {/* <div>
               
                <p className='font-semibold'>{item.price} <small>$</small></p>
                </div> */}
                <div className='flex justify-center bg-white items-center'>
                    <button className='px-2 border'>-</button>
                    <p className='px-2 border'></p>
                    <button className='px-2 border'>+</button>
                </div>
                <p> Price : 00</p>
                </div>
                
            </div>  
                
                )
          }
        </div>
        
    );
};

export default Cart;