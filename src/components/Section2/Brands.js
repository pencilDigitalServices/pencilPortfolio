import React from 'react';
import './Brands.css';
import nestle from '../../images/brands/Nestle.svg';
import canon from '../../images/brands/canon.svg';
import starbucks from '../../images/brands/starbucks.svg';
import omnienergy from "../../images/brands/omnienergy.svg";
import worthsight from '../../images/brands/worthsight.svg';
import dot from '../../images/brands-dot.svg';

function Brands() {
  const brandLogoList = [
    worthsight,
    nestle,
    omnienergy,
    canon,
    starbucks,

  ];
  return (
    <div className="brands-container" id='client'>
      <div className="brand-heading">
        <h2>We are proud to have these amazing brands as clients</h2>
        <img src={dot} alt="" />
      </div>
      <div className="brand-logo-list">
        {brandLogoList.map((logo) => (
          <div className="brand-logo-container">
            <img className="brand-logo" src={logo} alt="clients" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
