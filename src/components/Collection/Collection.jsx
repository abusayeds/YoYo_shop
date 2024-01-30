import React, {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Context/Context';

const Collection = () => {
    const {openModel} =useContext(AuthContext)
    
   const  {category} = useParams()
    const [categoryProduct, setcategoryProduct] = useState([])
    useEffect(() => {
        fetch(`${api}/prodectcollection/${category}`)
        .then(res => res.json())
        .then(data => setcategoryProduct(data))
    },[category])

    return (
        <div className='grid md:grid-cols-5 grid-cols-2 gap-5 md:p-10 p-2 mx-auto '>
          
          {
            categoryProduct.map(product => 
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
    );
};

export default Collection;