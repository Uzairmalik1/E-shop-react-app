import React, { useState } from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import { useAuth0 } from "@auth0/auth0-react";


const Home = ({ detail, view, close, setClose, addtoCart }) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [HomeProduct, setHomeProduct] = useState(Homeproduct)
  return (
    <>
        {
            close ? 
            <div className="product_detail">
                <div className="container">
                    <button onClick={() => setClose(false)} className='closebtn'> <AiOutlineCloseCircle/> </button>
                    {
                        detail.map((curElm) => {
                            return(
                                <div className="productbox">
                                    <div className="imgbox">
                                        <img src={curElm.Img} alt={curElm.Title} />
                                    </div>
                                    <div className="detail">
                                        <h4>{curElm.Cat}</h4>
                                        <h2>{curElm.Title}</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur illo reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, doloribus!
                                        </p>
                                        <h3>${curElm.Price}</h3>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> : null
        }
        <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>The Best Note Book Collection 2023</h2>
                    <Link to="/product" className='link'>Shop Now <BsArrowRight /> </Link>
                </div>
                <div className="img_box">
                    <img src="./image/slider_img.png" alt="slider-img" />
                </div>
            </div>
        </div>
        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="img_box">
                        <img src="./image/mobile.png" alt="mobile" width='200px'/>
                    </div>
                    <div className="detail">
                        <p>23 Products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="./image/smart watch.png" alt="watch" width='180px'/>
                    </div>
                    <div className="detail">
                        <p>18 Products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="./image/headphone.png" alt="headphone" width='90px'/>
                    </div>
                    <div className="detail">
                        <p>52 Products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="./image/cpu heat.png" alt="cpu heat" width='160px'/>
                    </div>
                    <div className="detail">
                        <p>63 Products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>Free Shopping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Return & Refund</h3>
                        <p>Money Back Gaurenty</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <CiPercent />
                    </div>
                    <div className="detail">
                        <h3>Member Discount</h3>
                        <p>On every Order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BiHeadphone />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product">
            <h2>Top Products</h2>
            <div className="container">
                {
                    HomeProduct.map((curElm)=>{
                        return(
                            <div className="box" key={curElm.id}>
                                <div className="img_box">
                                    <img src={curElm.Img} alt={curElm.Title} />
                                    <div className="icon">
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtoCart (curElm)}> <AiOutlineShoppingCart /> </li>
                                                :
                                                <li onClick={() => loginWithRedirect()}> <AiOutlineShoppingCart /> </li>
                                            }
                                        {/* <li onClick={() => addtoCart (curElm)}> <AiOutlineShoppingCart /> </li> */}
                                        <li  onClick={() => view(curElm)}> <BsEye/> </li>
                                        <li> <AiOutlineHeart/> </li>
                                    </div>
                                </div>
                                <div className="detail">
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>${curElm.Price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>
        </div>
        <div className="banner">
            <div className="container">
                <div className="detail">
                    <h4>LATEST TECHNOLOGY ADDED</h4>
                    <h3>Apple ipad 10.2 9th Gen - 2021</h3>
                    <p>$ 986</p>
                    <Link to='/product' className='link'>Shop Now <BsArrowRight/> </Link>
                </div>
                <div className="img_box">
                    <img src="./image/slider_img.png" alt="sliderImg" width='80%' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home