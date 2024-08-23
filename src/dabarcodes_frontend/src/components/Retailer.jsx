import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./style/Promotion.css"

const Retailer = () => {
  return (
    <div>
       <div className="Promotion">
    <div className="Promotion-box">
<div className="Promotion-container">
        <h2>For Customers</h2>
        <div className="PromotionContainer2">
        <div className="Promotion-smallbox">
<FaHeart className='Promotion-icon'/>
<h3>Personalized Promotions</h3>
<p>Get promotions tailored to your shopping preferences.
 Enjoy savings on products you love the most.</p>
        </div>
        <div className="Promotion-smallbox">
        <FaSearch className='Promotion-icon'/>
<h3>SKU Tracking</h3>
<p>Track your linked SKUs and stay updated on the best deals. Customize your preferences to get 
notifications about promotions on your favorite products.</p>
        </div>
        </div>
       
    </div>
    <div className="img">
        <img src="/image/image 54.png" alt="image" />
    </div>
    </div>
 </div>
    </div>
  )
}

export default Retailer
