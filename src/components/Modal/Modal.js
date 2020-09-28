import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Backdrop from './Backdrop/Backdrop';


//MODAL

 
const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: ${({ opened }) =>
    opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  max-width: 50rem;
  box-shadow: 0 0.5rem 3.5em black;
  border-radius: 1rem;
  background-color: white;
  transition: all 0.1s;
  padding: 1rem 3rem;
 
`;

const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

//.memo and props are used to only render if modal is opened
const Modal = React.memo(
  ({ opened, close, children }) => {
    return ReactDOM.createPortal(       //first argument is what you want to render, the second you pass in your selector
      <>
        <Backdrop close={close} opened={opened} />
        <WrappedModal opened={opened} >
          <InsideWrapper >{children}</InsideWrapper>
        </WrappedModal>
      </>,
      document.getElementById('root-modal')    //id: root-modal is also added to index.html 
    );
  },
  (prevProps, nextProps) => {
    return prevProps.opened === nextProps.opened;
  }
);

export default Modal;