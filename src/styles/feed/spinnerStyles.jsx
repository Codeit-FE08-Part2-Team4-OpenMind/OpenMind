import React from 'react';
import styled, { keyframes } from 'styled-components';
import SpinnerImg from '../../assets/images/spinner.png';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  width: 48px;
  height: 48px;
  margin: 20px auto;
  background-image: url('${SpinnerImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 1.5s linear infinite;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
