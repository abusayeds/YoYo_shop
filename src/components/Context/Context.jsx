import React, {  createContext, useEffect, useState } from 'react';
import api from '../../api';

 export const AuthContext =createContext()


const  Context = ({children}) => {
    const [showModel , setShowModel] = useState()
    const close = () => {setShowModel(false)}
    const openModel = (id) => {
        setShowModel(id)
        return openModel}
    const [collection , setCollection] = useState([]);
    useEffect(() => {
        fetch(`${api}/collection`)
         .then(res => res.json())
         .then (data => setCollection(data))
        },[])
//   cart funtion ///////
const [cartItem,setCartItem ] =useState([])
const cartPtoduct = (cart) => {
     const item = [...cartItem, cart]
     setCartItem(item)
    return cartPtoduct
}
// console.log(cartItem);

  
const authinfo = {
    
    collection,showModel,cartItem,
    openModel,close,cartPtoduct

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