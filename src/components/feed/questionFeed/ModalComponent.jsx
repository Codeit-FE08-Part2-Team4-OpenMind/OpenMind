import Modal from 'react-modal';
import { useState } from 'react';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const StyledProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledUserName = styled.h2`
  margin-top: 10px;
  font-size: 1.5em;
`;

function ModalComponent({ imageSource, name }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>모달 열기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <StyledProfileImg src={imageSource} alt="프로필" />
        <StyledUserName>{name}</StyledUserName>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}

export default ModalComponent;
