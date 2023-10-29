import React from 'react'
import "./Components6.css"

const Components6 = () => {
  return (
    <div>
      <div className='contact'>
        <div className='contact-column'>
            <h1>CONTACT US</h1>
            <input type="text" placeholder='Your Name' />
            <input type="number" placeholder='Phone Number' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button className='contact-but'>SEND</button>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12112.103770662323!2d44.952986161278275!3d40.6293098424952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40404f93dbc184b7%3A0xa064ad508450454c!2z0KLQvtCy0LDQs9GD0YU!5e0!3m2!1sru!2sam!4v1698395276282!5m2!1sru!2sam" width="500px" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
      </div>
    </div>
  )
}

export default Components6