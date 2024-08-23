import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import "./style/Home.css"
const Home = () => {
  return (
    <>
<div className='container'>
<div className="box">
    <div className="header">
       <h1> What is DaBarcodes</h1>
        <p>daBarcodes bridges the gap between customers, suppliers, and retailers
         through a unique promotional platform. Whether you're here to save,
         promote, or analyze, daBarcodes offers the perfect solution.</p>
    </div>
    <div className="boxes">
        <div className="smallboxes">
            <p>Start Your Savings <br /> Journey</p>
     <div className="image">
        <img src="/image/image 50.png" alt="image" />
     </div>
     <div className="primary-btn">
        <p>join as customers <FaLongArrowAltRight style={{ paddingTop: '10px'}}/></p>
     </div>
        </div>
       
        <div className="smallboxes">
            <p>Unlock Customer <br />
             Insights</p>
     <div className="image">
        <img src="/image/image 51.png" alt="image" />
     </div>
     <div className="primary-btn">
        <p>join as retailer <FaLongArrowAltRight style={{ paddingTop: '10px'}} /></p>
     </div>
        </div>
        <div className="smallboxes">
            <p>Promote Your <br />
            Products Effortlessly</p>
     <div className="image">
        <img src="/image/image 52.png" alt="iamge" />
     </div>
     <div className="primary-btn">
        <p>join as suppliers <FaLongArrowAltRight style={{ paddingTop: '10px'}}/></p>
     </div>
        </div>
    </div>
</div>
</div>

    </>
   
  )
}

export default Home
