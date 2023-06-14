import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import { ReactNode } from "react";

interface ModalInterface {
  children: ReactNode;
  // onClose: () => void;
}

const Modal = ({ children }: ModalInterface) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("..");
  };

  return (
    <>
      <div className={classes.backdrop} onClick={handleClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
