import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='aa'>
      <div className='bb'>
        <div className='cc'>
          <h3>About Us</h3>
          <p>Welcome to FitLife Gym! We are dedicated to helping you achieve your fitness goals with state-of-the-art equipment, expert trainers, and a welcoming community.</p>
        </div>

        <div className='cc'>
          <h3>Quick Links</h3>
          <ul className='dd'>
            <li><a href="#" className='ee'>Home</a></li>
            <li><a href="#" className='ee'>About Us</a></li>
            <li><a href="#" className='ee'>Classes</a></li>
            <li><a href="#" className='ee'>Membership</a></li>
            <li><a href="#" className='ee'>Contact Us</a></li>
          </ul>
        </div>

        <div className='cc'>
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> 123 Fitness Street, Workout City, GymState 45678</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@fitlifegym.com</p>
        </div>

        <div className='cc'>
          <h3>Follow Us</h3>
          <div className='ff'>
            <a href="#" style={{ color: "white" }}><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" style={{ width: "30px" }} /></a>
            <a href="#" style={{ color: "white" , filter: 'invert(100%)' }}><img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="Twitter" style={{ width: "30px" }} /></a>
            <a href="#" style={{ color: "white"  }}><img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="Instagram" style={{ width: "30px" }} /></a>
            <a href="#" style={{ color: "white" }}><img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="YouTube" style={{ width: "30px" }} /></a>
          </div>
        </div>
      </div>

      <div className='gg'>
        <p>&copy; 2024 FitLife Gym. All rights reserved.</p>
      </div>
    </div>

  )
}

export default Footer
