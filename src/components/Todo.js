import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo (props) {
  const [ showModal, setShowModal ] = useState(false)

  function delete() {
    setShowModal(true)
  }

  function closeModal () {
    setShowModal(false)
  }

  return(
    <div className="card">
      <h1>{props.text}</h1>
      <div className="actions">
        <button className="btn" onClick={delete}>Delete</button>
      </div>
      { showModal && <Modal onCancel={closeModal} onConfirm={closeModal}/> }
      { showModal && <Backdrop onCancel={closeModal} /> }
    </div>
  )
}

export default Todo