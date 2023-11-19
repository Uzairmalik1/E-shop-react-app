import React from 'react'
import './Footer.css'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src="./image/shope.png" alt="logo" /> <p>E-Shope</p>
                    </div>
                    <div className="detail">
                        <p>We are a team of desingers and developers that create high quality WordPress</p>
                        <div className="icon">
                            <li> <BiLogoFacebook /> </li>
                            <li> <AiOutlineInstagram /> </li>
                            <li> <AiOutlineTwitter /> </li>
                            <li> <BiLogoYoutube /> </li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Cantact</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer