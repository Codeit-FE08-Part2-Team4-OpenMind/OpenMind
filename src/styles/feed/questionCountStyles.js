import styled from 'styled-components';

export const StyledQuestionCountArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;

  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.brown40};

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;
