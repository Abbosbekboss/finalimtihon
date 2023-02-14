import React, { useState } from 'react';
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



// images
import dele from './images/delete.svg';
import and from './images/and.png';
import or from './images/or.png';




function Card() {
  const { updateItemQuantity, removeItem } = useCart();

  let localArr = JSON.parse(localStorage.getItem("react-use-cart"))
  let Arraycard = localArr.items


  return (
    <>
      <Header />
      <main className='card_home'>
        <section className='card_home_cection'>
          <h2>
            Cart
          </h2>
          <div>
            <Link className='header_container_btns-btn' to={'/'} >Home</Link> &#62; <span>Card</span>
          </div>
        </section>
        <section className='card_box'>
          <div className="card_box_container">
            <div className="card_box_container_h">
              <h2>
                Your cart items
              </h2>
            </div>
            <table >
              <thead className='thead'>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Stock Status</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Checkout</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                {Arraycard.map((item, index) => (
                  <tr key={index}>
                    <th><img className='img_card' src={item.author} alt="" /></th>
                    <th>{item.title}</th>
                    <th><button className='tdBtn_i'>In Stock</button></th>
                    <th>
                      <div className='flex'>
                        <div className='flex_one'>{item.quantity}</div>
                        <div className='flex_two'>
                          <button className='flex_two_btn' onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }} ><img src={and} alt="+" /></button>
                          <button className='flex_two_btn' onClick={() => { updateItemQuantity(item.id, item.quantity - 1) }}><img src={or} alt="-" /></button>
                        </div>
                      </div>
                    </th>
                    <th>{item.cost * item.quantity}$</th>
                    <th><button onClick={() => { removeItem(item.id) }} className='tdBtn_d'><img src={dele} alt="" /></button></th>
                    <th><button className='tdBtn'>Add to cart</button></th>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
          <div className='total_container'>
            <div className='total_container_form'>
              <h2>
                Calculate Shipping
              </h2>
              <form className='total_form_select'>
                <select>
                  <option value="no">Select country</option>
                  <option value="uz">Uzbekistan</option>
                  <option value="usa">America</option>
                  <option value="ru">Russia</option>
                </select>
                <select>
                  <option value="no">Select country</option>
                  <option value="uz">Uzbekistan</option>
                  <option value="usa">America</option>
                  <option value="ru">Russia</option>
                </select>
                <input type="text" placeholder='Postcode / ZIP' />
                <button className='total_btn'>Estimate</button>
              </form>
              <h3>Discount coupon Code</h3>
              <form className='total_form_input'>
                <input type="text" placeholder='Coupon Code' />
                <button className='total_btn'>Apply Code</button>
              </form>
            </div>
            <div className='total_card'>
              <div className='total_card_list'>
                <ul className='total__list'>
                  <li>
                    <h4>Product</h4> <br />
                    <h4>Shipping</h4>
                  </li>
                  <li>
                    <h4>Total</h4> <br />
                    <h4>Free shipping</h4>
                  </li>
                </ul>
                <ul className='total__list'>
                  <li>Total</li>
                  <li className='total'>{localArr.cartTotal}$</li>
                </ul>
              </div>
              <div className='totalBtn'>
                <button className='total_btn'>Update Cart</button>
                <button className='total_btn'>Checkout</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Card;