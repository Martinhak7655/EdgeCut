import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Components1.css"
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

const Components1 = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div>
      <div className='header'>
        <div className='title'>
          <h2>EDGECUT</h2>
        </div>
        <div className='menu'>
          <Link to="/">
            <b>Menu</b>
          </Link>
          <Link to="/AboutPage">
            <b>About</b>
          </Link>
          <Link to="/FurniturePage">
            <b>Furnitures</b>
          </Link>
          <Link to="/BlogPage">
            <b>Blog</b>
          </Link>
          <Link to="/ContactPage">
            <b>Contact Us</b>
          </Link>
        </div>
        <div className='login'>
          <b>
            Login
            <BiSolidUser />
          </b>
          <AiOutlineSearch />
        </div>
        <div className='header-icons' onClick={() => setMenu(!menu)}>
          <AiOutlineMenu />
        </div>
        {menu ? (
          <div className='menu2'>
            <Link to="/">
              <b>Menu</b>
            </Link>
            <Link to="/AboutPage">
              <b>About</b>
            </Link>
            <Link to="/FurniturePage">
              <b>Furnitures</b>
            </Link>
            <Link to="/BlogPage">
              <b>Blog</b>
            </Link>
            <Link to="/ContactPage">
              <b>Contact Us</b>
            </Link>
            <b>
              Login
              <BiSolidUser />
            </b>
            <AiOutlineSearch />
          </div>
        ) : ""}

      </div>
    </div>
  )
}

export default Components1
