import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Modal({open, children, onClose}) {
 if(!open) return null;

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 100000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 100000
}

  return ReactDOM.createPortal(
    <>
    <div style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
    </div>
    </>,
    document.getElementById('portal')
  )
}
