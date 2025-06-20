import React from 'react';
import '../styles/header.css';
import logo1 from '../images/logo.png';

const Header1 = () => {
  return (
    <div className="header1">
      <div className="header-content">
        <div className="logo-area">
          <img src={logo1} alt="logo" />
        </div>
        <div className="description-area">
          <h2 className="description">
            Limited time offer, Buy XTRA WordPress theme only
            <span> $49</span>
          </h2>
        </div>
        <div className="button-area">
          <button className="topbtn1">
            <a href="https://themeforest.net/checkout/109042317/create_account?clickid=2mJT6VxgDxycTYLQYDSKLXiUUksUG-2RqSAcWQ0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1287861&mp_value1=&utm_campaign=af_impact_radius_1287861&utm_medium=affiliate&utm_source=impact_radius">Download XTRA Theme</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header1;
