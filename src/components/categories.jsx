import React, { Component } from 'react'
import '../styles/categories.css';
import menImg from '../images/men.jpg';
import womenImg from '../images/women.jpg';


export class categories extends Component {
  render() {
    return (
      <div>
        <h1 className="p_heading1">Categories</h1>
        <h1 className="p_heading2">For Both Genders</h1>
        <div className="men">
        <img src={menImg} alt="Men image" />
          <div className="category1">
            <h1>Men</h1>
            <div className="c_body1">
                <h3>125 items available</h3>
                <button className='btn1'><a href="">EXPLORE</a></button>
            </div>
          </div>
        </div>
        <div className="women">
        <img src={womenImg} alt="Women image" />
          <div className="category2">
            <h1>Women</h1>
            <div className="c_body2">
                <h3>123 items available</h3>
                <button className='btn1'><a href="">EXPLORE</a></button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default categories  