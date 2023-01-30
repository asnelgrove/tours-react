import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <a href='#'>Terms & Conditions</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Contact</a>
            <p className={classes.date}>&copy;{(new Date().getFullYear())} Tempus Tours</p>
        </footer>
    </div>
  )
}

export default Footer