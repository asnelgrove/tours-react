import React from 'react'
import '../index.css';
import { useNavigate } from 'react-router-dom';
const Cart = (props) => {
    const navigate = useNavigate();
    const { cartItems, onAdd, onRemove, onCancel } = props;
    const tourPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const salesTax = tourPrice * 0.15;
    const bookingFee = 19.99 * cartItems.length;
    const grandTotal = tourPrice + salesTax + bookingFee;
    const Checkout = () => {
        alert("Thanks for viewing this sample website")
    }
    const Cancel = () => {
        cartItems.length = 0;
        onCancel();
        navigate("/all-tours");
    }
    const Shop = () => {
        navigate("/all-tours");
    }
    return (
        <div className='cart-page'>
            <header>
                <h1>Your Cart</h1>
                {cartItems.length > 0 &&
                    <h2>Please indicate number of travelers and check Cart Summary below</h2>
                }
            </header>

            <div>
                {cartItems.length === 0 &&
                    <>
                        <div>Cart is empty</div>
                        <br></br>
                        <button className='solid red' onClick={Cancel}>Back to Tours</button>
                        
                    </>
                }

                {cartItems.length > 0 &&
                    <>

                        <div className='table'>
                            <div className='row hide'>
                                <h2 className='col-2 hide'>Tour</h2>
                                <h2 className='col-1 hide'>Travelers</h2>
                                <h2 className='col-1 hide'>Price</h2>
                            </div>
                            {cartItems.map((item) => (

                                <div key={item.id} className="row">
                                    <div className='col-2'>
                                        {item.title}
                                    </div>

                                    <div className='col-1'>
                                        <span>
                                            <button className="cart-btn blue" onClick={() => onAdd(item)}>+</button>
                                            <button className="cart-btn red" onClick={() => onRemove(item)}>-</button>
                                        </span>
                                        <p>{item.qty}</p>
                                    </div>

                                    <div className='col-1'>
                                        {item.qty} x ${item.price.toFixed(2)}
                                    </div>

                                </div>
                            ))}
                        </div>
                        <hr></hr>
                        <div className='row-half'>
                            <div className='col-2 text-left'><strong>Cart Summary</strong></div>
                        </div>
                        <div className='row-half'>
                            <div className='col-2 text-left'>Tour</div>
                            <div className='col-1 text-right'>${tourPrice.toFixed(2)}</div>
                        </div>
                        <div className='row-half'>
                            <div className='col-2 text-left'>taxes</div>
                            <div className='col-1 text-right'>${salesTax.toFixed(2)}</div>
                        </div>
                        <div className='row-half'>
                            <div className='col-2 text-left'>booking fee</div>
                            <div className='col-1 text-right'>${bookingFee.toFixed(2)}</div>
                        </div>
                        <div className='row-half'>
                            <div className='col-2 text-left'><strong>Total</strong></div>
                            <div className='col-1 text-right'><strong>${grandTotal.toFixed(2)}</strong></div>
                        </div>
                        <div className='btns-inline'>
                            <div >
                                <button className='solid blue' onClick={Checkout}>Checkout</button>
                            </div>
                            <div >
                                <button className='solid green' onClick={Shop}>Continue Shopping</button>
                            </div>
                            <div >
                                <button className='solid red' onClick={Cancel}>Cancel</button>
                            </div>

                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart