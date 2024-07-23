import styled from 'styled-components';
import LogoImgUrl from '../../../assets/images/logo.svg';
import LinkIconUrl from '../../../assets/images/ic_Link.png';
import KakaoIconUrl from '../../../assets/images/ic_Kakao.png';
import FacebookIconUrl from '../../../assets/images/ic_Facebook.png';

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0px;
`;

const StyledHeaderContainer = styled.div`
  margin: 50px auto 0px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin: 40px auto 0px;
    width: 150px;
  }
`;

const StyledLogoImg = styled.img`
  display: block;
  width: 170px;
  height: 67px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 124px;
    height: 49px;
  }
`;

const StyledProfileImg = styled.img`
  display: block;
  width: 136px;
  height: 136px;
  border-radius: 50%;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 104px;
    height: 104px;
  }
`;

const StyledNameSection = styled.section`
  font-size: 32px;
  font-weight: 400;
  color: var(--gray60);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 24px;
  }
`;

const StyledSharingArea = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledSharingImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

// 질문 페이지에서 profileImg prop 받아오면 적용시켜주기
function Header({ name, imageSource }) {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogoImg src={LogoImgUrl} />
        <StyledProfileImg src={imageSource} />
        <StyledNameSection>{name}</StyledNameSection>
        <StyledSharingArea>
          <StyledSharingImg src={LinkIconUrl} alt="링크 복사" />
          <StyledSharingImg src={KakaoIconUrl} alt="카카오 공유" />
          <StyledSharingImg src={FacebookIconUrl} alt="페이스북 공유" />
        </StyledSharingArea>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
