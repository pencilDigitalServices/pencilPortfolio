import React from 'react';
import "./Brands.css";
import netflix from "../../images/brands/netflix.svg"
import nestle from "../../images/brands/Nestle.svg"
import amexpress from "../../images/brands/am-express.svg"
import canon from "../../images/brands/canon.svg"
import figma from "../../images/brands/figma.svg";
import starbucks from "../../images/brands/starbucks.svg";
import dot from "../../images/brands-dot.svg";


function Brands() {
    const brandLogoList = [figma, nestle, netflix, amexpress, canon, starbucks];
  return (
    <div className='brands-container'>
     <div className='brand-heading' >
        <h2>We are proud to have these amazing brands as our clients</h2>
        <img src={dot} alt='' />
     </div>
     <div className='brand-logo-list'>
      {brandLogoList.map((logo) => (
        <div className='brand-logo-container'>
            <img className='brand-logo' src={logo} alt="" />
        </div>
      ))}
     </div>
    </div>
  )
}

export default Brands