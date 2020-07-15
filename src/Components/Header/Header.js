import React from 'react';
import { Link } from 'react-router-dom';
// connect is a HOC to allow component to have access to redux
import { connect } from 'react-redux';

import { auth } from '../../Firebase/firebase.utils';
import CartIcon from "../CartIcon/cart-icon";

import './header.styles.scss';
import {ReactComponent as Logo } from '../../Assets/original.svg';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className="options">
            <Link className='option' to="/shop">
                SHOP
            </Link>

            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT</div> )  
                : (
                <Link className='option' to="/signin">
                    SIGN IN
                </Link>
                )
            }
            <CartIcon />

        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);

