import React, { useState } from 'react'
import "./Components5.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Components5 = () => {
  const[click, setClick] = useState(false);
  const[background, setBackground] =  useState("")
  return (
    <div>
      <div className='blog'>
        <b style={{ fontSize: "30px" }}>LATEST BLOG</b>
        <div className='blog-flex'>
          <div className='blog-div'>
            <div className='blog-img'></div>
            <b style={{ width: "300px", fontSize: "25px" }}>Look even slightly believable. If you are</b>
            <p style={{ width: "300px" }}>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button className='blog-but'>READ MORE</button>
          </div>
          <div className='blog-div'>
            <div className='blog-img2'></div>
            <b style={{ width: "300px", fontSize: "25px" }}>Anything embarrassing hidden in the middle</b>
            <p style={{ width: "300px" }}>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button className='blog-but'>READ MORE</button>
          </div>
          <div className='blog-div2'>
            <div className='blog-img3'></div>
            <b style={{ width: "300px", fontSize: "25px" }}>Molestias magni natus dolores odio commodi. Quaerat!</b>
            <p style={{ width: "300px" }}>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button className='blog-but'>READ MORE</button>
          </div>
        </div>
        <h1>Testimonail</h1>
        <div className='testimonail-div' id={click ? "animation2" : ""}>
          <div className='testimonail-img'></div>
          <div className='testimonail-column'>
            <b>''</b>
            <b style={{ color: "#7DD0EA" }}>Sialya</b>
            <p style={{ width: "auto" }}>It is a long established fact that a reader will bedistracted by the readable cIt is a long established factthat a reader will be distracted by the readable c</p>
          </div>
        </div>
        <div className='test-flex'>
          <div className='test-icon' onClick={() => {
            setClick(!click)
            setBackground(1);
          }}>
          <AiOutlineArrowLeft />
          </div>
          <div className='test-icon' onClick={() => {
            setClick(!click)
            setBackground(2)
          }}>
           <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components5