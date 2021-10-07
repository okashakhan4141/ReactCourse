function Modal(props) {
  const handleCancel = () => props.clearScreen();
  const handleConfirm = () => props.clearScreen();

  return (
    <div className="modal">
      <h2>Are you sure?</h2>
      <button className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
