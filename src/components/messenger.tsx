import React from 'react'
import { BsMessenger } from 'react-icons/bs'

const messenger = () => {
  return (
    <div>
        <p style={{
                     position: 'fixed',
          fontSize: '34px',
          bottom: '80px',
          right: '30px',
          cursor: 'pointer',
          textAlign: 'center',
          color: 'rgb(10, 124, 255)',
          border: 'none',
        }}><BsMessenger/></p>
    </div>
  )
}

export default messenger