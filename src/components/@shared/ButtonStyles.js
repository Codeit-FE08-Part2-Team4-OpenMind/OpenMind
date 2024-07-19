import styled, { css } from 'styled-components';

//연한 갈색 버튼
export const softButtonStyle = {
  background: 'var(--brown10)',
  text: 'var(--brown40)',
  border: 'var(--brown40)',
  pressed: 'var(--brown20)',
};

//진한 갈색 버튼
export const deepButtonStyle = {
  background: 'var(--brown40)',
  text: 'var(--gray10)',
  border: 'var(--brown50)',
  pressed: 'var(--brown50)',
};

//화살표 이미지
export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
`;
