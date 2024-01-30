import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/Context';

const Cart = () => {
    const {cartItem} = useContext(AuthContext)
    // console.log(cartItem);
    return (
        <div>
      <p>this is cart</p>
        </div>
    );
};

export default Cart;<p>this is cart</p>