function Modal (props) {

  function cancelDelete() {
    props.onCancel()
  }

  function confirmDelete() {
    props.onConfirm()
  }

  return(
    <div className="modal">
    <p>
      <button className="btn btn-alt" onClick={cancelDelete}>Cancel</button>
      <button className="btn" onClick={confirmDelete}>Confirm</button>
    </p>
    </div>
  )
}

export default Modal