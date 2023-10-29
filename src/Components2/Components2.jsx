import React, { useState } from 'react'
import "./Components2.css"

const Components2 = () => {
  const[slide, setSlide] = useState(false)
  const[background, setBackground] = useState("")
  return (
    <div>
      <div className='needs'>
        <div className='text-img' id={slide ? "animation" : ""}>
            <div className='needs-text'>
                <b>For All Your</b>
                <b>Furniture Needs</b>
                <p style={{width: "auto"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit. </p>
                <div className='needs-button'>
                    <button className='needs-button1'>Contact Us</button>
                    <button className='needs-button2'>About Us</button>
                </div>
            </div>
            <div className='needs-img'></div>
        </div>
        <div className='needs-icons'>
            <div className={background == "1" ? "active" : ""} onClick={() => {
              setSlide(!slide)
              setBackground("1")
            }}></div>
            <div className={background == "2" ? "active" : ""} onClick={() => {
              setSlide(!slide)
              setBackground("2")
            }} >
            </div>
            <div className={background == "3" ? "active" : ""} onClick={() => {
              setSlide(!slide)
              setBackground("3")
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default Components2