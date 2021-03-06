import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../CustomButton/CustomButton';
import CartItem from "../CartItem/cart-item";
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
<div className="cart-dropdown">
    <div className='cart-items'>
    {cartItems.map(cartItem => (
         <CartItem key={cartItem.id} item={cartItem}/>
    ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
</div>

)

const mstp = ({ cart: {cartItems } }) => ({
    cartItems
})

export default connect(mstp)(CartDropdown);