import React from 'react'
import './cart.css'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';




const Cart = ({cart, setCart}) => {
    //increase qty
    const incqty = (product) => {
        const exsit = cart.find((x) =>{
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm 
        }))
    }
    // Dec qty
    const decqty = (product) => {
        const exsit = cart.find((x) =>{
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm 
        }))
    }

    // remove cart product
    const removeproduct = (product) => {
        const exsit = cart.find((x) =>{
            return x.id === product.id
        })
        if(exsit.qty > 0){
           setCart(cart.filter((x) => {
            return x.id !== product.id
           }))
        }
    }

    // Total price
    const totalprice = cart.reduce((price, item)=> price + item.qty * item.Price, 0)
  return (
    <>
        <div className="cart_container">
            {
                cart.length === 0 &&
                <div className="emptycart">
                    <h2 className='empty'>Cart is Empty</h2>
                    <Link to='/product' className='emptycartbtn'>Shop Now</Link>
                </div>
            }
            <div className="contant">
                {
                    cart.map((curElm) => {
                        return(
                            <div className="cart_item" key={curElm.id}>
                                <div className="img_box">
                                    <img src={curElm.Img} alt={curElm.Title} />
                                </div>
                                <div className="detail">
                                    <div className="info">
                                        <h4>{curElm.Cat}</h4>
                                        <h3>{curElm.Title}</h3>
                                        <p>Price: ${curElm.Price}</p>
                                        <div className="qty">
                                            <button onClick={() => incqty (curElm)} className='incqty'>+</button>
                                            <input type="text" value={curElm.qty} />
                                            <button onClick={() => decqty (curElm)}         className='decqty'>-</button>
                                        </div>
                                        <h4 className='subtotal'>Sub Total: ${curElm.Price * curElm.qty} </h4>
                                    </div>
                                </div>
                                <div className="close">
                                       <button onClick={() => removeproduct(curElm)}> <AiOutlineClose/> </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                cart.length > 0 &&
                <>
                 <h2 className='totalprice'>Total: ${totalprice}</h2>
                 <button className="checkout">Checkout</button>
                </>
            }
           
        </div>
    </>
  )
}

export default Cart