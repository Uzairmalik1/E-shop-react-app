import React, { useState } from 'react'
import "./nav.css"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';




const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();
  return (
    <>
        <div className='free'>
            <div className="icon">
                <FaTruckMoving />
            </div>
            <p> FREE shopping when shopping upto $1000</p>
        </div>
        <div className="main_header">
            <div className="container">
                <div className="logo">
                    <img src="./image/shope.png" alt="logo" /> <p>E-Shope</p>
                </div>
                <div className="search-box">
                    <input type="text" value={search} placeholder='Search Your Product...' autoComplete='off' onChange={(e)=>setSearch(e.target.value)} />
                    <button type='submet' onClick={() => searchbtn (search)}>Search</button>
                </div>
                <div className="icon">
                    {
                        isAuthenticated &&
                        (
                            <div className="account">
                                <div className="user-icon">
                                    <img src={user.picture} alt={user.name} />
                                </div>
                                <p>Hello, {user.name}</p>
                            </div>
                        )
                    }
                    
                    <div className="second_icon">
                        <Link to="/" className='link'><AiOutlineHeart/></Link>
                        <Link to="/cart" className='link'><BsBagCheck/></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="container">
                <ul className='nav'>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                <div className="auth">
                    {
                        isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out <CiLogout/></button>
                        :
                        <button onClick={() => loginWithRedirect()}>Log in <CiLogin/></button>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav