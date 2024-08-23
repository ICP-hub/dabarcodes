import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./style/Promotion.css"

function PromotionSection() {

  return (
    <>
  <div className="Promotion">
    <div className="Promotion-box">
    <div className="img">
        <img src="/image/image 54.png" alt="image" />
    </div>
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

    </div>
 </div>
 {/* section 2 */}
    <div className="Promotion-section-2">
    <div className="Promotion-section-2-box">
        <h2>How to join to DaBarcodes as a Customer</h2>
    </div>
    <div className="Promotion-section-2-row">
        <div className="Promtion-section-2-coloumn">
            <img src="/image/Group 4526 (2).png" alt="image" />
            <h6>Sign up to the DaBarcodes</h6>
            <p>Add additional details such as your preferences 
            and interests to receive personalized promotions.</p>
        </div>
        <div className="line">
            <img src="/image/Arc 2.png" alt="arrow" className="arrow-image1" />
        </div>
        <div className="Promtion-section-2-coloumn">
            <img src="/image/Group 4526 (1).png" alt="image" />
            <h6>Browse the Promotions</h6>
            <p>Select the promotions that suit your needs and link them to your profile. 
            Save the linked promotions to your account for easy access</p>
        </div>
        <div className="line">
            <img src="/image/Arc 1.png" alt="arrow" className="arrow-image" />
        </div>
        <div className="Promtion-section-2-coloumn">
            <img src="/image/Group 4526.png" alt="image" />
            <h6>Redeem the Promotion</h6>
            <p>Go to any participating retailer listed on the platform. Show 
            the linked promotion details and redeem the offer.</p>
        </div>
    </div>
</div>
 </>
  
  );
}

export default PromotionSection;