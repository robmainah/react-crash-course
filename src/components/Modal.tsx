import classes from "./Modal.module.css";
import { ReactNode } from "react";

interface ModalInterface {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalInterface) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
