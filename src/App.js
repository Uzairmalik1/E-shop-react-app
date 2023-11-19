import React, { useState } from 'react'
import Nav from './nav'
import Rout from './rout'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Productdetail from './productdetail'



const App = () => {
  // add to cart
  const [cart, setCart] = useState([])
  // this is for product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  // this is for filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>{
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }
  // product detail
  const view = (product) =>{
    setDetail([{...product}])
    setClose(true)
  }

  // Add to Cart
  const addtoCart = (product) =>{
    const exsit = cart.find((x) => {
      return x.id === product.id
    })
    if (exsit) {
      alert("This Product is already added to cart")
    }else{
      setCart([...cart, {...product, qty:1}])
      alert("Product is added to cart")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn}/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtoCart={addtoCart}/>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App