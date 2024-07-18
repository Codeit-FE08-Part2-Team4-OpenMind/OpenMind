import ReactModal from 'react-modal';
import ModalComponent from '../components/feed/questionFeed/ModalComponent';
import profile from '../assets/images/samples/profile-sample.png';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/@shared/theme';
import { useState } from 'react';

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={showModal}>열기</button>
      {modalIsOpen && (
        <ModalComponent isOpen={showModal} onRequestClose={closeModal} profileImg={profile} name="go5rae" />
      )}
    </ThemeProvider>
  );
}

export default Home;
