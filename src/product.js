import React from 'react'
import './product.css'
import Productdetail from './productdetail'
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';

const Product = ({product, setProduct, detail, view, close, setClose, addtoCart}) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filtterproduct = (product) => {
        const update = Productdetail.filter((i)=> {
            return i.Cat === product
        })
        setProduct(update);
    }
    const Allproduct = ()=>{
        setProduct(Productdetail)
    }
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
       
        <div className="product">
            <h2># Products</h2>
            <p>Home - products</p> 
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={()=> Allproduct ()}>All Products</li>    
                            <li onClick={()=> filtterproduct ('Tablet')}>Tablet</li>
                            <li onClick={()=> filtterproduct ("Smart Watch")}>Smart Watch</li>
                            <li onClick={()=> filtterproduct ("Headphone")}>Headphone</li>
                            <li onClick={()=> filtterproduct ("Electronics")}>Electronics</li>
                            <li onClick={()=> filtterproduct ("Camera")}>Camera</li>
                            <li onClick={()=> filtterproduct ("Gaming")}>Gaming</li>
                        </ul>
                    </div>
                </div>
                <div className="productbox">
                    <div className='contant'>
                        {
                            product.map((curElm)=>{
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
                                            <li onClick={() => view(curElm)}> <BsEye/> </li>
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
            </div>
        </div>
    </>
  )
}

export default Product