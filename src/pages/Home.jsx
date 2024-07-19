import styled from 'styled-components';
import Button from '../components/@shared/Button';
import SoftArrow from '../assets/images/softarrow.png';
import DeepArrow from '../assets/images/deeparrow.png';
import React, { useState } from 'react';

const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  return (
    <ButtonContainer>
      <Button pagePath="/post/123" width="504px" height="100px" imgSrc={SoftArrow}>
        질문하러 가기
      </Button>
    </ButtonContainer>
  );
}

export default Home;
