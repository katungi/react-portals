import React from 'react'

export default function Modal({open, children, onClose}) {
 if(!open) return null;
  return(
    <>
    <div className='fixed top-0 left-0 right-0 bottom-0' style={{
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, .7)',
    }} />
    <div className='fixed top-1/2 left-1/2 p-12 bg-white' style={{zIndex: 1000,  transform: 'translate(-50%, -50%)'}}>
        <button onClick={onClose}>Close Modal</button>
        {children}
    </div>
    </>
  )
}
