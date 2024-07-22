import { css } from 'styled-components';

/**
 * 문자열로 속성 이름을 받아 번거로운 테마 프롭 전환을 대신해주는 함수
 * @param {string} name theme.js에 각 테마 모드의 속성명
 * @returns {css} theme 테마 파일의 컬러값
 */
export const getThemeColor = name => {
  return css`
    ${({ theme }) => theme[name]}
  `;
};
