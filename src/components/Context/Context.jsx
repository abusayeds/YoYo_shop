import React, {  createContext, useEffect, useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

 export const AuthContext =createContext()


const  Context = ({children}) => {
    const [showModel , setShowModel] = useState()
    const close = () => {setShowModel(false)}
    const openModel = (id) => {
        setShowModel(id)
        return openModel
    }
    const [collection , setCollection] = useState([]);
    useEffect(() => {
        fetch(`${api}/collection`)
         .then(res => res.json())
         .then (data => setCollection(data))
        },[])
//   cart funtion ///////
const [cartItem,setCartItem ] =useState([])

const deleteProduct = (id) => {
    const deleteitem = cartItem.filter(i => i._id !== id)
    setCartItem(deleteitem)
  return deleteProduct
} 
const cartPtoduct = (cart) => {
     const id =cartItem.find(c => c._id === cart._id  )
      if(id) {
        alert(`This Product already addded,, Please increase your Quantity !!`)
      }
      else{
        const item = [...cartItem, cart]
        setCartItem(item)
      }
   
    return cartPtoduct
}

  
const authinfo = {
    
    collection,showModel,cartItem,
    openModel,close,cartPtoduct,deleteProduct, 

}

    return (
        <div>
           <AuthContext.Provider value={authinfo} >
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default Context;