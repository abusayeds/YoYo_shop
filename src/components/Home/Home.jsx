import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import api from '../../api';




const Home = () => {
const {openModel} = useContext(AuthContext)
const [products, setProducts] = useState([])
const [counts ,setcounts] = useState([])
const count = counts.length;
// console.log(count);

const [page, setPage] = useState(0)
const [size , setsize] =useState(10)
const pages = Math.ceil(count/ size)

  useEffect(() => {
    fetch(`${api}/count`)
     .then(res => res.json())
     .then (data => setcounts(data))
    },[])
     useEffect(() => {
     fetch(`${api}/products?page=${page}&size=${size}`)
      .then(res => res.json())
      .then (data => setProducts(data))
     },[page,size])
 
   

    return (
        <main>
            <div className=' w-full flex justify-between'>
                <div>
                    <p>this is home page</p>
                </div>
                <div>
               
                </div>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-2 gap-5 md:p-10 p-2 mx-auto '>
          
          {
           products.map(product => 
            <div className=' rounded border 'key={product._id}>
                  <div className='flex justify-between p-2'>
                    <p>{product.name}</p>
                    <p onClick={() => openModel(product._id)} > <FontAwesomeIcon className='bg-teal-600 hover:bg-teal-700 text-white rounded-full p-2' icon={faShoppingCart}></FontAwesomeIcon> </p>
                  </div>
                 <img className='w-full md:h-72 h-36' src={product.image} alt=""  />
                 <div className='md:flex justify-between items-center p-5'>
                    <p className=''> -{product.price}$ <small><del>100%</del></small></p>
                    <div>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    </div>
                 </div>
              </div>
                )
          }
            
        </div>
          <div className='md:flex justify-center items-center mb-20 '>
           <FontAwesomeIcon className='mr-4' icon={faAngleLeft}> </FontAwesomeIcon>
            {
                [...Array(pages).keys()].map( num => 
                    <button onClick={() => setPage(num)} className= {`border px-4 py-1 ml-2 rounded ${page === num && "bg-teal-600 text-white font-semibold"}`} key={num}>
                        {num + 1}
                    </button>
                    )
            }
             <div className='flex justify-center items-center'>
             <p className='ml-5'>Data size = </p>
            <select onChange={ event => setsize(event.target.value)} className='border rounded ml-3 focus:outline-none p-1'>
               
                <option value= '5'>5</option>
                <option selected value= '10'>10</option>
                <option value= '15'>15</option>
                <option value= '20'>20</option>
                <option value= '25'>25</option>
            </select>
             </div>
             <FontAwesomeIcon icon={faAngleRight} className='ml-4'> </FontAwesomeIcon>
          </div>
        </main>
    );
};

export default Home;