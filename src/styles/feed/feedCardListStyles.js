import styled from 'styled-components';

export const StyledFeedCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${({ theme }) => theme.brown10};

  max-width: 716px;
  margin: 189px auto 136px;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.brown30};
  border-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 704px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 327px;
    margin: 176px auto 126px;
  }
`;
