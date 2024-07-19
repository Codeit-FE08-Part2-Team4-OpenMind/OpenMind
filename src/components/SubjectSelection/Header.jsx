import styled from 'styled-components';
import LightBrownButton from '../@shared/LightBrownButton';
import LogoImgUrl from '../../assets/images/logo.svg';

const StyledHeaderArea = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 50px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LogoImg = styled.img`
  display: block;
  width: 146px;
  height: 57px;
`;

function Header() {
  return (
    <StyledHeaderArea>
      <LogoImg src={LogoImgUrl} />
      <LightBrownButton>답변하러 가기</LightBrownButton>
    </StyledHeaderArea>
  );
}

export default Header;
