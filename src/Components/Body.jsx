import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='cen'>

      <h1>THE BEST FITNESS STUDIO</h1>
      <h2>IN YOUR TOWN</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius excepturi magni. Quis, impedit dolore?</p>

      <div className='imag'>
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='ek' />
        <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='do' />
        <img src="https://plus.unsplash.com/premium_photo-1664109999494-ddfb14faaaeb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='tin' />
      </div>
      <div className='btn'>
        <button>Get Started</button>
        <button>Watch Videos</button>
      </div>
      <div className='infoimg'>
        <div className='info'>
          <div className='ekk'>
            <h1>150+</h1>
            <h4>Active Trainee Getting Trained</h4>
          </div>
          <div className='doo'>
            <h1>90+</h1>
            <h4>Active Course Available</h4>
          </div>
          <div className='tiin'>
            <h1>50+</h1>
            <h4>Winning Award</h4>
          </div>

        </div>
        <div className='photo'>
          <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Body
