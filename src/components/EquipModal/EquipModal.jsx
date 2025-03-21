import './EquipModal.css'

const EquipModal = (props) => {
  return (
    <div
      className="modal-wrapper"
      onClick={props.handleModal}
    >
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
      >
        <p>
          CONTENT
        </p>
      </div>
    </div>
  );
}

export default EquipModal;
