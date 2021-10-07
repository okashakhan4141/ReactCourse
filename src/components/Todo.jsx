import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, setModalState] = useState(false);

  const handleDelete = () => setModalState(true);
  const clearModal = () => setModalState(false);

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {showModal && <Modal clearScreen={clearModal} />}
      {showModal && <Backdrop clearScreen={clearModal} />}
    </div>
  );
}

export default Todo;
