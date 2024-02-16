import { useEffect,useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import { StyledCloseBtn, StyledModal, StyledOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, close }) => {

  const closeModal = useCallback(({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  },[close]);

  useEffect(()=>{
    window.addEventListener('keydown', closeModal);
    return ()=> window.removeEventListener('keydown', closeModal);
  },[closeModal])

  return createPortal(
    <StyledOverlay  onClick={closeModal}>
      <StyledModal >
        <StyledCloseBtn
          type="button"
          aria-label="close button"
          onClick={close}
        >
          <CgClose />
        </StyledCloseBtn>
        {children}
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}
export default Modal;
