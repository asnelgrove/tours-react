import React from 'react';
import classes from "./Nav.module.css";
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const {cartItems} = props
  return (
    <nav className={classes.navbar}>
        <div className={classes.navitem}><Link to={'/tours-react'} className={classes.link}>Tempus Tours</Link></div>
        <div className={classes.navitem}><Link to={'/cart'}><button className='solid green'>Cart <span className='inner-bubble'>{cartItems.length}</span></button></Link></div>
    </nav>
  )
}

export default Nav