import styled from 'styled-components';
import LogoImgUrl from '../../assets/images/logo.svg';
import ProfileImgUrl from '../../assets/images/profile.png';
import LinkIconUrl from '../../assets/images/ic_Link.png';
import KakaoIconUrl from '../../assets/images/ic_Kakao.png';
import FacebookIconUrl from '../../assets/images/ic_Facebook.png';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0px;
`;

const StyledHeaderContainer = styled.div`
  margin: 50px auto 0px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const LogoImg = styled.img`
  display: block;
  width: 170px;
  height: 67px;
`;

const ProfileImg = styled.img`
  display: block;
  width: 136px;
  height: 136px;
`;

const StyledNameSection = styled.section`
  font-size: 32px;
  font-weight: 400;
  color: var(--gray60);
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

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <LogoImg src={LogoImgUrl} />
        <ProfileImg src={ProfileImgUrl} />
        <StyledNameSection>아초는고양이</StyledNameSection>
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
