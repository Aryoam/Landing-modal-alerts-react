import "../styles/modal.css";
import warning from "../img/warningIcon.svg";
import success from "../img/successIcon.svg";
import error from "../img/errorIcon.svg";

const Modal = ({ children, isOpen, closeModal, type, title, text }) => {
  const handleActive = (e) => e.stopPropagation();
  return (
    <div className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
      <div className="containerModal" onClick={handleActive}>
        <div className="closeModal" onClick={closeModal}>
          X
        </div>
        <img
          src={
            type == "warning"
              ? warning
              : type == "success"
              ? success
              : type == "error"
              ? error
              : null
          }
          alt={`${type} icon`}
          className="iconAlert"
        />
        <h3 class="titleModal">{title}</h3>
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
