import React from 'react'

const Footer = () => {
        const getCurrentYear = () => {
          const date = new Date();
          return date.getFullYear();
        };
  return (
    <div>
          <p>youtube2mp3conv &copy; {getCurrentYear()}</p>
          <p>developed by: R2sl</p>
    </div>
  )
}

export default Footer