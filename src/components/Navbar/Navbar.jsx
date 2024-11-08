import React from 'react'

import './Navbar.css'
import Rocket from '../../assets/rocket.png'
import Star from '../../assets/glowing-star.png'
import IdButton from '../../assets/id-button.png'
import Memo from '../../assets/memo.png'
import Order from '../../assets/package.png'
import Lock from '../../assets/locked.png'
import LinkWithIcon from './LinkWithIcon'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='align_center navbar'>
        <div className='align_center'>
            <h1 className="navbar_heading">CartWish</h1>
            <form action="" className="align_center navbar_form">
                <input type="text" className="navbar_search" placeholder='Search Products'/>
                <button className="search_button" type='submit'>Search</button>
            </form>
        </div>
        <div className='align_center navbar_links'>
            <LinkWithIcon title="Home" link="/" emoji={Rocket} />
            <LinkWithIcon title="Products" link="/products" emoji={Star} />
            <LinkWithIcon title="LogIn" link="/login" emoji={IdButton} />
            <LinkWithIcon title="SignUp" link="/signup" emoji={Memo} />
            <LinkWithIcon title="My Orders" link="/myorders" emoji={Order} />
            <LinkWithIcon title="LogOut" link="/logout" emoji={Lock} />
            <NavLink to="/cart" className='align_center'>
              Cart <p className="align_center cart_counts">0</p>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar