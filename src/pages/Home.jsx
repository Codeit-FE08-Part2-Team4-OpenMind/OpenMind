import ModalComponent from '../components/feed/questionFeed/ModalComponent';
import profile from '../assets/images/samples/profile-sample.png';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/@shared/theme';
import { useState } from 'react';
import showToast from '../components/@shared/Toast';

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
    showToast;
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={showModal}>열기</button>
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        profileImg={profile}
        name="go5rae"
        subjectId="5179"
      />
    </ThemeProvider>
  );
}

export default Home;
