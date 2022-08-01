import React from 'react'
import background from '../back.mp4';
const Videobackground = () => {
  return (
    <div className='main'>
      <video autoPlay loop muted className='video'>
        <source
          src={background}
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Videobackground
