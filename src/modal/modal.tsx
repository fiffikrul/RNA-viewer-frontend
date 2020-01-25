import React from 'react';
import Modal from 'react-modal';


export const MyModal = (props: any) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      // onAfterOpen={props.afterOpenModal}
      // onRequestClose={props.closeModal}
      // style={props.styles}
      // contentLabel="Example Modal"
    >
      {props.children}
    </Modal>
  );
}