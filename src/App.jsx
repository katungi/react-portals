import { useState } from 'react'
import Modal from './Modal.jsx'
function App() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
     <div className='relative w-full mb-10' style={{zIndex: 1}}> 
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setModalOpen(true)}>Open Modal</button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <p>Modal Content</p>
        </Modal>
     </div>
     <div className='relative bg-purple-600 p-3' style={{zIndex: 2}}>
        <p>We must be seen</p>
     </div>
    </>
  )
}

export default App
