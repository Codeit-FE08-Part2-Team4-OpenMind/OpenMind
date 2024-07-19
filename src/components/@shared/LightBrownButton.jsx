import styled from 'styled-components';
import rightArrowImgUrl from '../../assets/images/arrow-right.svg';

const Button = styled.button`
  background-color: var(--brown10);
  border: 1px solid var(--brown40);
  border-radius: 8px;

  color: var(--brown40);
  font-size: 16px; // fontSize(small)
  font-weight: 400; // fontWeight(regular)

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 14px; // fontSize(xsmall)
    gap: 4px;
    padding: 8px 12px;
  }
`;

const ArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;

function LightBrownButton({ children }) {
  return (
    <Button>
      {children}
      <ArrowImg src={rightArrowImgUrl} />
    </Button>
  );
}

export default LightBrownButton;
